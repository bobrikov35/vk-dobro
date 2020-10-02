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
  getProjects: (state) => state.projects.data,
  getProjectsError: (state) => state.projects.error,
  getPage: (state) => state.page,
  getPages: (state) => state.pages,
  isLoadingProjects: (state) => state.projects.loading,
  isResultProjects: (state) => state.projects.result,
};
