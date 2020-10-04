import { DATA } from '@/app';
import {
  ERROR_OBJECT,
  RESET_OBJECT,
  SET_LIST,
} from '@/store/modules/lib';

const ERROR_PROJECTS = (state, error) => ERROR_OBJECT(state, { name: 'projects', error });

const RESET_PROJECTS = (state) => {
  RESET_OBJECT(state, 'projects');
  state.page = 0;
  state.pages = 0;
};

const SET_PROJECTS = (state, { projects, page, pages }) => {
  SET_LIST(state, { name: 'projects', data: projects });
  if (state.projects.result) {
    state.page = page;
    state.pages = pages;
  } else {
    state.page = 0;
    state.pages = 0;
  }
};

const SET_CATEGORY_INDEX = (state, index) => {
  state.categories.current = index;
};

const SET_CITIES = (state, data) => {
  if (data !== null && typeof data === 'object') {
    state.cities = {
      current: 0,
      list: DATA.cities.concat(...data),
    };
  }
};

const SET_CITY_INDEX = (state, index) => {
  state.cities.current = index;
};

export default {
  // projects
  ERROR_PROJECTS,
  RESET_PROJECTS,
  SET_PROJECTS,
  // category
  SET_CATEGORY_INDEX,
  // city
  SET_CITIES,
  SET_CITY_INDEX,
};
