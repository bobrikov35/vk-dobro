const SET_LOADING_FLAG = (state, name) => {
  state.loading[name] = true;
};

const REMOVE_LOADING_FLAG = (state, name) => {
  state.loading[name] = false;
};

export default {
  SET_LOADING_FLAG,
  REMOVE_LOADING_FLAG,
};
