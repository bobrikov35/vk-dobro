const removeMessage = ({ commit }) => {
  commit('REMOVE_MESSAGE');
};

const setMessage = ({ commit }, message) => {
  commit('SET_MESSAGE', message);
};

export default {
  removeMessage,
  setMessage,
};
