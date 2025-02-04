import { create } from "zustand";

export const useNotifecation = create((set) => ({
  IsSucOrLoseorNote: {
    BgColor: null,
    TextNotifeaction: null,
    Show: false,
  },
  setIsSucOrLoseorNote: (value) =>
    set(() => ({ IsSucOrLoseorNote: { ...value } })),
}));
