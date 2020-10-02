export default {
  isLoadingList: (state) => state.list.loading,
  isLoadingSingle: (state) => state.single.loading,
  isResultList: (state) => state.list.result,
  isResultSingle: (state) => state.single.result,
  getList: (state) => state.list.data,
  getListError: (state) => state.list.error,
  getSingle: (state) => state.single.data,
  getSingleError: (state) => state.single.error,
};
