<template>
  <div class="account-reward" :style="`background-image: url(${vReward.image})`" @click="next"
       v-show="vReward.id === getCurrentReward.id">
    <link rel="preload" :href="vReward.image" as="image">
    <div class="account-reward account-reward_inactive" :style="`background-image: url(${vReward.image});`" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Reward',
  props: {
    vReward: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      next: 'account/nextReward',
      prev: 'account/prevReward',
    }),
    resizeReward() {
      const rewardInactive = this.$el.querySelector('.account-reward_inactive');
      if (this.getPoints < this.vReward.target) {
        rewardInactive.style.height = `${Math.floor((1 - this.getPoints / this.vReward.target) * 100)}%`;
      } else {
        rewardInactive.style.height = 0;
      }
    },
  },
  computed: {
    ...mapGetters({
      getCurrentReward: 'account/getCurrentReward',
      getPoints: 'account/getPoints',
    }),
  },
  created() {
    window.addEventListener('resize', this.resizeReward);
  },
  mounted() {
    this.resizeReward();
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.account-reward
  cursor: pointer
  overflow: hidden
  width: 2.50rem
  height: 2.50rem
  background-size: auto 2.50rem
  background-repeat: no-repeat
  background-position-x: 50%
  margin-left: 0.50rem
  &_inactive
    filter: grayscale(100%)
    width: 100%
    margin: 0
</style>
