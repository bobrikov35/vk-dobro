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

const fetchProjectList = (state, props) => {
  if (props.startLoading) props.startLoading('projectList');
  axios.get(CONFIG.apiUrls.project, {
    params: {
      ...VK_PARAMS.app,
      recipient: props.category,
      city: props.city,
      page: props.page,
    },
  })
    .then(({ data }) => state.commit('SET_PROJECT_LIST', data))
    .catch((error) => state.commit('SET_PROJECT_LIST_ERROR', error))
    .finally(() => { if (props.stopLoading) props.stopLoading('projectList'); });
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
