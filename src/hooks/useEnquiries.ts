"use client";

import { useSyncExternalStore, useCallback } from "react";
import { EnquirySubmission } from "@/types/property";

const ENQUIRIES_STORAGE_KEY = "waystar_viewing_enquiries_demo_v1";
const ENQUIRIES_EVENT = "waystar_enquiries_changed";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(ENQUIRIES_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(ENQUIRIES_EVENT, callback);
  };
}

function getSnapshot(): string {
  try {
    return localStorage.getItem(ENQUIRIES_STORAGE_KEY) || "[]";
  } catch {
    return "[]";
  }
}

function getServerSnapshot(): string {
  return "[]";
}

export function useEnquiries() {
  const rawJson = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  let enquiries: EnquirySubmission[] = [];
  try {
    const parsed = JSON.parse(rawJson);
    if (Array.isArray(parsed)) {
      enquiries = parsed;
    }
  } catch {
    enquiries = [];
  }

  const saveEnquiry = useCallback(
    (submission: Omit<EnquirySubmission, "id" | "submittedAt" | "isDemo">) => {
      const newEntry: EnquirySubmission = {
        ...submission,
        id: `enq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        submittedAt: new Date().toISOString(),
        isDemo: true,
      };

      try {
        const currentStored = localStorage.getItem(ENQUIRIES_STORAGE_KEY);
        const currentList: EnquirySubmission[] = currentStored
          ? JSON.parse(currentStored)
          : [];
        const next = [newEntry, ...currentList];
        localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify(next));
        window.dispatchEvent(new Event(ENQUIRIES_EVENT));
      } catch {
        console.warn("Could not persist enquiry to local storage");
      }

      return newEntry;
    },
    []
  );

  return {
    enquiries,
    saveEnquiry,
    isLoaded: true,
    count: enquiries.length,
  };
}
