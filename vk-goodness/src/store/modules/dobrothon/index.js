import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  namespaced: true,
  state: {
    list: {
      loading: true,
      result: false,
      data: null,
      error: null,
    },
    single: {
      loading: true,
      result: false,
      data: null,
      error: null,
    },
  },
  mutations,
  actions,
  getters,
};
