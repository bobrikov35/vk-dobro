import { axios, bridge } from '@/plugins';
import {
  ApiUrls,
  vkMiniApp,
} from '@/config';

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
    SET_ACCESS_TOKEN(state, accessToken) {
      state.vk.accessToken = accessToken;
    },
  },
  actions: {
    // S E R V I C E
    setData({ commit }, data) {
      console.log(data);
      commit('SET_DATA', data);
    },
    setError({ commit }, error) {
      console.log(error);
      commit('SET_ERROR', error);
    },
    axiosGet({ commit }, url) {
      axios.get(url, {
        params: vkMiniApp.params.start,
      })
        .then((response) => this.setData({ commit }, response.data))
        .catch((error) => this.setError({ commit }, error));
    },
    axiosPost({ commit }, url, data) {
      axios.post(url, data, {
        params: vkMiniApp.params.start,
      })
        .then((response) => this.setData({ commit }, response.data))
        .catch((error) => this.setError({ commit }, error));
    },
    // G E T T E R S
    getAccessToken({ commit }) {
      commit('RESET');
      bridge.send('VKWebAppGetAuthToken', {
        app_id: vkMiniApp.id,
        scope: 'notifications',
      })
        .then((recData) => {
          this.setData({ commit }, recData);
          console.log(recData.access_token);
          commit('SET_ACCESS_TOKEN', recData.access_token);
        })
        .catch((error) => this.setError({ commit }, error));
    },
    getAchievementsById({ commit }) {
      commit('RESET');
      this.axiosGet({ commit }, ApiUrls.achievements);
    },
    getDonationById({ commit }) {
      commit('RESET');
      this.axiosGet({ commit }, ApiUrls.donates);
    },
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
            .then((recData2) => this.setData({ commit }, recData2))
            .catch((error) => this.setError({ commit }, error));
        })
        .catch((error) => this.setError({ commit }, error));
    },
    makePayment({ commit }, { projectId, amount }) {
      commit('RESET');
      this.axiosPost({ commit }, ApiUrls.donates, {
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
          this.axiosPost({ commit }, ApiUrls.wall, { postId: recData.post_id });
        })
        .catch((error) => this.setError({ commit }, error));
    },
    shareStory({ commit }, { imageLink, requestId }) {
      commit('RESET');
      bridge.send('VKWebAppShowStoryBox', {
        background_type: 'image',
        url: imageLink,
        request_id: requestId,
      })
        .then((recData) => this.setData({ commit }, recData))
        .catch((error) => this.setError({ commit }, error));
    },
    subscribe({ commit }) {
      commit('RESET');
      bridge.subscribe((event) => {
        if (event.detail.type === 'VKWebAppShowStoryBoxLoadFinish') {
          console.log(event.detail);
          const { data } = event.detail;
          this.axiosPost({ commit }, ApiUrls.stories, {
            story_id: data.story_id,
          });
        }
      });
    },
  },
  getters: {
    getAccessToken: (state) => state.vk.accessToken,
  },
};

export default dataExchange;
