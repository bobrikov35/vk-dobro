const SET_PAGE_TITLE = (state, title) => {
  state.pageTitle = title;
};

const RESET_STATS = (state) => {
  state.stats.loading = true;
  state.stats.result = false;
  state.stats.data = null;
  state.stats.error = null;
};

const SET_STATS_ERROR = (state, error) => {
  state.stats.data = null;
  state.stats.error = error;
  state.stats.result = false;
  state.stats.loading = false;
};

const SET_STATS_LIST = (state, data) => {
  if (data === null || typeof data !== 'object') {
    SET_STATS_ERROR(state, 'Type error');
    return;
  }
  state.stats.data = data;
  state.stats.error = null;
  state.stats.result = true;
  state.stats.loading = false;
};

export default {
  SET_PAGE_TITLE,
  RESET_STATS,
  SET_STATS_LIST,
  SET_STATS_ERROR,
};
