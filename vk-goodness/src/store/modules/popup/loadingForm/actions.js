const removeLoadingFlag = ({ commit }, name) => {
  commit('REMOVE_LOADING_FLAG', name);
};

const setLoadingFlag = ({ commit }, name) => {
  commit('SET_LOADING_FLAG', name);
};

export default {
  removeLoadingFlag,
  setLoadingFlag,
};
