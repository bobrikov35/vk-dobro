import { ApiUrls, AppCategories, AppCities } from '@/config';

const fetchData = ({ commit }, name, data = null) => {
  commit('RESET', { name, data });
  fetch(ApiUrls[name])
    .then((response) => response.json())
    .then((resData) => {
      if (name === 'cities') {
        commit('SET_DATA', { name, data: AppCities.concat(resData.cities) });
      } else if (name === 'stats') {
        commit('SET_DATA', { name, data: resData.stats });
      } else {
        commit('SET_DATA', { name, data: resData });
      }
    })
    .catch((error) => commit('SET_ERROR', { name, error }));
};

const staticDataLoader = {
  namespaced: true,
  state: {
    categories: AppCategories,
    cities: {
      response: false,
      result: false,
      data: AppCities,
    },
    stats: {
      response: false,
      result: false,
      data: null,
    },
    error: null,
  },
  mutations: {
    RESET(state, { name, data }) {
      state[name] = {
        response: false,
        result: false,
        data,
      };
      state.error = null;
    },
    SET_DATA(state, { name, data }) {
      state[name] = {
        response: true,
        result: typeof data === 'object',
        data,
      };
    },
    SET_ERROR(state, { name, error }) {
      state[name].response = true;
      state[name].result = false;
      state.error = error;
    },
  },
  actions: {
    fetchCities({ commit }) {
      fetchData({ commit }, 'cities', AppCities);
    },
    fetchStats({ commit }) {
      fetchData({ commit }, 'stats');
    },
  },
  getters: {
    // Categories
    isResponseCategories: (state) => state.categories.response,
    isResultCategories: (state) => state.categories.result,
    getCategories: (state) => state.categories,
    // Cities
    isResponseCities: (state) => state.cities.response,
    isResultCities: (state) => state.cities.result,
    getCities: (state) => state.cities.data,
    // Stats
    isResponseStats: (state) => state.stats.response,
    isResultStats: (state) => state.stats.result,
    getStats: (state) => state.stats.data,
  },
};

export default staticDataLoader;
