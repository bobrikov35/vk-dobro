import {
  GET,
  GET_WITH_PARAMS,
} from '@/store/modules/lib';

const fetchCities = ({ commit }) => {
  GET('cities')
    .then(({ data }) => commit('SET_CITIES', data.cities));
};

const fetchProjects = ({ commit }, { category, city, page }) => {
  commit('RESET_PROJECTS');
  GET_WITH_PARAMS('projects', `?recipient=${category}&city=${city}&page=${page}`)
    .then(({ data }) => commit('SET_PROJECTS', data))
    .catch((error) => commit('ERROR_PROJECTS', error));
};

const setCategoryIndex = ({ commit }, index) => {
  commit('SET_CATEGORY_INDEX', index);
};

const setCityIndex = ({ commit }, index) => {
  commit('SET_CITY_INDEX', index);
};

export default {
  // projects
  fetchProjects,
  // category
  setCategoryIndex,
  // city
  fetchCities,
  setCityIndex,
};
