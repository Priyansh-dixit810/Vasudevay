import { create } from 'zustand';

interface LoadingState {
  hasFinishedLoading: boolean;
  setFinished: () => void;
  resetLoading: () => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  hasFinishedLoading: false,
  setFinished: () => set({ hasFinishedLoading: true }),
  resetLoading: () => set({ hasFinishedLoading: false }),
}));