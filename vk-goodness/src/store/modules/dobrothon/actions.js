import { axios, bridge } from '@/plugins';
import { CONFIG, VK_PARAMS } from '@/app';

const fetchDobrothon = ({ commit }, id) => {
  commit('RESET_DOBROTHON');
  axios.get(`${CONFIG.apiUrls.dobrothonId}${id}`,
    { params: { ...VK_PARAMS.all, fundraising_id: id } })
    .then(({ data }) => commit('SET_DOBROTHON', data))
    .catch((error) => commit('SET_DOBROTHON_ERROR', error));
};

const makePayment = ({ getters }, props) => {
  bridge.send('VKWebAppGetUserInfo')
    .then((user) => {
      axios.post(CONFIG.apiUrls.donation, {
        vk_user_id: VK_PARAMS.all.vk_user_id,
        first_name: user.first_name,
        last_name: user.last_name,
        photo_200: user.photo_200,
        project_id: getters.getDobrothon.project.id,
        amount: getters.getAmount,
        fundraising_id: getters.getDobrothon.id,
      }, {
        params: VK_PARAMS.app,
      })
        .then(() => {
          if (typeof props.showMessage === 'function') {
            props.showMessage('Благодарим, <b>Вас</b>, за оказанную помощь и участие в Доброфоне!');
          }
          if (typeof props.update === 'function') {
            props.update();
          }
        })
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

const switchVisibilityDonationForm = ({ state, commit }) => {
  commit('SET_VISIBILITY_DONATION_FORM', !state.visibilityDonationForm);
};

export default {
  fetchDobrothon,
  makePayment,
  setAmount,
  setDonationTabIndex,
  switchVisibilityDonationForm,
};
