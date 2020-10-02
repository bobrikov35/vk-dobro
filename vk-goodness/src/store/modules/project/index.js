import { DATA } from '@/app';
import single from '@/store/modules/project/single';

const project = {
  namespaced: true,
  state: {
    amount: 0,
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
    getCurrentDonatesTab: (state) => state.donatesTabs.list[state.donatesTabs.current],
    getDonatesTabs: (state) => state.donatesTabs.list,
    getDonatesTabIndex: (state) => state.donatesTabs.current,
    getTarget: (state) => state.target,
    isShowCreatorDobrothon: (state) => state.showCreatorDobrothon,
    isShowPayForm: (state) => state.showPayForm,
  },
  modules: {
    single,
  },
};

export default project;
