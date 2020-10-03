import { DATA } from '@/app';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

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
    donations: {
      loading: true,
      result: false,
      data: [],
      dataGroupByProject: [],
      error: null,
    },
  },
  mutations,
  actions,
  getters,
};

export default account;
