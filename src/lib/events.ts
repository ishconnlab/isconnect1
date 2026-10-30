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

export const useEventsStore = create<EventsEditorState>((set) => ({
  editorOpen: false,
  unlocked: false,
  openEditor: () => set({ editorOpen: true }),
  closeEditor: () => set({ editorOpen: false }),
  setUnlocked: (value) => set({ unlocked: value }),
}));
