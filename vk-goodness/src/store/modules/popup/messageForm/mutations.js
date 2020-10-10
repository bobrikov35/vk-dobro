const SET_MESSAGE = (state, message) => {
  state.message = message;
};

const REMOVE_MESSAGE = (state) => {
  SET_MESSAGE(state, '');
};

export default {
  SET_MESSAGE,
  REMOVE_MESSAGE,
};
