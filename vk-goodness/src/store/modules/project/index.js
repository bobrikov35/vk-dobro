import { DATA } from '@/app';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  namespaced: true,
  state: {
    donationTabs: {
      current: 3,
      list: [...DATA.donations],
    },
    project: {
      loading: true,
      data: null,
      error: null,
    },
    amount: 0,
    target: 0,
    visibilityDobrothonForm: false,
    visibilityDonationForm: false,
  },
  mutations,
  actions,
  getters,
};
