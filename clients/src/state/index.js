import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },

    addToCart: (state, action) => {
      const newItem = action.payload.item.id;
      const existingItem = state.cart.find((item) => item.id === newItem);
      if (existingItem) {
        existingItem.count = existingItem.count + 1;
        state.cart = [...state.cart];
      } else {
        state.cart = [...state.cart, action.payload.item];
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count >= 1) {
          item.count--;
        }
        return item;
      });

      // Remove the item from the cart if its count reaches 1
      state.cart = state.cart.filter(
        (item) => !(item.id === action.payload.id && item.count === 0)
      );
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

    restCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
  restCart,
} = cartSlice.actions;

export default cartSlice.reducer;
