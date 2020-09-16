import shop_data from "@/dummy-data/shop.data.js";
import { enhancedGetters } from "vuex-strong-cache";

const state = () => ({
  collections: shop_data,
});

const mutations = {};

const actions = {};

const getters = enhancedGetters({
  getCollectionData(state) {
    return state.collections;
  },
  getCollectionsByCategory(state) {
    return function(id) {
      return state.collections[id];
    };
  },
});

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
