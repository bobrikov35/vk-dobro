import { DATA } from '@/app';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const account = {
  namespaced: true,
  state: {
    controllers: {
      current: 0,
      list: [...DATA.controllers.account],
    },
    rewards: {
      current: 0,
      list: [...DATA.rewards],
    },
    dobrothonList: {
      loading: true,
      data: null,
      error: null,
    },
    donationList: {
      loading: true,
      data: null,
      dataGrouped: null,
      error: null,
    },
    points: {
      loading: true,
      data: null,
      error: null,
    },
  },
  mutations,
  actions,
  getters,
};

export default account;
