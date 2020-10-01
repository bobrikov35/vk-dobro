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
    showCreatorDobrothon: false,
    showPayForm: false,
    target: 0,
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
    SET_SHOW_CREATOR_DOBROTHON(state, value) {
      state.showCreatorDobrothon = value;
    },
    SET_SHOW_PAY_FORM(state, value) {
      state.showPayForm = value;
    },
    SET_TARGET(state, target) {
      state.target = target;
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
    setTarget({ commit }, target) {
      commit('SET_TARGET', target);
    },
    switchCreatorDobrothon({ state, commit }) {
      commit('SET_SHOW_CREATOR_DOBROTHON', !state.showCreatorDobrothon);
    },
    switchPayForm({ state, commit }) {
      commit('SET_SHOW_PAY_FORM', !state.showPayForm);
    },
  },
  getters: {
    getAmount: (state) => state.amount,
    getCategories: (state) => state.categories.list,
    getCategoryIndex: (state) => state.categories.current,
    getCurrentCategory: (state) => state.categories.list[state.categories.current],
    getCurrentDonatesTab: (state) => state.donatesTabs.list[state.donatesTabs.current],
    getDonatesTabs: (state) => state.donatesTabs.list,
    getDonatesTabIndex: (state) => state.donatesTabs.current,
    getTarget: (state) => state.target,
    isShowCreatorDobrothon: (state) => state.showCreatorDobrothon,
    isShowPayForm: (state) => state.showPayForm,
  },
  modules: {
    projects,
    single,
  },
};

export default project;
