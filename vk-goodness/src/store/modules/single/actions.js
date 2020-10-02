import { GET_WITH_PARAMS } from '@/store/modules/lib';

const fetchProject = ({ commit }, name) => {
  commit('RESET_PROJECT');
  GET_WITH_PARAMS('single', `${name}/`)
    .then(({ data }) => commit('SET_PROJECT', data))
    .catch((error) => commit('ERROR_PROJECT', error));
};

const setAmount = ({ commit }, amount) => {
  commit('SET_AMOUNT', amount);
};

const setTarget = ({ commit }, target) => {
  commit('SET_TARGET', target);
};

const setDonationTabIndex = ({ commit }, index) => {
  commit('SET_DONATION_TAB_INDEX', index);
};

const switchVisibilityDobrothonForm = ({ state, commit }) => {
  commit('SET_SHOW_DOBROTHON_FORM', !state.showDobrothonForm);
};

const switchVisibilityDonationForm = ({ state, commit }) => {
  commit('SET_SHOW_DONATION_FORM', !state.showDonationForm);
};

export default {
  fetchProject,
  setAmount,
  setTarget,
  setDonationTabIndex,
  switchVisibilityDobrothonForm,
  switchVisibilityDonationForm,
};
