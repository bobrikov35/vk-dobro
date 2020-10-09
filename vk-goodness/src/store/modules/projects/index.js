import { DATA } from '@/app';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  namespaced: true,
  state: {
    categories: {
      current: 0,
      list: [...DATA.categories],
    },
    cities: {
      current: 0,
      list: [...DATA.cities],
    },
    projectList: {
      data: null,
      page: 0,
      pages: 0,
      error: null,
    },
  },
  mutations,
  actions,
  getters,
};
