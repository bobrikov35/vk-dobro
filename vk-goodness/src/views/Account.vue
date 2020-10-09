<template>
  <div class="account">
    <Rewards />
    <Controller />
    <DonationsGrouped v-if="getControllerIndex === 1"/>
    <Donations v-else-if="getControllerIndex === 2" />
    <Dobrothons v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Controller from '@/components/account/Controller.vue';
import Dobrothons from '@/components/account/Dobrothons.vue';
import Donations from '@/components/account/Donations.vue';
import DonationsGrouped from '@/components/account/DonationsGrouped.vue';
import Rewards from '@/components/account/Rewards.vue';

export default {
  name: 'Account',
  components: {
    Controller,
    Dobrothons,
    Donations,
    DonationsGrouped,
    Rewards,
  },
  computed: {
    ...mapGetters({
      getControllerIndex: 'account/getControllerIndex',
    }),
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped lang="sass">
@import '../styles/var'
@import '../styles/mixin'

.account
  background-color: $Background
  +flexColumnGrow(1)
</style>
