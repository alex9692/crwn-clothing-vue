import Vue from "vue";
import Vuex, { createLogger } from "vuex";

import user from "./modules/user";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
  },
  plugins: [createLogger()],
});

export default store;
