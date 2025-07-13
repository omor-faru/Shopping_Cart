import { create } from "zustand";
import { initialState } from "../state/state";
import { cartReducer } from "../reducer/cart";

export const useCartStore = create((set)=>({
    ...initialState,
    dispatch:(action)=>set((state)=>cartReducer(state, action))
}))