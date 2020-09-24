import { axios, bridge } from '@/plugins';
import {
  ApiUrls,
  AppCategories,
  AppCities,
  vkParams,
} from '@/config';

const dataExchange = {
  namespaced: true,
  state: {
    categories: { list: AppCategories, isLoading: false },
    cities: { list: AppCities, isLoading: false },
    stats: { list: [], isLoading: false },
    bridge: {
      response: false,
      result: false,
      data: null,
      error: null,
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
    SET_IS_LOADING(state, { name, value }) {
      state[name].isLoading = value;
    },
    SET_LIST(state, data) {
      state[data.name].list = data;
    },
  },
  actions: {
    sendGet({ commit }, url) {
      axios.get(url, {
        params: vkParams.start,
      })
        .then((response) => {
          console.log(response.data);
          commit('SET_BRIDGE_DATA', response.data);
          commit('SET_BRIDGE_RESULT', true);
        })
        .catch((error) => {
          console.log('server');
          console.log(error);
          commit('SET_BRIDGE_ERROR', error);
          commit('SET_BRIDGE_RESULT', false);
        });
    },
    sendPost({ commit }, url, data) {
      axios.post(url, data, {
        params: vkParams.start,
      })
        .then((response) => {
          console.log(response.data);
          commit('SET_BRIDGE_DATA', response.data);
          commit('SET_BRIDGE_RESULT', true);
        })
        .catch((error) => {
          console.log('server');
          console.log(error);
          commit('SET_BRIDGE_ERROR', error);
          commit('SET_BRIDGE_RESULT', false);
        });
    },
    fetchData({ commit }, listName) {
      commit('SET_IS_LOADING', { name: listName, value: false });
      fetch(ApiUrls[listName])
        .then((response) => response.json())
        .then((data) => {
          commit('SET_LIST}', data);
          commit('SET_IS_LOADING', { name: listName, value: true });
        })
        .catch(() => {
          commit('SET_IS_LOADING', { name: listName, value: true });
        });
    },
    shareOnWall({ commit }, massage = '') {
      commit('RESET_BRIDGE');
      bridge.send('VKWebAppShowWallPostBox', {
        message: massage,
      })
        .then((result) => {
          this.sendPost({ commit }, ApiUrls.wall, {
            post_id: result.post_id,
          });
        })
        .catch((error) => {
          console.log('bridge');
          console.log(error);
          commit('SET_BRIDGE_ERROR', error);
          commit('SET_BRIDGE_RESULT', false);
        });
    },
    makePayment({ commit }, data) {
      commit('RESET_BRIDGE');
      this.sendPost({ commit }, ApiUrls.donates, {
        vk_user_id: vkParams.allObject.vk_user_id,
        project_id: data.project_id,
        amount: data.amount,
      });
    },
    shareStory({ commit }, data) {
      commit('RESET_BRIDGE');
      bridge.send('VKWebAppShowStoryBox', {
        background_type: 'image',
        url: data.image_link,
        request_id: data.request_id,
      })
        .then((result) => {
          console.log({ result });
          commit('SET_BRIDGE_DATA', { result });
          commit('SET_BRIDGE_RESULT', true);
        })
        .catch((error) => {
          console.log('bridge');
          console.log(error);
          commit('SET_BRIDGE_ERROR', error);
          commit('SET_BRIDGE_RESULT', false);
        });
    },
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
    getAchievementsById({ commit }) {
      commit('RESET_BRIDGE');
      this.sendGet({ commit }, ApiUrls.donates);
    },
    getDonationById({ commit }) {
      commit('RESET_BRIDGE');
      this.sendGet({ commit }, ApiUrls.donates);
    },
  },
  getters: {
    isLoading: (state, name) => state[name].isLoading,
    getList: (state, name) => {
      if (state[name].isLoading) {
        return [];
      }
      return state[name].list;
    },
  },
};

export default dataExchange;
