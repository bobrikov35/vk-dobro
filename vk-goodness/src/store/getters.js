export default {
  getStats: (state) => state.stats.data,
  getStatsError: (state) => state.stats.error,
  isLoadingStats: (state) => state.stats.loading,
  isResultStats: (state) => state.stats.result,
};
