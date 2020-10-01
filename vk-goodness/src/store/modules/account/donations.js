import { axios } from '@/plugins';
import { CONFIG, VK_MINI_APP } from '@/app';

const groupByDonations = (data) => {
  const rData = data.reverse();
  const gData = [];
  for (let i = 0; i < rData.length; i++) {
    if (rData[i]) {
      gData.push({
        id: rData[i].project_id.id,
        city: rData[i].project_id.city,
        title: rData[i].project_id.title,
        image: rData[i].project_id.image,
        amount: rData[i].amount,
        target: rData[i].project_id.target,
      });
      for (let j = i + 1; j < rData.length; j++) {
        if (rData[i].project_id.id === rData[j].project_id.id) {
          gData[gData.length - 1].amount += rData[j].amount;
          rData[j] = null;
        }
      }
      rData[i] = null;
    }
  }
  return gData;
};

const donations = {
  namespaced: true,
  state: {
    donations: [],
    response: false,
    result: false,
  },
  mutations: {
    RESET(state) {
      state.donations = [];
      state.response = false;
      state.result = false;
    },
    SET_DONATIONS(state, data) {
      state.response = true;
      state.result = typeof data === 'object';
      if (state.result) {
        state.donations = groupByDonations(data);
      }
    },
    SET_ERROR(state) {
      state.response = true;
      state.result = false;
    },
  },
  actions: {
    fetchDonationsById({ commit }) {
      commit('RESET');
      axios.get(CONFIG.apiUrls.donations, {
        params: VK_MINI_APP.params.start,
      })
        .then(({ data }) => {
          if (CONFIG.debug) {
            console.log(JSON.parse(JSON.stringify(data)));
          }
          commit('SET_DONATIONS', data);
        })
        .catch((error) => {
          if (CONFIG.debug) {
            console.log(JSON.parse(JSON.stringify(error)));
          }
          commit('SET_ERROR');
        });
    },
    makePayment(empty, { projectId, amount }) {
      axios.post(CONFIG.apiUrls.donations, {
        vk_user_id: VK_MINI_APP.params.allObject.vk_user_id,
        project_id: projectId,
        amount,
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
    getDonations: (state) => state.donations,
    isResponse: (state) => state.response,
    isResult: (state) => state.result,
  },
};

export default donations;
