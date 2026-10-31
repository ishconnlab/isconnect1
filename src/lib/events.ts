import { create } from "zustand";

export type EventType = "bootcamp" | "meetup" | "workshop" | "hackathon";

export interface LabEvent {
  id: string;
  type: EventType;
  title: string;
  date: string;
  time: string;
  location: string;
  summary: string;
  link?: string;
}

interface EventsEditorState {
  editorOpen: boolean;
  unlocked: boolean;
  openEditor: () => void;
  closeEditor: () => void;
  setUnlocked: (value: boolean) => void;
}

const hasAdminToken =
  typeof sessionStorage !== "undefined" && Boolean(sessionStorage.getItem("ishconnect.admin.token"));

export const useEventsStore = create<EventsEditorState>((set) => ({
  editorOpen: false,
  unlocked: hasAdminToken,
  openEditor: () => set({ editorOpen: true }),
  closeEditor: () => set({ editorOpen: false }),
  setUnlocked: (value) => set({ unlocked: value }),
}));
