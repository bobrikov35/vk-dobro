const getMessage = (state) => state.message;

const hasMessage = (state) => state.message !== '';

export default {
  getMessage,
  hasMessage,
};
