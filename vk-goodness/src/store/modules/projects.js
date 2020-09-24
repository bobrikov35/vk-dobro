import { ApiUrls, AppCategories, AppCities } from '@/config';

const projects = {
  namespaced: true,
  state: {
    category: AppCategories[0],
    city: AppCities,
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
    SET_CATEGORY(state, categoryObject) {
      state.category = categoryObject;
    },
    SET_CITY(state, cityObject) {
      state.city = cityObject;
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
    fetchProjects({ state, commit }, page) {
      commit('RESET');
      const category = state.category.name;
      const city = state.city.name;
      fetch(`${ApiUrls.projects}/?recipient=${category}&city=${city}&page=${page}`)
        .then((response) => response.json())
        .then((data) => {
          commit('SET_PROJECTS', data);
          commit('SET_RESULT', true);
        })
        .catch(() => {
          commit('SET_RESULT', false);
        });
    },
    setCategory({ commit }, categoryObject) {
      commit('SET_CATEGORY', categoryObject);
    },
    setCity({ commit }, cityObject) {
      commit('SET_CITY', cityObject);
    },
  },
  getters: {
    isResponse: (state) => state.response,
    isResult: (state) => state.result,
    getCategory: (state) => state.category,
    getCity: (state) => state.city,
    getProjects: (state) => state.projects.list,
    getProjectsPage: (state) => state.projects.page,
    getProjectsPages: (state) => state.projects.pages,
  },
};

export default projects;
