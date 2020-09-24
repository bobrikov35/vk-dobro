import { createStore } from 'vuex';
import dataExchange from '@/store/modules/dataExchange';
import projects from '@/store/modules/projects';
import single from '@/store/modules/single';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    dataExchange,
    projects,
    single,
  },
});
