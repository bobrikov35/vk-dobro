import { axios, bridge } from '@/plugins';
import { CONFIG, VK_PARAMS } from '@/app';

const fetchProject = ({ commit }, props) => {
  if (props.startLoading) props.startLoading('project');
  commit('RESET_PROJECT');
  axios.get(`${CONFIG.apiUrls.project}${props.path}/`, { params: VK_PARAMS.app })
    .then(({ data }) => commit('SET_PROJECT', data))
    .catch((error) => commit('SET_PROJECT_ERROR', error))
    .finally(() => { if (props.stopLoading) props.stopLoading('project'); });
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
  bridge.send('VKWebAppGetUserInfo')
    .then((user) => {
      axios.post(CONFIG.apiUrls.donation, {
        vk_user_id: VK_PARAMS.all.vk_user_id,
        first_name: user.first_name,
        last_name: user.last_name,
        photo_200: user.photo_200,
        project_id: getters.getProject.id,
        amount: getters.getAmount,
      }, {
        params: VK_PARAMS.app,
      })
        .then(({ data }) => console.log({ ...data }))
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
};

const shareOnWall = ({ getters }) => {
  bridge.send('VKWebAppShowWallPostBox', {
    message: getters.getProject.title,
    attachments: `https://vk.com/app${VK_PARAMS.all.vk_app_id}#/project/${getters.getProject.path}`,
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
