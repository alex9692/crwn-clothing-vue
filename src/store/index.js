import Vue from "vue";
import Vuex, { createLogger } from "vuex";

import user from "@/store/modules/user";
import cart from "@/store/modules/cart";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    cart,
  },
  plugins: [createLogger()],
});

export default store;
