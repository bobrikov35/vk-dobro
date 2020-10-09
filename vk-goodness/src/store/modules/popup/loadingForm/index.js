import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  state: {
    loading: {
      project: false,
      projectList: false,
    },
  },
  mutations,
  actions,
  getters,
};
