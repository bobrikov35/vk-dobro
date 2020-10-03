function getDonationsItem(donation) {
  return {
    id: donation.project_id.id,
    city: donation.project_id.city,
    title: donation.project_id.title,
    image: donation.project_id.image,
    target: donation.project_id.target,
    amount: donation.amount,
  };
}

const preparationDonations = (state, data) => {
  const list = [...data];
  const donations = [];
  const donationsGroupByProject = [];
  let lastItem = -1;
  for (let i = 0; i < list.length; i++) {
    donations.push(getDonationsItem(data[i]));
    if (list[i].flag) {
      lastItem += 1;
      donationsGroupByProject.push(getDonationsItem(data[i]));
      for (let j = i + 1; j < list.length; j++) {
        if (list[i].project_id.id === list[j].project_id.id) {
          list[j].flag = true;
          donationsGroupByProject[lastItem].amount += list[j].amount;
        }
      }
    }
  }
  return { donations, donationsGroupByProject };
};

const ERROR_DONATIONS = (state, error) => {
  state.donations.loading = false;
  state.donations.result = false;
  state.donations.data = [];
  state.donations.dataGroupByProject = [];
  state.donations.error = error;
};

const RESET_DONATIONS = (state) => {
  state.donations.loading = false;
  state.donations.result = false;
  state.donations.data = [];
  state.donations.dataGroupByProject = [];
  state.donations.error = null;
};

const SET_DONATIONS = (state, data) => {
  state.donations.loading = false;
  state.donations.result = data !== null && typeof data === 'object';
  const newData = preparationDonations(data);
  if (state.donations.result) {
    state.donations.data = newData.donations;
    state.donations.dataGroupByProject = newData.donationsGroupByProject;
    state.donations.error = null;
  } else {
    state.donations.data = null;
    state.donations.dataGroupByProject = null;
    state.donations.error = 'Type error';
  }
};

const SET_POINTS = (state, { points }) => {
  state.points = typeof points === 'number' ? points : 0;
};

const SET_CURRENT_TAB = (state, index) => {
  state.tabs.current = index;
};

const SET_REWARD_INDEX = (state, index) => {
  state.rewards.current = index;
};

export default {
  // donations
  ERROR_DONATIONS,
  RESET_DONATIONS,
  SET_DONATIONS,
  // other
  SET_POINTS,
  SET_CURRENT_TAB,
  SET_REWARD_INDEX,
};
