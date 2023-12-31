import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        showCart: false,
        changed: false,
    },
    reducers: {
        replaceData(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        
        addItemToCart(state, action) {
            state.changed = true;
            const newItem = action.payload;

            // Check if item already exists in cart
            const existingItem = state.items.find((item) => item.id === newItem.id);

            state.totalQuantity++;
            // state.showCart = true;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1, // Because we are adding a new item
                    totalPrice: newItem.price, // Only one item so total price is the same as price
                    name: newItem.name,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },

        removeItemFromCart(state, action) {
            state.changed = true;
            const id = action.payload;

            const existingItem = state.items.find((item) => item.id === id);

            state.totalQuantity--;

            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },

        setShowCart(state, action) {
            state.showCart = !state.showCart;
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
