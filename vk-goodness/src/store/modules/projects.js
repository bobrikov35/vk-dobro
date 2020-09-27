import { ApiUrls } from '@/config';

const projects = {
  namespaced: true,
  state: {
    categoryIndex: 0,
    cityIndex: 0,
    response: false,
    result: false,
    projects: {
      page: 1,
      pages: 1,
      list: [],
    },
    error: null,
  },
  mutations: {
    RESET(state) {
      state.response = false;
      state.result = false;
      state.project = {
        page: 1,
        pages: 1,
        list: [],
      };
      state.error = null;
    },
    SET_PROJECT(state, data) {
      state.response = true;
      state.result = typeof data === 'object';
      state.projects = {
        page: data.page,
        pages: data.pages,
        list: data.projects,
      };
    },
    SET_ERROR(state, error) {
      state.response = true;
      state.result = false;
      state.error = error;
    },
    SET_CATEGORY_INDEX(state, index) {
      state.categoryIndex = index;
    },
    SET_CITY_INDEX(state, index) {
      state.cityIndex = index;
    },
  },
  actions: {
    fetchProjects({ commit }, { category, city, page }) {
      commit('RESET');
      fetch(`${ApiUrls.projects}/?recipient=${category}&city=${city}&page=${page}`)
        .then((response) => response.json())
        .then((resData) => commit('SET_PROJECT', resData))
        .catch((error) => commit('SET_ERROR', error));
    },
    setCategoryIndex({ commit }, index) {
      commit('SET_CATEGORY_INDEX', index);
    },
    setCityIndex({ commit }, index) {
      commit('SET_CITY_INDEX', index);
    },
  },
  getters: {
    isResponse: (state) => state.response,
    isResult: (state) => state.result,
    getCategoryIndex: (state) => state.categoryIndex,
    getCityIndex: (state) => state.cityIndex,
    getProjects: (state) => state.projects.list,
    getProjectsPage: (state) => state.projects.page,
    getProjectsPages: (state) => state.projects.pages,
  },
};

export default projects;
