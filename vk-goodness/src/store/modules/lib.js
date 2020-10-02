import { axios } from '@/plugins';
import { CONFIG, VK_MINI_APP } from '@/app';

const GET = (urlName) => axios.get(CONFIG.apiUrls[urlName], {
  params: VK_MINI_APP.params.start,
});

const POST = (urlName, data) => axios.post(CONFIG.apiUrls[urlName], {
  vk_user_id: VK_MINI_APP.params.allObject.vk_user_id,
  ...data,
}, {
  params: VK_MINI_APP.params.start,
});

export {
  GET,
  POST,
};
