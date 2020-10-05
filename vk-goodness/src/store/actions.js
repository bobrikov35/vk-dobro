import { GET } from '@/store/modules/lib';

const fetchStats = ({ commit }) => {
  commit('RESET_STATS');
  GET('stats')
    .then(({ data }) => commit('SET_STATS', data))
    .catch((error) => commit('ERROR_STATS', error));
};

const fixedBody = () => {
  document.body.style.width = '100vw';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${window.scrollY}px`;
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
  unfixedBody,
};
