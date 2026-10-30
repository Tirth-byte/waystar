"use client";

import { useSyncExternalStore, useCallback } from "react";

const STORAGE_KEY = "waystar_saved_residences_v2";
const STORAGE_EVENT = "waystar_saved_change";

const EMPTY_SNAPSHOT: string[] = [];
let cachedRaw: string | null = null;
let cachedParsed: string[] = EMPTY_SNAPSHOT;

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener(STORAGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(STORAGE_EVENT, callback);
  };
}

function getSnapshot(): string[] {
  if (typeof window === "undefined") return EMPTY_SNAPSHOT;
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || "[]";
    if (raw !== cachedRaw) {
      cachedRaw = raw;
      const parsed = JSON.parse(raw);
      cachedParsed = Array.isArray(parsed) ? parsed : EMPTY_SNAPSHOT;
    }
    return cachedParsed;
  } catch {
    return EMPTY_SNAPSHOT;
  }
}

function getServerSnapshot(): string[] {
  return EMPTY_SNAPSHOT;
}

export function useSavedResidences() {
  const savedIds = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const saveResidence = useCallback((id: string) => {
    try {
      const current = getSnapshot();
      if (!current.includes(id)) {
        const next = [...current, id];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        window.dispatchEvent(new Event(STORAGE_EVENT));
      }
    } catch {}
  }, []);

  const removeResidence = useCallback((id: string) => {
    try {
      const current = getSnapshot();
      const next = current.filter((item) => item !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      window.dispatchEvent(new Event(STORAGE_EVENT));
    } catch {}
  }, []);

  const toggleSave = useCallback((id: string) => {
    try {
      const current = getSnapshot();
      const next = current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      window.dispatchEvent(new Event(STORAGE_EVENT));
    } catch {}
  }, []);

  const isSaved = useCallback((id: string) => savedIds.includes(id), [savedIds]);

  return {
    savedIds,
    isLoaded: true,
    saveResidence,
    removeResidence,
    toggleSave,
    isSaved,
    savedCount: savedIds.length,
  };
}
