import { ApiUrls } from '@/config';

const single = {
  namespaced: true,
  state: {
    amount: 0,
    donatesTabIndex: 3,
    response: false,
    result: false,
    project: null,
    error: null,
  },
  mutations: {
    RESET(state) {
      state.response = false;
      state.result = false;
      state.project = null;
      state.error = null;
    },
    SET_PROJECT(state, data) {
      state.response = true;
      state.result = typeof data === 'object';
      state.project = data;
    },
    SET_ERROR(state, error) {
      state.response = true;
      state.result = false;
      state.error = error;
    },
    SET_AMOUNT(state, amount) {
      state.amount = amount;
    },
    SET_DONATES_TAB_INDEX(state, index) {
      state.donatesTabIndex = index;
    },
  },
  actions: {
    fetchProject({ commit }, name) {
      commit('RESET');
      fetch(`${ApiUrls.single}/${name}/`)
        .then((response) => response.json())
        .then((resData) => commit('SET_PROJECT', resData))
        .catch((error) => commit('SET_ERROR', error));
    },
    setAmount({ commit }, amount) {
      commit('SET_AMOUNT', amount);
    },
    setDonatesTabIndex({ commit }, index) {
      commit('SET_DONATES_TAB_INDEX', index);
    },
  },
  getters: {
    getAmount: (state) => state.amount,
    getDonatesTabIndex: (state) => state.donatesTabIndex,
    isResponse: (state) => state.response,
    isResult: (state) => state.result,
    getProject: (state) => state.project,
  },
};

export default single;
