import {
  GET,
  POST,
} from '@/store/modules/lib';

const getDobrothonsById = ({ commit }) => {
  commit('RESET_DOBROTHONS');
  GET('dobrothons')
    .then(({ data }) => commit('SET_DOBROTHONS', data))
    .catch((error) => commit('ERROR_DOBROTHONS', error));
};

const makeDobrothon = (empty, { projectId, amount, target }) => {
  POST('dobrothons', {
    fragment: 'test',
    project_id: projectId,
    amount,
    target,
  })
    .then(({ data }) => console.log({ ...data }))
    .catch((error) => console.log(error));
};

export default {
  getDobrothonsById,
  makeDobrothon,
};
