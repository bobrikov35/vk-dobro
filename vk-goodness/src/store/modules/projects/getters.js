export default {
  isLoadingList: (state) => state.list.loading,
  isResultList: (state) => state.list.result,
  getCategories: (state) => state.categories.list,
  getCategoryIndex: (state) => state.categories.current,
  getCities: (state) => state.cities.list,
  getCityIndex: (state) => state.cities.current,
  getCurrentCategory: (state) => state.categories.list[state.categories.current],
  getCurrentCity: (state) => state.cities.list[state.cities.current],
  getList: (state) => state.list.data,
  getListError: (state) => state.list.error,
  getPage: (state) => state.page,
  getPages: (state) => state.pages,
};
