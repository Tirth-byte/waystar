"use client";

import { useSyncExternalStore, useCallback, useMemo } from "react";
import { PROPERTIES } from "@/data/properties";
import { Property } from "@/types/property";

const STORAGE_KEY = "waystar_favourite_residences_v1";
const EVENT_NAME = "waystar_favourites_changed";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(EVENT_NAME, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(EVENT_NAME, callback);
  };
}

function getSnapshot(): string {
  try {
    return localStorage.getItem(STORAGE_KEY) || "[]";
  } catch {
    return "[]";
  }
}

function getServerSnapshot(): string {
  return "[]";
}

export function useFavourites() {
  const rawJson = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const favouriteIds: string[] = useMemo(() => {
    try {
      const parsed = JSON.parse(rawJson);
      if (Array.isArray(parsed)) {
        return parsed;
      }
      return [];
    } catch {
      return [];
    }
  }, [rawJson]);

  const toggleFavourite = useCallback((id: string) => {
    try {
      const currentStored = localStorage.getItem(STORAGE_KEY);
      const currentList: string[] = currentStored ? JSON.parse(currentStored) : [];
      const next = currentList.includes(id)
        ? currentList.filter((item) => item !== id)
        : [...currentList, id];

      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      window.dispatchEvent(new Event(EVENT_NAME));
    } catch {
      console.warn("Could not persist favourite to local storage");
    }
  }, []);

  const isFavourite = useCallback(
    (id: string) => {
      return favouriteIds.includes(id);
    },
    [favouriteIds]
  );

  const favouriteProperties: Property[] = useMemo(() => {
    return PROPERTIES.filter((property) => favouriteIds.includes(property.id));
  }, [favouriteIds]);

  return {
    favouriteIds,
    favouriteProperties,
    toggleFavourite,
    isFavourite,
    isLoaded: true,
    count: favouriteIds.length,
  };
}
