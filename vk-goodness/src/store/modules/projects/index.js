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
    list: {
      loading: true,
      result: false,
      data: null,
      error: null,
    },
    page: 0,
    pages: 0,
  },
  mutations,
  actions,
  getters,
};
