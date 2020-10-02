import { axios } from '@/plugins';
import { CONFIG, DATA, VK_MINI_APP } from '@/app';
import donations from '@/store/modules/account/donations';

const account = {
  namespaced: true,
  state: {
    points: 0,
    rewards: {
      current: 0,
      list: DATA.rewards,
    },
    tabs: {
      current: 0,
      list: DATA.accountTabs,
    },
  },
  mutations: {
    SET_CURRENT_TAB(state, index) {
      state.tabs.current = index;
    },
    SET_NEXT_REWARD(state) {
      const next = state.rewards.current + 1;
      state.rewards.current = next < state.rewards.list.length ? next : 0;
    },
    SET_POINTS(state, { points }) {
      state.points = typeof points === 'number' ? points : 0;
    },
    SET_PREV_REWARD(state) {
      const prev = state.rewards.current - 1;
      state.rewards.current = prev < 0 ? state.rewards.list.length - 1 : prev;
    },
  },
  actions: {
    fetchPointsById({ commit }) {
      axios.get(CONFIG.apiUrls.points, {
        params: VK_MINI_APP.params.start,
      })
        .then(({ data }) => {
          if (CONFIG.debug) {
            console.log(JSON.parse(JSON.stringify(data)));
          }
          commit('SET_POINTS', data);
        })
        .catch((error) => {
          if (CONFIG.debug) {
            console.log(JSON.parse(JSON.stringify(error)));
          }
        });
    },
    nextReward({ commit }) {
      commit('SET_NEXT_REWARD');
    },
    prevReward({ commit }) {
      commit('SET_PREV_REWARD');
    },
    setCurrentTab({ commit }, index) {
      commit('SET_CURRENT_TAB', index);
    },
  },
  getters: {
    getCurrentReward: (state) => state.rewards.list[state.rewards.current],
    getCurrentTab: (state) => state.tabs.list[state.tabs.current],
    getPoints: (state) => state.points,
    getRewards: (state) => state.rewards.list,
    getRewardIndex: (state) => state.rewards.current,
    getTabs: (state) => state.tabs.list,
    getTabIndex: (state) => state.tabs.current,
  },
  modules: {
    donations,
  },
};

export default account;
