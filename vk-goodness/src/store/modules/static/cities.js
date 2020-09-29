import { axios } from '@/plugins';
import { CONFIG, DATA } from '@/app';

const cities = {
  namespaced: true,
  state: {
    cities: {
      current: 0,
      list: [...DATA.cities],
    },
    response: false,
    result: false,
  },
  mutations: {
    RESET(state) {
      state.cities = {
        current: 0,
        list: [...DATA.cities],
      };
      state.response = false;
      state.result = false;
    },
    SET_CITIES(state, data) {
      state.response = true;
      state.result = typeof data === 'object';
      if (state.result) {
        state.cities = {
          current: 0,
          list: DATA.cities.concat(data),
        };
      }
    },
    SET_CITY_INDEX(state, index) {
      state.cities.current = index;
    },
    SET_ERROR(state) {
      state.response = true;
      state.result = false;
    },
  },
  actions: {
    fetchCities({ commit }) {
      commit('RESET');
      axios.get(CONFIG.apiUrls.cities)
        .then(({ data }) => {
          if (CONFIG.debug) {
            console.log(JSON.parse(JSON.stringify(data)));
          }
          commit('SET_CITIES', data);
        })
        .catch((error) => {
          if (CONFIG.debug) {
            console.log(JSON.parse(JSON.stringify(error)));
          }
          commit('SET_ERROR');
        });
    },
    setCityIndex({ commit }, index) {
      commit('SET_CITY_INDEX', index);
    },
  },
  getters: {
    getCities: (state) => state.cities.list,
    getCityIndex: (state) => state.cities.current,
    isResponse: (state) => state.response,
    isResult: (state) => state.result,
  },
};

export default cities;
