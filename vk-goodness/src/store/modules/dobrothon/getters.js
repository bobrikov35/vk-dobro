export default {
  // dobrothon
  getSingle: (state) => state.single.data,
  getSingleError: (state) => state.single.error,
  isLoadingSingle: (state) => state.single.loading,
  isResultSingle: (state) => state.single.result,
  // dobrothons
  getDobrothons: (state) => state.dobrothons.data,
  getDobrothonsError: (state) => state.dobrothons.error,
  isLoadingDobrothons: (state) => state.dobrothons.loading,
  isResultDobrothons: (state) => state.dobrothons.result,
};
