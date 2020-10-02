import { createStore } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import modules from './modules';

export default createStore({
  state: {
    stats: {
      loading: true,
      result: false,
      data: null,
      error: null,
    },
  },
  actions,
  mutations,
  getters,
  modules,
});
