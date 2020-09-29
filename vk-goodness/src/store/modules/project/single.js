import { axios } from '@/plugins';
import { CONFIG } from '@/app';

const single = {
  namespaced: true,
  state: {
    project: null,
    response: false,
    result: false,
  },
  mutations: {
    RESET(state) {
      state.project = null;
      state.response = false;
      state.result = false;
    },
    SET_PROJECT(state, data) {
      state.response = true;
      state.result = typeof data === 'object';
      if (state.result) {
        state.project = data;
      }
    },
    SET_ERROR(state) {
      state.response = true;
      state.result = false;
    },
  },
  actions: {
    fetchProject({ commit }, name) {
      commit('RESET');
      axios.get(`${CONFIG.apiUrls.single}${name}/`)
        .then(({ data }) => {
          if (CONFIG.debug) {
            console.log(JSON.parse(JSON.stringify(data)));
          }
          commit('SET_PROJECT', data);
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
    getProject: (state) => state.project,
    isResponse: (state) => state.response,
    isResult: (state) => state.result,
  },
};

export default single;
