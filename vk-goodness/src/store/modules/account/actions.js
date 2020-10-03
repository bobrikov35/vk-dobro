import { VK_MINI_APP } from '@/app';
import {
  GET,
  POST,
} from '@/store/modules/lib';

const getDonationsById = ({ commit }) => {
  commit('RESET_DONATIONS');
  GET('donations')
    .then(({ data }) => commit('SET_DONATIONS', data))
    .catch((error) => commit('ERROR_DONATIONS', error));
};

const makePayment = (empty, { projectId, amount }) => {
  POST('donations', {
    vk_user_id: VK_MINI_APP.params.allObject.vk_user_id,
    project_id: projectId,
    amount,
  })
    .then(({ data }) => console.log({ ...data }))
    .catch((error) => console.log(error));
};

const getPointsById = ({ commit }) => {
  GET('points')
    .then(({ data }) => commit('SET_POINTS', data));
};

const setCurrentTab = ({ commit }, index) => {
  commit('SET_CURRENT_TAB', index);
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
  getDonationsById,
  makePayment,
  getPointsById,
  setCurrentTab,
  nextReward,
  prevReward,
};
