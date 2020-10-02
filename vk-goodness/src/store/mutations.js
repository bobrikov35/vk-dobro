import {
  ERROR_OBJECT,
  RESET_OBJECT,
  SET_OBJECT,
} from '@/store/modules/lib';

const ERROR_STATS = (state, error) => ERROR_OBJECT(state, { name: 'stats', error });
const RESET_STATS = (state) => RESET_OBJECT(state, 'stats');
const SET_STATS = (state, data) => SET_OBJECT(state, { name: 'stats', data });

export default {
  ERROR_STATS,
  RESET_STATS,
  SET_STATS,
};
