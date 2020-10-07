export default {
  // panels
  getControllers: (state) => state.controllers.list,
  getControllerIndex: (state) => state.controllers.current,
  getCurrentController: (state) => state.controllers.list[state.controllers.current],
  // rewards
  getRewards: (state) => state.rewards.list,
  getRewardIndex: (state) => state.rewards.current,
  getCurrentReward: (state) => state.rewards.list[state.rewards.current],
  // dobrothonList
  getDobrothonList: (state) => state.dobrothonList.data,
  getDobrothonListError: (state) => state.dobrothonList.error,
  isLoadingDobrothonList: (state) => state.dobrothonList.loading,
  // donationList
  getDonationList: (state) => state.donationList.data,
  getDonationListGrouped: (state) => state.donationList.dataGrouped,
  getDonationListError: (state) => state.donationList.error,
  isLoadingDonationList: (state) => state.donationList.loading,
  // points
  getPoints: (state) => state.points.data,
  getPointsError: (state) => state.points.error,
  isLoadingPoints: (state) => state.points.loading,
};
