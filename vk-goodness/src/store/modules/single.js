import { ApiUrls } from '@/config';

const single = {
  namespaced: true,
  state: {
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
  },
  actions: {
    fetchProject({ commit }, name) {
      commit('RESET');
      fetch(`${ApiUrls.single}/${name}`)
        .then((response) => response.json())
        .then((resData) => commit('SET_PROJECT', resData))
        .catch((error) => commit('SET_ERROR', error));
    },
  },
  getters: {
    isResponse: (state) => state.response,
    isResult: (state) => state.result,
    getProject: (state) => state.project,
  },
};

export default single;
