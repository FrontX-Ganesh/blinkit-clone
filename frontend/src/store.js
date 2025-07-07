import { create } from "zustand";

export const useGroceryCart = create((set) => ({
  productCart: [],
  addProductToCart: (item) =>
    set((state) => ({ productCart: [...state, item] })),
}));
