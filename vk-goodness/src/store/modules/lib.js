import { axios } from '@/plugins';
import { CONFIG, VK_MINI_APP } from '@/app';

const ERROR_OBJECT = (state, { name, error }) => {
  state[name].loading = false;
  state[name].result = false;
  state[name].data = null;
  state[name].error = error;
};

const GET = (urlName) => axios.get(CONFIG.apiUrls[urlName], {
  params: VK_MINI_APP.params.start,
});

const GET_WITH_PARAMS = (urlName, params = '') => axios.get(`${CONFIG.apiUrls[urlName]}?${params}`, {
  params: VK_MINI_APP.params.start,
});

const POST = (urlName, data) => axios.post(CONFIG.apiUrls[urlName], {
  vk_user_id: VK_MINI_APP.params.allObject.vk_user_id,
  ...data,
}, {
  params: VK_MINI_APP.params.start,
});

const RESET_LIST = (state) => {
  state.list.loading = true;
  state.list.result = false;
  state.list.data = null;
  state.list.error = null;
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

export {
  ERROR_OBJECT,
  GET,
  GET_WITH_PARAMS,
  POST,
  RESET_LIST,
  SET_LIST,
};
