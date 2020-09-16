import section_data from "@/dummy-data/sections.data.js";

const state = () => ({
  sections: section_data,
});

const mutations = {};

const actions = {};

const getters = {
  getSectionData(state) {
    return state.sections;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
