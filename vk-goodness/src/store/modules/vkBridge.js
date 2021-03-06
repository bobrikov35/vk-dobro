import { axios, bridge } from '@/plugins';
import { CONFIG, VK_PARAMS } from '@/app';

const vkBridge = {
  namespaced: true,
  state: {
    accessToken: null,
  },
  mutations: {
    SET_ACCESS_TOKEN(state, accessToken) {
      state.accessToken = accessToken;
    },
  },
  actions: {
    getAccessTokenBridge({ commit }) {
      commit('RESET');
      bridge.send('VKWebAppGetAuthToken', {
        app_id: VK_PARAMS.app.vk_app_id,
        scope: 'notifications',
      })
        .then((data) => commit('SET_ACCESS_TOKEN', data.access_token))
        .catch((error) => console.log(error));
    },
    invite() {
      bridge.send('VKWebAppGetFriends', {
        multi: true,
      })
        .then(({ users }) => {
          bridge.send('VKWebAppCallAPIMethod', {
            method: 'notifications.sendMessage',
            params: {
              user_ids: users[0].id,
              message: 'test',
              fragment: '',
              random_id: '1234567',
              v: '5.1234',
              access_token: 'e4b2c379e4b2c379e4b2c37969e4c17cd8ee4b2e4b2c379bbe566d568a29921a0ca4653',
            },
          })
            .then((data) => {
              if (CONFIG.debug) {
                console.log(JSON.parse(JSON.stringify(data)));
              }
            })
            .catch((error) => {
              if (CONFIG.debug) {
                console.log(JSON.parse(JSON.stringify(error)));
              }
            });
        })
        .catch((error) => {
          if (CONFIG.debug) {
            console.log(JSON.parse(JSON.stringify(error)));
          }
        });
    },
    shareStory(empty, { imageLink, requestId }) {
      bridge.send('VKWebAppShowStoryBox', {
        background_type: 'image',
        url: imageLink,
        request_id: requestId,
      })
        .then((data) => {
          if (CONFIG.debug) {
            console.log(JSON.parse(JSON.stringify(data)));
          }
        })
        .catch((error) => {
          if (CONFIG.debug) {
            console.log(JSON.parse(JSON.stringify(error)));
          }
        });
    },
    subscribe() {
      bridge.subscribe((event) => {
        if (event.detail.type === 'VKWebAppShowStoryBoxLoadFinish') {
          console.log(event.detail);
          const { data } = event.detail;
          axios.post(CONFIG.apiUrls.stories, {
            story_id: data.story_id,
          }, {
            params: VK_PARAMS.app,
          })
            .then((response) => {
              if (CONFIG.debug) {
                console.log(JSON.parse(JSON.stringify(response.data)));
              }
            })
            .catch((error) => {
              if (CONFIG.debug) {
                console.log(JSON.parse(JSON.stringify(error)));
              }
            });
        }
      });
    },
  },
  getters: {
  },
};

export default vkBridge;
