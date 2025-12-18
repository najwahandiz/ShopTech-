import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Slices/cartSlice'

// Charger le panier depuis le localStorage
const loadCartFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("cart");
        if (serializedState === null) {
            return undefined;
        }
        return { cart: JSON.parse(serializedState) };
    } catch (e) {
        return undefined;
    }
};

// Sauvegarder le panier dans le localStorage
const saveCartToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state.cart);
        localStorage.setItem("cart", serializedState);
    } catch (e) {}
};

const preloadedState = loadCartFromLocalStorage();

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState,
});

store.subscribe(() => {
    saveCartToLocalStorage(store.getState());
});