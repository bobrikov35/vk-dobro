import { GET } from '@/store/modules/lib';

const fetchStats = ({ commit }) => {
  commit('RESET_STATS');
  GET('stats')
    .then(({ data }) => commit('SET_STATS', data))
    .catch((error) => commit('ERROR_STATS', error));
};

export default {
  fetchStats,
};
