import { axios } from '@/plugins';
import { CONFIG } from '@/app';

const stats = {
  namespaced: true,
  state: {
    stats: null,
    response: false,
    result: false,
  },
  mutations: {
    RESET(state) {
      state.stats = null;
      state.response = false;
      state.result = false;
    },
    SET_STATS(state, data) {
      state.response = true;
      state.result = typeof data === 'object';
      if (state.result) {
        state.stats = data;
      }
    },
    SET_ERROR(state) {
      state.response = true;
      state.result = false;
    },
  },
  actions: {
    fetchStats({ commit }) {
      commit('RESET');
      axios.get(CONFIG.apiUrls.stats)
        .then(({ data }) => {
          if (CONFIG.debug) {
            console.log(JSON.parse(JSON.stringify(data)));
          }
          commit('SET_STATS', data);
        })
        .catch((error) => {
          if (CONFIG.debug) {
            console.log(JSON.parse(JSON.stringify(error)));
          }
          commit('SET_ERROR');
        });
    },
  },
  getters: {
    getStats: (state) => state.stats,
    isResponse: (state) => state.response,
    isResult: (state) => state.result,
  },
};

export default stats;
