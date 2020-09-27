import { ApiUrls, AppCategories, AppCities } from '@/config';

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
      state[name].result = true;
      state.error = error;
    },
  },
  actions: {
    fetchData({ commit }, { name, data }) {
      commit('RESET', { name, data });
      fetch(ApiUrls[name])
        .then((response) => response.json())
        .then((resData) => {
          switch (name) {
            case 'cities':
              commit('SET_DATA', { name, data: resData.cities });
              break;
            case 'stats':
              commit('SET_DATA', { name, data: resData.stats });
              break;
            default:
              commit('SET_DATA', { name, data: resData });
          }
        })
        .catch((error) => commit('SET_ERROR', { name, error }));
    },
    getCities({ commit }) {
      this.fetchData({ commit }, { name: 'cities', data: AppCities });
    },
    getStats({ commit }) {
      this.fetchData({ commit }, { name: 'stats' });
    },
  },
  getters: {
    // Categories
    isResponseCategories: (state) => state.categories.response,
    isResultCategories: (state) => state.categories.result,
    categories: (state) => state.categories,
    // Cities
    isResponseCities: (state) => state.cities.response,
    isResultCities: (state) => state.cities.result,
    cities: (state) => state.cities.data,
    // Stats
    isResponseStats: (state) => state.stats.response,
    isResultStats: (state) => state.stats.result,
    stats: (state) => state.stats.data,
  },
};

export default staticDataLoader;
