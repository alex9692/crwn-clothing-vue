import { addItemToCart } from "@/store/modules/cart/cart.utils.js";

const cartActions = {
  TOGGLE_CART_DROPDOWN: "TOGGLE_CART_DROPDOWN",
  ADD_ITEM: "ADD_ITEM",
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
};

const actions = {
  toggleCartDropdown({ commit }) {
    commit(cartActions.TOGGLE_CART_DROPDOWN);
  },
  addItemToCart({ commit }, payload) {
    commit(cartActions.ADD_ITEM, payload);
  },
};

const getters = {
  isHidden(state) {
    return state.hidden;
  },
  cartLength(state) {
    return state.cartItems.reduce((acc, cur) => acc + cur.quantity, 0);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
