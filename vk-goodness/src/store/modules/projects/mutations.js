import { DATA } from '@/app';
import { parseProjectList } from '@/libs/parse';

const SET_CATEGORY_INDEX = (state, index) => {
  state.categories.current = index;
};

const SET_CITY_INDEX = (state, index) => {
  state.cities.current = index;
};

const SET_CITIES = (state, { cities }) => {
  state.cities.current = 0;
  if (cities !== null && typeof cities === 'object') {
    state.cities.list = [...DATA.cities].concat(...cities);
  } else {
    state.cities.list = [...DATA.cities];
  }
};

const RESET_PROJECT_LIST = (state) => {
  state.projectList.loading = true;
  state.projectList.data = null;
  state.projectList.page = 0;
  state.projectList.pages = 0;
  state.projectList.error = null;
};

const SET_PROJECT_LIST_ERROR = (state, error) => {
  state.projectList.data = null;
  state.projectList.page = 0;
  state.projectList.pages = 0;
  state.projectList.error = error;
  state.projectList.loading = false;
};

const SET_PROJECT_LIST = (state, { projects, page, pages }) => {
  if (projects === null || typeof projects !== 'object') {
    SET_PROJECT_LIST_ERROR(state, 'Type error');
    return;
  }
  state.projectList.data = parseProjectList(projects);
  state.projectList.page = typeof page === 'number' ? page : 1;
  state.projectList.pages = typeof pages === 'number' ? pages : 1;
  state.projectList.error = null;
  state.projectList.loading = false;
};

export default {
  // category
  SET_CATEGORY_INDEX,
  // city
  SET_CITIES,
  SET_CITY_INDEX,
  // projects
  RESET_PROJECT_LIST,
  SET_PROJECT_LIST,
  SET_PROJECT_LIST_ERROR,
};
