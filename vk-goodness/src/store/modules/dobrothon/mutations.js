const ERROR = (state, { name, error }) => {
  state[name].loading = false;
  state[name].result = false;
  state[name].data = null;
  state[name].error = error;
};

const RESET_LIST = (state) => {
  state.list.loading = true;
  state.list.result = false;
  state.list.data = null;
  state.list.error = null;
};

const RESET_SINGLE = (state) => {
  state.single.loading = true;
  state.single.result = false;
  state.single.data = null;
  state.single.error = null;
};

const SET_LIST = (state, data) => {
  state.list.loading = false;
  state.list.result = typeof data === 'object';
  if (state.list.result) {
    state.list.data = [...data];
    state.list.error = null;
  } else {
    state.list.data = null;
    state.list.error = 'Type error';
  }
};

const SET_SINGLE = (state, data) => {
  state.single.loading = false;
  state.single.result = typeof data === 'object';
  if (state.single.result) {
    state.single.data = { ...data };
    state.single.error = null;
  } else {
    state.single.data = null;
    state.single.error = 'Type error';
  }
};

export default {
  ERROR,
  RESET_LIST,
  RESET_SINGLE,
  SET_LIST,
  SET_SINGLE,
};
