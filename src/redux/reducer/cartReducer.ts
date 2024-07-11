import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
    id: string;
    dish: string;
    imgdata: string;
    address: string;
    delimg: string;
    price: number;
    stock: number;
    quantity: number;
}

export interface CartReducerInitialState {
    cartItems: CartItem[];
    subtotal: number;
    total: number;
}

const initialState: CartReducerInitialState = {
    cartItems: [],
    subtotal: 0,
    total: 0,
}

export const cartReducer = createSlice({
    name: 'cartReducer',
    initialState,
    reducers: {
        //add to cart
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const index = state.cartItems.findIndex(
                (i) => i.id === action.payload.id
            );

            if (index !== -1)
                state.cartItems[index].quantity += 1;
            else {
                const temp = { ...action.payload, quantity: 1 }
                state.cartItems = [...state.cartItems, temp]
            }
        },

        removeToCart: (state, action: PayloadAction<CartItem>) => {
            const index = state.cartItems.findIndex(
                (i) => i.id === action.payload.id
            );

            if (index !== -1)
                state.cartItems[index].quantity -= 1;
        },

        removeCartItem: (state, action: PayloadAction<string>) => {
            state.cartItems = state.cartItems.filter(
                (i) => i.id !== action.payload
            )
        },

        cacalculatePrice: (state) => {
            const subtotal = state.cartItems.reduce(
                (total, item) => total + item.price * item.quantity, 0
            )

            state.subtotal = subtotal
            state.total = state.subtotal
        },

        clearCart: () => initialState
    }
})

export const { addToCart, removeToCart, removeCartItem, clearCart, cacalculatePrice } = cartReducer.actions

