import { ApiUrls } from '@/config';

const projects = {
  namespaced: true,
  state: {
    categoryIndex: 0,
    cityIndex: 0,
    projects: {
      page: 1,
      pages: 1,
      list: [],
    },
    response: false,
    result: false,
  },
  mutations: {
    RESET(state) {
      state.projects = {
        page: 1,
        pages: 1,
        list: [],
      };
      state.response = false;
      state.result = false;
    },
    SET_RESULT(state, result) {
      state.response = true;
      state.result = result;
    },
    SET_CATEGORY_INDEX(state, index) {
      state.categoryIndex = index;
    },
    SET_CITY_INDEX(state, index) {
      state.cityIndex = index;
    },
    SET_PROJECTS(state, data) {
      state.projects = {
        page: data.page,
        pages: data.pages,
        list: data.projects,
      };
    },
  },
  actions: {
    fetchProjects({ commit }, { category, city, page }) {
      commit('RESET');
      fetch(`${ApiUrls.projects}/?recipient=${category}&city=${city}&page=${page}`)
        .then((response) => response.json())
        .then((data) => {
          commit('SET_RESULT', true);
          commit('SET_PROJECTS', data);
        })
        .catch(() => {
          commit('SET_RESULT', false);
        });
    },
    setCategoryIndex({ commit }, index) {
      commit('SET_CATEGORY_INDEX', index);
    },
    setCityIndex({ state, commit }, index) {
      commit('SET_CITY_INDEX', index);
      console.log(state.cityIndex);
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
