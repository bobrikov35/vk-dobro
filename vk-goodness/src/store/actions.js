import { axios } from '@/plugins';
import { CONFIG, VK_PARAMS } from '@/app';

const fetchStats = ({ commit }) => {
  commit('RESET_STATS');
  axios.get(CONFIG.apiUrls.stats, { params: VK_PARAMS.app })
    .then(({ data }) => commit('SET_STATS', data))
    .catch((error) => commit('ERROR_STATS', error));
};

const fixedBody = () => {
  document.body.style.width = '100vw';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${window.scrollY}px`;
};

const setPageTitle = ({ commit }, title) => {
  commit('SET_PAGE_TITLE', title);
};

const unfixedBody = () => {
  document.body.style.width = '';
  document.body.style.position = 'relative';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(document.body.style.top || '0', 10) * -1);
};

export default {
  fetchStats,
  fixedBody,
  setPageTitle,
  unfixedBody,
};
