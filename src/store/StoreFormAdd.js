import { create } from "zustand";

// Store for form add | User | Lesson | and We now Is Open or Close !
const StoreFormAdd = create((set) => ({
  IsOpen: false,
  //   setIsOpen: () => set((state) => ({ IsOpen: state.IsOpen })),
  setIsOpen: (value) => set({ IsOpen: value }),
}));
export default StoreFormAdd;
