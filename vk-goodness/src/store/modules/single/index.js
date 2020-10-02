import { DATA } from '@/app';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  namespaced: true,
  state: {
    amount: 0,
    target: 0,
    donationTabs: {
      current: 3,
      list: DATA.donationTabs,
    },
    project: {
      loading: true,
      result: false,
      data: null,
      error: null,
    },
    visibilityDobrothonForm: false,
    visibilityDonationForm: false,
  },
  mutations,
  actions,
  getters,
};
