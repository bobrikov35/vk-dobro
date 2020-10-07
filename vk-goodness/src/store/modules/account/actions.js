import { axios } from '@/plugins';
import { CONFIG, VK_PARAMS } from '@/app';

const setControllerIndex = ({ commit }, index) => {
  commit('SET_CONTROLLER_INDEX', index);
};

const fetchDobrothonList = ({ commit }) => {
  commit('RESET_DOBROTHON_LIST');
  axios.get(CONFIG.apiUrls.dobrothon, { params: VK_PARAMS.app })
    .then(({ data }) => commit('SET_DOBROTHON_LIST', data))
    .catch((error) => commit('SET_DOBROTHON_LIST_ERROR', error));
};

const fetchDonationList = ({ commit }) => {
  commit('RESET_DONATION_LIST');
  axios.get(CONFIG.apiUrls.donation, { params: VK_PARAMS.app })
    .then(({ data }) => commit('SET_DONATION_LIST', data))
    .catch((error) => commit('SET_DONATION_LIST_ERROR', error));
};

const fetchPoints = ({ commit }) => {
  commit('RESET_POINTS');
  axios.get(CONFIG.apiUrls.points, { params: VK_PARAMS.app })
    .then(({ data }) => commit('SET_POINTS', data))
    .catch((error) => commit('SET_POINTS_ERROR', error));
};

const nextReward = ({ state, commit }) => {
  const next = state.rewards.current + 1;
  if (next < state.rewards.list.length) {
    commit('SET_REWARD_INDEX', next);
  } else {
    commit('SET_REWARD_INDEX', 0);
  }
};

const prevReward = ({ state, commit }) => {
  const prev = state.rewards.current - 1;
  if (prev < 0) {
    commit('SET_REWARD_INDEX', state.rewards.list.length - 1);
  } else {
    commit('SET_REWARD_INDEX', prev);
  }
};

export default {
  fetchDobrothonList,
  fetchDonationList,
  fetchPoints,
  nextReward,
  prevReward,
  setControllerIndex,
};
