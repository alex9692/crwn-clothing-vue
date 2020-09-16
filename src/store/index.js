import Vue from "vue";
import Vuex, { createLogger } from "vuex";
import VuePersistance from "vuex-persist";

import user from "@/store/modules/user";
import cart from "@/store/modules/cart";
import directory from "@/store/modules/directory";
import shop from "@/store/modules/shop";

Vue.use(Vuex);

const vuexPersist = new VuePersistance({
  storage: window.localStorage,
  modules: ["cart"],
});

const store = new Vuex.Store({
  modules: {
    user,
    cart,
    directory,
    shop,
  },
  plugins: [createLogger(), vuexPersist.plugin],
});

export default store;
