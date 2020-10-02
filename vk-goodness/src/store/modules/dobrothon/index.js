import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  namespaced: true,
  state: {
    dobrothon: {
      loading: true,
      result: false,
      data: null,
      error: null,
    },
    dobrothons: {
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
