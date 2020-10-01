<template>
  <div class="account">
    <link rel="preload" href="./icons/medal-bronze.png" as="image">
    <link rel="preload" href="./icons/medal-silver.png" as="image">
    <link rel="preload" href="./icons/medal-gold.png" as="image">
    <Rewards />
    <Tabs />
    <Donations />
    <Dobrothons />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Dobrothons from '@/components/account/Dobrothons.vue';
import Donations from '@/components/account/Donations.vue';
import Rewards from '@/components/account/Rewards.vue';
import Tabs from '@/components/account/Tabs.vue';

export default {
  name: 'Account',
  components: {
    Dobrothons,
    Donations,
    Rewards,
    Tabs,
  },
  methods: {
    ...mapActions({
      fetchPoints: 'account/fetchPointsById',
      fetchDobrothons: 'account/dobrothons/fetchDobrothonsById',
      fetchDonations: 'account/donations/fetchDonationsById',
    }),
  },
  computed: {
    ...mapGetters({
      currentTab: 'account/getTabIndex',
    }),
  },
  created() {
    this.fetchPoints();
    this.fetchDonations();
    this.fetchDobrothons();
  },
};
</script>

<style scoped lang="sass">
@import '../styles/var'
@import '../styles/mixin'

.account
  background-color: $Background
  +flexColumn
  flex-grow: 1
</style>
