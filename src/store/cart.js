import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  deliveryMethod: null,
  paymentMethod: null,
  address: {},
  changed: false,
  isUpdated: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  isUpdated: false,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === newItem.id && item.color === newItem.color
      );
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          image: newItem.image,
          color: newItem.color,
          rate: newItem.rate,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Math.round((existingItem.totalPrice + newItem.price) * 100) / 100;
      }
      state.isUpdated = !state.isUpdated;
    },
    updateCart(state, action) {
      const { id, color } = action.payload;
      const type = action.payload.type;
      const existingItem = state.items.find(
        (item) => item.id === id && item.color === color
      );
      switch (type) {
        case "ADDITION":
          existingItem.quantity++;
          existingItem.totalPrice = existingItem.price * existingItem.quantity;
          state.totalQuantity++;
          break;
        case "SUBSTRACTION":
          existingItem.quantity--;
          existingItem.totalPrice = existingItem.price * existingItem.quantity;
          if (existingItem.quantity === 0) {
            const existingItemIndex = state.items.findIndex(
              (item) => item.id === id
            );
            state.items.splice(existingItemIndex, 1);
          }
          state.totalQuantity--;
          break;
        default:
          throw new Error("błąd");
      }
      state.isUpdated = !state.isUpdated;
    },
    clearCart(state, action) {
      state.items = [];
      state.totalQuantity = 0;
      state.changed = false;
      state.isUpdated = false;
    },
    setDeliveryMethod(state, action) {
      const data = action.payload;
      state.deliveryMethod = data.delivery;
    },
    setPaymentMethod(state, action) {
      const data = action.payload;
      state.paymentMethod = data.payment;
    },
    setAddress(state, action) {
      const data = action.payload;
      state.address = data.address;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
