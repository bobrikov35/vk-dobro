import { GET, GET_WITH_PARAMS } from '@/store/modules/lib';

const fetchCities = ({ commit }) => {
  GET('cities')
    .then(({ data }) => commit('SET_CITIES', data.cities));
};

const fetchProjects = ({ commit }, { category, city, page }) => {
  commit('RESET_LIST');
  GET_WITH_PARAMS('projects', `?recipient=${category}&city=${city}&page=${page}`)
    .then(({ data }) => commit('SET_LIST', data))
    .catch((error) => commit('ERROR', { name: 'list', error }));
};

const setCategoryIndex = ({ commit }, index) => {
  commit('SET_CATEGORY_INDEX', index);
};

const setCityIndex = ({ commit }, index) => {
  commit('SET_CITY_INDEX', index);
};

export default {
  fetchCities,
  fetchProjects,
  setCategoryIndex,
  setCityIndex,
};
