import { userActions } from "./user.actions";

const state = () => ({
  currentUser: null,
});

const mutations = {
  [userActions.SET_CURRENT_USER]: (state, payload) => {
    state.currentUser = payload;
  },
};

const actions = {
  setCurrentUser({ commit }, payload) {
    commit(userActions.SET_CURRENT_USER, payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
