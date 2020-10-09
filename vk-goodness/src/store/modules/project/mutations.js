import { parseProject } from '@/libs/parse';

const RESET_PROJECT = (state) => {
  state.project.data = null;
  state.project.error = null;
};

const SET_PROJECT_ERROR = (state, error) => {
  state.project.data = null;
  state.project.error = error;
};

const SET_PROJECT = (state, data) => {
  if (data === null || typeof data !== 'object') {
    SET_PROJECT_ERROR(state, 'Type error');
    return;
  }
  state.project.data = parseProject(data);
  state.project.error = null;
};

const SET_DONATION_TAB_INDEX = (state, index) => {
  state.donationTabs.current = index;
};

const SET_AMOUNT = (state, amount) => {
  state.amount = amount;
};

const SET_TARGET = (state, target) => {
  state.target = target;
};

const SET_VISIBILITY_DOBROTHON_FORM = (state, value) => {
  state.visibilityDobrothonForm = value;
};

const SET_VISIBILITY_DONATION_FORM = (state, value) => {
  state.visibilityDonationForm = value;
};

export default {
  // project
  RESET_PROJECT,
  SET_PROJECT,
  SET_PROJECT_ERROR,
  // other
  SET_AMOUNT,
  SET_DONATION_TAB_INDEX,
  SET_TARGET,
  SET_VISIBILITY_DOBROTHON_FORM,
  SET_VISIBILITY_DONATION_FORM,
};
