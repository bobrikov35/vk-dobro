import dobrothon from '@/store/modules/dobrothon/index';
import projects from '@/store/modules/projects/index';
import single from '@/store/modules/single/index';
import account from '@/store/modules/account/index';
import stats from '@/store/modules/static/stats';
import vkBridge from '@/store/modules/vkBridge';

import { createStore } from 'vuex';

export default createStore({
  modules: {
    dobrothon,
    single,
    projects,
    account,
    stats,
    vkBridge,
  },
});
