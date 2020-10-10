export default {
  getPageTitle: (state) => state.pageTitle,
  getUserId: (state) => state.userId,
  getStats: (state) => state.stats.data,
  getStatsError: (state) => state.stats.error,
  isLoadingStats: (state) => state.stats.loading,
  isResultStats: (state) => state.stats.result,
};
