import { GET_WITH_PARAMS, POST } from '@/store/modules/lib';
import { VK_PARAMS } from '@/app';

const makePayment = (empty, { projectId, amount }) => {
  POST('donations', {
    vk_user_id: VK_PARAMS.all.vk_user_id,
    project_id: projectId,
    amount,
  })
    .then(({ data }) => console.log({ ...data }))
    .catch((error) => console.log(error));
};

const fetchProject = ({ commit }, name) => {
  commit('RESET_PROJECT');
  GET_WITH_PARAMS('single', `${name}/`)
    .then(({ data }) => commit('SET_PROJECT', data))
    .catch((error) => commit('ERROR_PROJECT', error));
};

const setDonationTabIndex = ({ commit }, index) => {
  commit('SET_DONATION_TAB_INDEX', index);
};

const setAmount = ({ commit }, amount) => {
  commit('SET_AMOUNT', amount);
};

const setTarget = ({ commit }, target) => {
  commit('SET_TARGET', target);
};

const switchVisibilityDobrothonForm = ({ state, commit }) => {
  commit('SET_VISIBILITY_DOBROTHON_FORM', !state.visibilityDobrothonForm);
};

const switchVisibilityDonationForm = ({ state, commit }) => {
  commit('SET_VISIBILITY_DONATION_FORM', !state.visibilityDonationForm);
};

export default {
  makePayment,
  fetchProject,
  setDonationTabIndex,
  setAmount,
  setTarget,
  switchVisibilityDobrothonForm,
  switchVisibilityDonationForm,
};
