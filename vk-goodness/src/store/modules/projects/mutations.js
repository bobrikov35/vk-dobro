import { DATA } from '@/app';
import { ERROR_OBJECT, RESET_LIST as RESET_LIST_FROM_LIB, SET_LIST as SET_LIST_FROM_LIB } from '@/store/modules/lib';

const ERROR = ERROR_OBJECT;

const RESET_LIST = (state) => {
  RESET_LIST_FROM_LIB(state);
  state.page = 0;
  state.pages = 0;
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

const SET_LIST = (state, { projects, page, pages }) => {
  SET_LIST_FROM_LIB(state, projects);
  if (state.list.result) {
    state.page = 0;
    state.pages = 0;
  } else {
    state.page = page;
    state.pages = pages;
  }
};

export default {
  ERROR,
  RESET_LIST,
  SET_CATEGORY_INDEX,
  SET_CITIES,
  SET_CITY_INDEX,
  SET_LIST,
};
