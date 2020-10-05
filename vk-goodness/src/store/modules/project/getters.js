export default {
  // donation tabs
  getDonationTabs: (state) => state.donationTabs.list,
  getDonationTabIndex: (state) => state.donationTabs.current,
  getCurrentDonationTab: (state) => state.donationTabs.list[state.donationTabs.current],
  // project
  getProject: (state) => state.project.data,
  getProjectError: (state) => state.project.error,
  isLoadingProject: (state) => state.project.loading,
  isResultProject: (state) => state.project.result,
  // other
  getAmount: (state) => state.amount,
  getTarget: (state) => state.target,
  isVisibilityDobrothonForm: (state) => state.visibilityDobrothonForm,
  isVisibilityDonationForm: (state) => state.visibilityDonationForm,
};
