export default {
  // dobrothon
  getDobrothon: (state) => state.dobrothon.data,
  getDobrothonError: (state) => state.dobrothon.error,
  isLoadingDobrothon: (state) => state.dobrothon.loading,
  // donation tabs
  getDonationTabs: (state) => state.donationTabs.list,
  getDonationTabIndex: (state) => state.donationTabs.current,
  getCurrentDonationTab: (state) => state.donationTabs.list[state.donationTabs.current],
  // other
  getAmount: (state) => state.amount,
  isVisibilityDonationForm: (state) => state.visibilityDonationForm,
};
