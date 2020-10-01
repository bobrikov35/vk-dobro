import { axios } from '@/plugins';
import { CONFIG, VK_MINI_APP } from '@/app';

const dobrothons = {
  namespaced: true,
  state: {
    dobrothons: [],
    response: false,
    result: false,
  },
  mutations: {
    RESET(state) {
      state.dobrothons = [];
      state.response = false;
      state.result = false;
    },
    SET_DOBROTHONS(state, data) {
      state.response = true;
      state.result = typeof data === 'object';
      if (state.result) {
        state.dobrothons = data;
      }
    },
    SET_ERROR(state) {
      state.response = true;
      state.result = false;
    },
  },
  actions: {
    fetchDobrothonsById({ commit }) {
      commit('RESET');
      axios.get(CONFIG.apiUrls.dobrothons, {
        params: VK_MINI_APP.params.start,
      })
        .then(({ data }) => {
          if (CONFIG.debug) {
            console.log(JSON.parse(JSON.stringify(data)));
          }
          commit('SET_DOBROTHONS', data);
        })
        .catch((error) => {
          if (CONFIG.debug) {
            console.log(JSON.parse(JSON.stringify(error)));
          }
          commit('SET_ERROR');
        });
    },
    makeDobrothon(empty, { projectId, amount, target }) {
      axios.post(CONFIG.apiUrls.dobrothons, {
        vk_user_id: VK_MINI_APP.params.allObject.vk_user_id,
        project_id: projectId,
        fragment: 'test',
        amount,
        target,
      }, {
        params: VK_MINI_APP.params.start,
      })
        .then(({ data }) => {
          if (CONFIG.debug) {
            console.log(JSON.parse(JSON.stringify(data)));
          }
        })
        .catch((error) => {
          if (CONFIG.debug) {
            console.log(JSON.parse(JSON.stringify(error)));
          }
        });
    },
  },
  getters: {
    getDobrothons: (state) => state.dobrothons,
    isResponse: (state) => state.response,
    isResult: (state) => state.result,
  },
};

export default dobrothons;
