import { createSlice } from "@reduxjs/toolkit";

export interface Cart {
    cartItems: any[];
};


export const initialState: Cart = {
    cartItems: [],
};


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state: Cart, action) => {
            const pseudoId = (new Date()).getTime();
                state.cartItems.push({
                id: pseudoId,
                Productid: action.payload.id,
                title: action.payload.title,
                prices: action.payload.price,
            });
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        removeItemCart: (state: Cart, action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )
        },
    }
});

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((prices: number, cartItem) => {
        return (Math.floor((+cartItem.prices + prices) * 100) / 100);
    }, 0);
}

export const { addToCart, removeItemCart } = cartSlice.actions;

export default cartSlice.reducer;
