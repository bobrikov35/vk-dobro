import { parseDonationList, parseDobrothonList } from '@/libs/parse';

const SET_CONTROLLER_INDEX = (state, index) => {
  state.controllers.current = index;
};

const RESET_DOBROTHON_LIST = (state) => {
  state.dobrothonList.loading = true;
  state.dobrothonList.data = null;
  state.dobrothonList.error = null;
};

const SET_DOBROTHON_LIST_ERROR = (state, error) => {
  state.dobrothonList.data = null;
  state.dobrothonList.error = error;
  state.dobrothonList.loading = false;
};

const SET_DOBROTHON_LIST = (state, data) => {
  if (data === null || typeof data !== 'object') {
    SET_DOBROTHON_LIST_ERROR(state, 'Type error');
    return;
  }
  state.dobrothonList.data = parseDobrothonList(data);
  state.dobrothonList.error = null;
  state.dobrothonList.loading = false;
};

const RESET_DONATION_LIST = (state) => {
  state.donationList.loading = true;
  state.donationList.data = null;
  state.donationList.error = null;
};

const SET_DONATION_LIST_ERROR = (state, error) => {
  state.donationList.data = null;
  state.donationList.error = error;
  state.donationList.loading = false;
};

const SET_DONATION_LIST = (state, data) => {
  if (data === null || typeof data !== 'object') {
    SET_DONATION_LIST_ERROR(state, 'Type error');
    return;
  }
  const lists = parseDonationList(data);
  state.donationList.data = lists.donations;
  state.donationList.dataGrouped = lists.donationsGrouped;
  state.donationList.error = null;
  state.donationList.loading = false;
};

const RESET_POINTS = (state) => {
  state.points.loading = true;
  state.points.data = null;
  state.points.error = null;
};

const SET_POINTS_ERROR = (state, error) => {
  state.points.data = null;
  state.points.error = error;
  state.points.loading = false;
};

const SET_POINTS = (state, { points }) => {
  if (typeof points !== 'number') {
    SET_POINTS_ERROR(state, 'Type error');
    return;
  }
  state.points.data = points;
  state.points.error = null;
  state.points.loading = false;
};

const SET_REWARD_INDEX = (state, index) => {
  state.rewards.current = index;
};

export default {
  // main
  SET_CONTROLLER_INDEX,
  // dobrothons
  RESET_DOBROTHON_LIST,
  SET_DOBROTHON_LIST,
  SET_DOBROTHON_LIST_ERROR,
  // donations
  RESET_DONATION_LIST,
  SET_DONATION_LIST,
  SET_DONATION_LIST_ERROR,
  // points
  RESET_POINTS,
  SET_POINTS,
  SET_POINTS_ERROR,
  // other
  SET_REWARD_INDEX,
};
