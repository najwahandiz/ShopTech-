import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Slices/cartSlice'
import wishlistReducer from './Slices/wishlistSlice'


// Charger le panier et la wishlist depuis le localStorage
const loadStateFromLocalStorage = () => {
    try {
        const cart = localStorage.getItem("cart");
        const wishlist = localStorage.getItem("wishlist");
        const state = {};
        if (cart) state.cart = JSON.parse(cart);
        if (wishlist) state.wishlist = JSON.parse(wishlist);
        return Object.keys(state).length ? state : undefined;
    } catch (e) {
        return undefined;
    }
};

// Sauvegarder le panier et la wishlist dans le localStorage
const saveStateToLocalStorage = (state) => {
    try {
        localStorage.setItem("cart", JSON.stringify(state.cart));
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    } catch (e) {}
};

const preloadedState = loadStateFromLocalStorage();

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer,
    },
    preloadedState,
});

store.subscribe(() => {
    saveStateToLocalStorage(store.getState());
});