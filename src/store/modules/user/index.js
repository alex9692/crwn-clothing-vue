const userActions = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
  SET_LOADING: "SET_LOADING",
};

const state = () => ({
  currentUser: null,
  loading: false,
});

const mutations = {
  [userActions.SET_CURRENT_USER]: (state, payload) => {
    state.currentUser = payload;
  },
  [userActions.SET_LOADING]: (state, payload) => {
    state.loading = payload;
  },
};

const actions = {
  setCurrentUser({ commit }, payload) {
    commit(userActions.SET_CURRENT_USER, payload);
  },
  setLoading({ commit }, payload) {
    commit(userActions.SET_LOADING, payload);
  },
};

const getters = {
  isAuth(state) {
    return !!state.currentUser;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
