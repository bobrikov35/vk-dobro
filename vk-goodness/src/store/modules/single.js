import { ApiUrls } from '@/config';

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
    SET_RESULT(state, result) {
      state.response = true;
      state.result = result;
    },
    SET_PROJECT(state, data) {
      state.project = data;
    },
  },
  actions: {
    fetchProject({ commit }, name) {
      commit('RESET');
      fetch(`${ApiUrls.single}/${name}`)
        .then((response) => response.json())
        .then((data) => {
          commit('SET_RESULT', true);
          commit('SET_PROJECT', data);
        })
        .catch(() => {
          commit('SET_RESULT', false);
        });
    },
  },
  getters: {
    isResponse: (state) => state.response,
    isResult: (state) => state.result,
    getProject: (state) => state.project,
  },
};

export default single;
