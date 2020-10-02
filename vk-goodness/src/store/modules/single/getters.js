export default {
  isLoadingProject: (state) => state.project.loading,
  isResultProject: (state) => state.project.result,
  isVisibilityDobrothonForm: (state) => state.visibilityDobrothonForm,
  isVisibilityDonationForm: (state) => state.visibilityDonationForm,
  getAmount: (state) => state.amount,
  getTarget: (state) => state.target,
  getCurrentDonationTab: (state) => state.donationTabs.list[state.donationTabs.current],
  getDonationTabs: (state) => state.donationTabs.list,
  getDonationTabIndex: (state) => state.donationTabs.current,
  getProject: (state) => state.project.data,
  getProjectError: (state) => state.project.error,
};
