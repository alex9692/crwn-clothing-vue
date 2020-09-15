import {
  addItemToCart,
  removeItemFromCart,
  subtractItemFromCart,
} from "@/store/modules/cart/cart.utils.js";

const cartActions = {
  TOGGLE_CART_DROPDOWN: "TOGGLE_CART_DROPDOWN",
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  SUBTRACT_ITEM: "SUBTRACT_ITEM",
};

const state = () => ({
  hidden: true,
  cartItems: [],
});

const mutations = {
  [cartActions.TOGGLE_CART_DROPDOWN]: (state) => {
    state.hidden = !state.hidden;
  },
  [cartActions.ADD_ITEM]: (state, payload) => {
    state.cartItems = addItemToCart(state.cartItems, payload);
  },
  [cartActions.REMOVE_ITEM]: (state, payload) => {
    state.cartItems = removeItemFromCart(state.cartItems, payload);
  },
  [cartActions.SUBTRACT_ITEM]: (state, payload) => {
    state.cartItems = subtractItemFromCart(state.cartItems, payload);
  },
};

const actions = {
  toggleCartDropdown({ commit }) {
    commit(cartActions.TOGGLE_CART_DROPDOWN);
  },
  addItemToCart({ commit }, payload) {
    commit(cartActions.ADD_ITEM, payload);
  },
  removeItemFromCart({ commit }, payload) {
    commit(cartActions.REMOVE_ITEM, payload);
  },
  subtractItemFromCart({ commit }, payload) {
    commit(cartActions.SUBTRACT_ITEM, payload);
  },
};

const getters = {
  isHidden(state) {
    return state.hidden;
  },
  cartLength(state) {
    return state.cartItems.reduce((acc, cur) => acc + cur.quantity, 0);
  },
  cartItems(state) {
    return state.cartItems;
  },
  cartTotal(state) {
    return state.cartItems.reduce(
      (acc, cur) => acc + cur.quantity * cur.price,
      0
    );
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
