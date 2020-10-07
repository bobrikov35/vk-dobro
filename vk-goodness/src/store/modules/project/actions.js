import { axios, bridge } from '@/plugins';
import { CONFIG, VK_PARAMS } from '@/app';

const fetchProject = ({ commit }, name) => {
  commit('RESET_PROJECT');
  axios.get(`${CONFIG.apiUrls.project}/${name}/`, { params: VK_PARAMS.app })
    .then(({ data }) => commit('SET_PROJECT', data))
    .catch((error) => commit('SET_PROJECT_ERROR', error));
};

const makeDobrothon = ({ getters }) => {
  axios.post(CONFIG.apiUrls.dobrothon, {
    ...VK_PARAMS.all,
    fragment: 'empty',
    project_id: getters.getProject.id,
    amount: getters.getAmount,
    target: getters.getTarget,
  }, {
    params: VK_PARAMS.app,
  })
    .then(({ data }) => console.log({ ...data }))
    .catch((error) => console.log(error));
};

const makePayment = ({ getters }) => {
  axios.post(CONFIG.apiUrls.donation, {
    ...VK_PARAMS.all,
    project_id: getters.getProject.id,
    amount: getters.getAmount,
  }, {
    params: VK_PARAMS.app,
  })
    .then(({ data }) => console.log({ ...data }))
    .catch((error) => console.log(error));
};

const shareOnWall = ({ getters }) => {
  bridge.send('VKWebAppShowWallPostBox', {
    message: getters.getProject.title,
  })
    .then((bridgeData) => {
      axios.post(CONFIG.apiUrls.wall, { post_id: bridgeData.post_id }, { params: VK_PARAMS.app })
        .then(({ data }) => console.log({ ...data }))
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
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
  fetchProject,
  makeDobrothon,
  makePayment,
  shareOnWall,
  setAmount,
  setDonationTabIndex,
  setTarget,
  switchVisibilityDobrothonForm,
  switchVisibilityDonationForm,
};
