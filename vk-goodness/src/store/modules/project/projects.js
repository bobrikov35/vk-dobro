import { axios } from '@/plugins';
import { CONFIG } from '@/app';

const projects = {
  namespaced: true,
  state: {
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
    SET_PROJECTS(state, data) {
      state.response = true;
      state.result = typeof data === 'object';
      if (state.result) {
        state.projects = {
          page: data.page,
          pages: data.pages,
          list: data.projects,
        };
      }
    },
    SET_ERROR(state) {
      state.response = true;
      state.result = false;
    },
  },
  actions: {
    fetchProjects({ commit }, { category, city, page }) {
      commit('RESET');
      axios.get(`${CONFIG.apiUrls.projects}?recipient=${category}&city=${city}&page=${page}`)
        .then(({ data }) => {
          if (CONFIG.debug) {
            console.log(JSON.parse(JSON.stringify(data)));
          }
          commit('SET_PROJECTS', data);
        })
        .catch((error) => {
          if (CONFIG.debug) {
            console.log(JSON.parse(JSON.stringify(error)));
          }
          commit('SET_ERROR');
        });
    },
  },
  getters: {
    getPage: (state) => state.projects.page,
    getPages: (state) => state.projects.pages,
    getProjects: (state) => state.projects.list,
    isResponse: (state) => state.response,
    isResult: (state) => state.result,
  },
};

export default projects;
