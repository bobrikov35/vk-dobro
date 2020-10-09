export default {
  // categories
  getCategories: (state) => state.categories.list,
  getCategoryIndex: (state) => state.categories.current,
  getCurrentCategory: (state) => state.categories.list[state.categories.current],
  // cities
  getCities: (state) => state.cities.list,
  getCityIndex: (state) => state.cities.current,
  getCurrentCity: (state) => state.cities.list[state.cities.current],
  // projects
  getPage: (state) => state.projectList.page,
  getPages: (state) => state.projectList.pages,
  getProjectList: (state) => state.projectList.data,
  getProjectListError: (state) => state.projectList.error,
};
