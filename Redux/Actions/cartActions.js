import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../constants";

export function addToCart(payload) {
  return {
    type: ADD_TO_CART,
    payload,
  };
}

export function removeFromCart(payload) {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
}

export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}
