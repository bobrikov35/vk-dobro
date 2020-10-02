import { ERROR_OBJECT, RESET_OBJECT, SET_OBJECT } from '@/store/modules/lib';

const ERROR_PROJECT = (state, data) => ERROR_OBJECT(state, { name: 'project', data });

const RESET_PROJECT = (state) => RESET_OBJECT(state, 'project');

const SET_PROJECT = (state, data) => SET_OBJECT(state, { name: 'project', data });

const SET_AMOUNT = (state, amount) => {
  state.amount = amount;
};

const SET_DONATION_TAB_INDEX = (state, index) => {
  state.donationTabs.current = index;
};

const SET_SHOW_DOBROTHON_FORM = (state, value) => {
  state.showCreatorDobrothon = value;
};

const SET_SHOW_DONATION_FORM = (state, value) => {
  state.showPayForm = value;
};

const SET_TARGET = (state, target) => {
  state.target = target;
};

export default {
  ERROR_PROJECT,
  RESET_PROJECT,
  SET_PROJECT,
  SET_AMOUNT,
  SET_DONATION_TAB_INDEX,
  SET_SHOW_DOBROTHON_FORM,
  SET_SHOW_DONATION_FORM,
  SET_TARGET,
};
