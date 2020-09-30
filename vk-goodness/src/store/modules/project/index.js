import { DATA } from '@/app';
import projects from '@/store/modules/project/projects';
import single from '@/store/modules/project/single';

const project = {
  namespaced: true,
  state: {
    amount: 0,
    categories: {
      current: 0,
      list: DATA.categories,
    },
    donatesTabs: {
      current: 3,
      list: DATA.donationTabs,
    },
  },
  mutations: {
    SET_AMOUNT(state, amount) {
      state.amount = amount;
    },
    SET_CATEGORY_INDEX(state, index) {
      state.categories.current = index;
    },
    SET_DONATES_TAB_INDEX(state, index) {
      state.donatesTabs.current = index;
    },
  },
  actions: {
    setAmount({ commit }, amount) {
      commit('SET_AMOUNT', amount);
    },
    setCategoryIndex({ commit }, index) {
      commit('SET_CATEGORY_INDEX', index);
    },
    setDonatesTabIndex({ commit }, index) {
      commit('SET_DONATES_TAB_INDEX', index);
    },
  },
  getters: {
    getAmount: (state) => state.amount,
    getCategories: (state) => state.categories.list,
    getCategoryIndex: (state) => state.categories.current,
    getCurrentCategory: (state) => state.categories.list[state.categories.current],
    getDonatesTabs: (state) => state.donatesTabs.list,
    getDonatesTabIndex: (state) => state.donatesTabs.current,
  },
  modules: {
    projects,
    single,
  },
};

export default project;
