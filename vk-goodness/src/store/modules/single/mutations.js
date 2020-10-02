import {
  ERROR_OBJECT,
  RESET_OBJECT,
  SET_OBJECT,
} from '@/store/modules/lib';

const ERROR_PROJECT = (state, error) => ERROR_OBJECT(state, { name: 'project', error });
const RESET_PROJECT = (state) => RESET_OBJECT(state, 'project');
const SET_PROJECT = (state, data) => SET_OBJECT(state, { name: 'project', data });

const SET_AMOUNT = (state, amount) => {
  state.amount = amount;
};

const SET_TARGET = (state, target) => {
  state.target = target;
};

const SET_DONATION_TAB_INDEX = (state, index) => {
  state.donationTabs.current = index;
};

const SET_VISIBILITY_DOBROTHON_FORM = (state, value) => {
  state.visibilityDobrothonForm = value;
};

const SET_VISIBILITY_DONATION_FORM = (state, value) => {
  state.visibilityDonationForm = value;
};

export default {
  ERROR_PROJECT,
  RESET_PROJECT,
  SET_PROJECT,
  SET_AMOUNT,
  SET_TARGET,
  SET_DONATION_TAB_INDEX,
  SET_VISIBILITY_DOBROTHON_FORM,
  SET_VISIBILITY_DONATION_FORM,
};
