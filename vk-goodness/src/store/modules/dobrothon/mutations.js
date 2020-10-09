import { parseDobrothon } from '@/libs/parse';

const RESET_DOBROTHON = (state) => {
  state.dobrothon.loading = true;
  state.dobrothon.data = null;
  state.dobrothon.error = null;
};

const SET_DOBROTHON_ERROR = (state, error) => {
  state.dobrothon.data = null;
  state.dobrothon.error = error;
  state.dobrothon.loading = false;
};

const SET_DOBROTHON = (state, data) => {
  if (data === null || typeof data !== 'object') {
    SET_DOBROTHON_ERROR(state, 'Type error');
    return;
  }
  state.dobrothon.data = parseDobrothon(data);
  if (state.dobrothon.data.id === undefined) {
    SET_DOBROTHON_ERROR(state, 'Type error');
    return;
  }
  state.dobrothon.error = null;
  state.dobrothon.loading = false;
};

const SET_DONATION_TAB_INDEX = (state, index) => {
  state.donationTabs.current = index;
};

const SET_AMOUNT = (state, amount) => {
  state.amount = amount;
};

const SET_VISIBILITY_DONATION_FORM = (state, value) => {
  state.visibilityDonationForm = value;
};

export default {
  // dobrothon
  RESET_DOBROTHON,
  SET_DOBROTHON,
  SET_DOBROTHON_ERROR,
  // other
  SET_AMOUNT,
  SET_DONATION_TAB_INDEX,
  SET_VISIBILITY_DONATION_FORM,
};
