export default {
  // project
  getProject: (state) => state.project.data,
  getProjectError: (state) => state.project.error,
  // donation tabs
  getDonationTabs: (state) => state.donationTabs.list,
  getDonationTabIndex: (state) => state.donationTabs.current,
  getCurrentDonationTab: (state) => state.donationTabs.list[state.donationTabs.current],
  // other
  getAmount: (state) => state.amount,
  getTarget: (state) => state.target,
  isVisibilityDobrothonForm: (state) => state.visibilityDobrothonForm,
  isVisibilityDonationForm: (state) => state.visibilityDonationForm,
};
