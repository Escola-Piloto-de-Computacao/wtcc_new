import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DateState { currentDate: string; setCurrentDate: (date: string) => void; }
export const useChangeDate = create<DateState>()(
    persist(
        (set) => ({
            currentDate: "todos",
            setCurrentDate: (date: string) => set({ currentDate: date }),
        }),
        {
            name: "minicourse-date", // default to LocalStorage
        }
    )
);