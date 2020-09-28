import { axios, bridge } from '@/plugins';
import {
  ApiUrls,
  vkMiniApp,
} from '@/config';

const setData = ({ commit }, data) => {
  console.log(data);
  commit('SET_DATA', data);
};

const setError = ({ commit }, error) => {
  console.log(error);
  commit('SET_ERROR', error);
};

const axiosGet = ({ commit }, url) => {
  axios.get(url, {
    params: vkMiniApp.params.start,
  })
    .then((response) => setData({ commit }, response.data))
    .catch((error) => setError({ commit }, error));
};

const axiosPost = ({ commit }, url, data) => {
  axios.post(url, data, {
    params: vkMiniApp.params.start,
  })
    .then((response) => setData({ commit }, response.data))
    .catch((error) => setError({ commit }, error));
};

const dataExchange = {
  namespaced: true,
  state: {
    vk: {
      accessToken: null,
    },
    response: false,
    result: false,
    data: null,
    error: null,
  },
  mutations: {
    RESET(state) {
      state.response = false;
      state.result = false;
      state.data = null;
      state.error = null;
    },
    SET_DATA(state, data) {
      state.data = data;
      state.response = true;
      state.result = typeof data === 'object';
    },
    SET_ERROR(state, error) {
      state.response = true;
      state.result = false;
      state.error = error;
    },
  },
  actions: {
    getAccessTokenBridge({ commit }) {
      commit('RESET');
      bridge.send('VKWebAppGetAuthToken', {
        app_id: vkMiniApp.id,
        scope: 'notifications',
      })
        .then((recData) => {
          setData({ commit }, recData.access_token);
        })
        .catch((error) => setError({ commit }, error));
    },
    getAchievementsById({ commit }) {
      commit('RESET');
      axiosGet({ commit }, ApiUrls.achievements);
    },
    getDonationById({ commit }) {
      commit('RESET');
      axiosGet({ commit }, ApiUrls.donates);
    },
    // getDonationById({ commit }) {
    //   commit('RESET');
    //   axiosGet({ commit }, ApiUrls.donates);
    // },
    // A C T I O N S
    invite({ commit }) {
      commit('BRIDGE');
      bridge.send('VKWebAppGetFriends', {
        multi: true,
      })
        .then((recData1) => {
          bridge.send('VKWebAppCallAPIMethod', {
            method: 'notifications.sendMessage',
            params: {
              user_ids: recData1.users[0].id,
              message: 'test',
              fragment: '',
              random_id: '1234567',
              v: '5.1234',
              access_token: 'e4b2c379e4b2c379e4b2c37969e4c17cd8ee4b2e4b2c379bbe566d568a29921a0ca4653',
            },
          })
            .then((recData2) => setData({ commit }, recData2))
            .catch((error) => setError({ commit }, error));
        })
        .catch((error) => setError({ commit }, error));
    },
    makeDobrothon({ commit }, { projectId, amount, target }) {
      commit('RESET');
      axiosPost({ commit }, ApiUrls.donates, {
        vk_user_id: vkMiniApp.params.allObject.vk_user_id,
        project_id: projectId,
        fragment: 'test',
        amount,
        target,
      });
    },
    makePayment({ commit }, { projectId, amount }) {
      commit('RESET');
      axiosPost({ commit }, ApiUrls.donates, {
        vk_user_id: vkMiniApp.params.allObject.vk_user_id,
        project_id: projectId,
        amount,
      });
    },
    shareOnWall({ commit }, massage = '') {
      commit('RESET');
      bridge.send('VKWebAppShowWallPostBox', {
        message: massage,
      })
        .then((recData) => {
          axiosPost({ commit }, ApiUrls.wall, { postId: recData.post_id });
        })
        .catch((error) => setError({ commit }, error));
    },
    shareStory({ commit }, { imageLink, requestId }) {
      commit('RESET');
      bridge.send('VKWebAppShowStoryBox', {
        background_type: 'image',
        url: imageLink,
        request_id: requestId,
      })
        .then((recData) => setData({ commit }, recData))
        .catch((error) => setError({ commit }, error));
    },
    subscribe({ commit }) {
      commit('RESET');
      bridge.subscribe((event) => {
        if (event.detail.type === 'VKWebAppShowStoryBoxLoadFinish') {
          console.log(event.detail);
          const { data } = event.detail;
          axiosPost({ commit }, ApiUrls.stories, {
            story_id: data.story_id,
          });
        }
      });
    },
  },
  getters: {
  },
};

export default dataExchange;
