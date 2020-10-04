import { axios } from '@/plugins';
import { CONFIG, VK_PARAMS } from '@/app';

const GET = (urlName) => axios.get(CONFIG.apiUrls[urlName], {
  params: VK_PARAMS.app,
});

const GET_WITH_PARAMS = (urlName, params = '') => axios.get(`${CONFIG.apiUrls[urlName]}${params}`, {
  params: VK_PARAMS.app,
});

const POST = (urlName, data) => axios.post(CONFIG.apiUrls[urlName], {
  vk_user_id: VK_PARAMS.all.vk_user_id,
  ...data,
}, {
  params: VK_PARAMS.app,
});

const ERROR_OBJECT = (state, { name, error }) => {
  state[name].loading = false;
  state[name].result = false;
  state[name].data = null;
  state[name].error = error;
};

const RESET_OBJECT = (state, name) => {
  state[name].loading = true;
  state[name].result = false;
  state[name].data = null;
  state[name].error = null;
};

const SET_LIST = (state, { name, data }) => {
  state[name].loading = false;
  state[name].result = data !== null && typeof data === 'object';
  if (state[name].result) {
    state[name].data = [...data];
    state[name].error = null;
  } else {
    state[name].data = null;
    state[name].error = 'Type error';
  }
};

const SET_OBJECT = (state, { name, data }) => {
  state[name].loading = false;
  state[name].result = data !== null && typeof data === 'object';
  if (state[name].result) {
    state[name].data = { ...data };
    state[name].error = null;
  } else {
    state[name].data = null;
    state[name].error = 'Type error';
  }
};

export {
  GET,
  GET_WITH_PARAMS,
  POST,
  ERROR_OBJECT,
  RESET_OBJECT,
  SET_LIST,
  SET_OBJECT,
};
