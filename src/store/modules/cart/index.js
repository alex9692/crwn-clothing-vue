const cartActions = {
  TOGGLE_CART_DROPDOWN: "TOGGLE_CART_DROPDOWN",
};

const state = () => ({
  hidden: true,
});

const mutations = {
  [cartActions.TOGGLE_CART_DROPDOWN]: (state) => {
    state.hidden = !state.hidden;
  },
};

const actions = {
  toggleCartDropdown({ commit }) {
    commit(cartActions.TOGGLE_CART_DROPDOWN);
  },
};

const getters = {
  isHidden(state) {
    return state.hidden;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
