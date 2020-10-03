export default {
  // dobrothon
  getDonations: (state) => state.donations.data,
  getDonationsGroupByProject: (state) => state.donations.dataGroupByProject,
  getDonationsError: (state) => state.donations.error,
  isLoadingDonations: (state) => state.donations.loading,
  isResultDonations: (state) => state.donations.result,
  // tabs
  getTabs: (state) => state.tabs.list,
  getTabIndex: (state) => state.tabs.current,
  getCurrentTab: (state) => state.tabs.list[state.tabs.current],
  // rewards
  getRewards: (state) => state.rewards.list,
  getRewardIndex: (state) => state.rewards.current,
  getCurrentReward: (state) => state.rewards.list[state.rewards.current],
  // other
  getPoints: (state) => state.points,
};
