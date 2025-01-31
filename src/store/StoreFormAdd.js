import { create } from "zustand";

const StoreFormAdd = create((set) => ({
  IsOpen: false,
  //   setIsOpen: () => set((state) => ({ IsOpen: state.IsOpen })),
  setIsOpen: (value) => set({ IsOpen: value }),
}));
export default StoreFormAdd;
