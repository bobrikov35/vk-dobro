import {
  ERROR_OBJECT,
  RESET_OBJECT,
  SET_LIST,
  SET_OBJECT,
} from '@/store/modules/lib';

const ERROR_DOBROTHON = (state, error) => ERROR_OBJECT(state, { name: 'dobrothon', error });
const RESET_DOBROTHON = (state) => RESET_OBJECT(state, 'dobrothon');
const SET_DOBROTHON = (state, data) => SET_OBJECT(state, { name: 'dobrothon', data });

const ERROR_DOBROTHONS = (state, error) => ERROR_OBJECT(state, { name: 'dobrothons', error });
const RESET_DOBROTHONS = (state) => RESET_OBJECT(state, 'dobrothons');
const SET_DOBROTHONS = (state, data) => SET_LIST(state, { name: 'dobrothons', data });

export default {
  // dobrothon
  ERROR_DOBROTHON,
  RESET_DOBROTHON,
  SET_DOBROTHON,
  // dobrothons
  ERROR_DOBROTHONS,
  RESET_DOBROTHONS,
  SET_DOBROTHONS,
};
