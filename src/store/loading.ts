import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface LoadingState {
  hasFinishedLoading: boolean;
  setFinished: () => void;
  resetLoading: () => void;
}
export const useLoadingStore = create<LoadingState>()(
  persist(
    (set) => ({
      hasFinishedLoading: false,
      setFinished: () => set({ hasFinishedLoading: true }),
      resetLoading: () => set({ hasFinishedLoading: false }),
    }),
    {
      name: "Vasudevay-storage",
      storage: createJSONStorage(() => sessionStorage),
    }, 
  ),
);
