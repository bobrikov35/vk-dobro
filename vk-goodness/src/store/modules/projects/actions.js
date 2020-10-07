import { axios } from '@/plugins';
import { CONFIG, VK_PARAMS } from '@/app';

const setCategoryIndex = ({ commit }, index) => {
  commit('SET_CATEGORY_INDEX', index);
};

const setCityIndex = ({ commit }, index) => {
  commit('SET_CITY_INDEX', index);
};

const fetchCities = ({ commit }) => {
  axios.get(CONFIG.apiUrls.cities, { params: VK_PARAMS.app })
    .then(({ data }) => commit('SET_CITIES', data));
};

const fetchProjectList = ({ commit }, { category, city, page }) => {
  commit('RESET_PROJECT_LIST');
  axios.get(`${CONFIG.apiUrls.project}?recipient=${category}&city=${city}&page=${page}`, { params: VK_PARAMS.app })
    .then(({ data }) => commit('SET_PROJECT_LIST', data))
    .catch((error) => commit('SET_PROJECT_LIST_ERROR', error));
};

export default {
  // categories
  setCategoryIndex,
  // cities
  fetchCities,
  setCityIndex,
  // projects
  fetchProjectList,
};
