import { createStore } from 'vuex';
import account from '@/store/modules/account/index';
import cities from '@/store/modules/static/cities';
import project from '@/store/modules/project/index';
import stats from '@/store/modules/static/stats';
import vkBridge from '@/store/modules/vkBridge';

export default createStore({
  modules: {
    account,
    cities,
    project,
    stats,
    vkBridge,
  },
});
