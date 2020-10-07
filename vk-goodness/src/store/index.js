import { createStore } from 'vuex';
import { VK_PARAMS } from '@/app';
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
    userId: parseInt(VK_PARAMS.all.vk_user_id, 10),
  },
  actions,
  mutations,
  getters,
  modules,
});
