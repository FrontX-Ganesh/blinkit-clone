import { create } from "zustand";

export const useGroceryCart = create((set) => ({
  productCart: [],
  addProductToCart: (item) =>
    set((state) => {
      const exists = state.productCart.find(
        (product) => product.id === item.id
      );
      if (exists) return state;
      return { productCart: [...state.productCart, item] };
    }),
}));
