import { axios, bridge } from '@/plugins';
import {
  ApiUrls,
  vkMiniApp,
} from '@/config';

const dataExchange = {
  namespaced: true,
  state: {
    bridge: {
      response: false,
      result: false,
      data: null,
      error: null,
    },
    vk: {
      accessToken: null,
    },
  },
  mutations: {
    RESET_BRIDGE(state) {
      state.bridge = {
        response: false,
        result: false,
        data: null,
        error: null,
      };
    },
    SET_BRIDGE_DATA(state, data) {
      state.bridge.data = data;
    },
    SET_BRIDGE_ERROR(state, error) {
      state.bridge.error = error;
    },
    SET_BRIDGE_RESULT(state, result) {
      state.bridge.response = true;
      state.bridge.result = result;
    },
    SET_ACCESS_TOKEN(state, accessToken) {
      if (state.bridge.result) {
        state.vk.accessToken = accessToken;
      }
    },
  },
  actions: {
    // S E R V I C E
    setBridgeData(commit, data) {
      console.log(data);
      commit('SET_BRIDGE_RESULT', true);
      commit('SET_BRIDGE_DATA', data);
    },
    setBridgeError(commit, error) {
      console.log(error);
      commit('SET_BRIDGE_ERROR', error);
      commit('SET_BRIDGE_RESULT', false);
    },
    sendGet({ commit }, url) {
      axios.get(url, {
        params: vkMiniApp.params.start,
      })
        .then((response) => this.setBridgeData(commit, response.data))
        .catch((error) => this.setBridgeError(commit, error));
    },
    sendPost({ commit }, url, data) {
      axios.post(url, data, {
        params: vkMiniApp.params.start,
      })
        .then((response) => this.setBridgeData(commit, response.data))
        .catch((error) => this.setBridgeError(commit, error));
    },
    // F E T C H   D A T A
    fetchData({ commit }, listName) {
      commit('SET_IS_LOADING', { name: listName, value: false });
      fetch(ApiUrls[listName])
        .then((response) => response.json())
        .then((data) => {
          switch (listName) {
            case 'cities':
              commit('SET_LIST', { name: listName, list: data.cities });
              break;
            case 'stats':
              commit('SET_LIST', { name: listName, list: data.stats });
              break;
            default:
              commit('SET_LIST', { name: listName, list: data });
          }
          commit('SET_IS_LOADING', { name: listName, value: true });
        })
        .catch(() => commit('SET_IS_LOADING', { name: listName, value: true }));
    },
    // G E T T E R S
    getAchievementsById({ commit }) {
      commit('RESET_BRIDGE');
      this.sendGet({ commit }, ApiUrls.donates);
    },
    getDonationById({ commit }) {
      commit('RESET_BRIDGE');
      this.sendGet({ commit }, ApiUrls.donates);
    },
    // B R I D G E:   G E T T E R S
    getAccessToken({ commit }) {
      commit('RESET_BRIDGE');
      bridge.send('VKWebAppGetAuthToken', {
        app_id: vkMiniApp.id,
        scope: 'notifications',
      })
        .then((data) => {
          this.setBridgeData(commit, data);
          console.log(data.access_token);
          commit('SET_ACCESS_TOKEN', data.access_token);
        })
        .catch((error) => this.setBridgeError(commit, error));
    },
    // B R I D G E:   A C T I O N S
    invite({ commit }) {
      commit('RESET_BRIDGE');
      bridge.send('VKWebAppGetFriends', {
        multi: true,
      })
        .then((friends) => {
          bridge.send('VKWebAppCallAPIMethod', {
            method: 'notifications.sendMessage',
            params: {
              user_ids: friends.users[0].id,
              message: 'test',
              fragment: '',
              random_id: '1234567',
              v: '5.1234',
              access_token: 'e4b2c379e4b2c379e4b2c37969e4c17cd8ee4b2e4b2c379bbe566d568a29921a0ca4653',
            },
          })
            .then((data) => this.setBridgeData(commit, data))
            .catch((error) => this.setBridgeError(commit, error));
        })
        .catch((error) => this.setBridgeError(commit, error));
    },
    makePayment({ commit }, data) {
      commit('RESET_BRIDGE');
      this.sendPost({ commit }, ApiUrls.donates, {
        vk_user_id: vkMiniApp.params.allObject.vk_user_id,
        project_id: data.projectId,
        amount: data.amount,
      });
    },
    shareOnWall({ commit }, massage = '') {
      commit('RESET_BRIDGE');
      bridge.send('VKWebAppShowWallPostBox', {
        message: massage,
      })
        .then((data) => {
          this.sendPost({ commit }, ApiUrls.wall, {
            post_id: data.post_id,
          });
        })
        .catch((error) => this.setBridgeError(commit, error));
    },
    shareStory({ commit }, { imageLink, requestId }) {
      commit('RESET_BRIDGE');
      bridge.send('VKWebAppShowStoryBox', {
        background_type: 'image',
        url: imageLink,
        request_id: requestId,
      })
        .then((data) => this.setBridgeData(commit, data))
        .catch((error) => this.setBridgeError(commit, error));
    },
    //
    //
    //
    subscribe({ commit }) {
      commit('RESET_BRIDGE');
      bridge.subscribe((event) => {
        if (event.detail.type === 'VKWebAppShowStoryBoxLoadFinish') {
          console.log(event.detail);
          const { data } = event.detail;
          this.sendPost({ commit }, ApiUrls.stories, {
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
