<template>
  <div class="account-rewards">
    <div class="account-rewards__container">
      <h2 class="account-rewards__title">Награда за добродеятельность</h2>
      <div v-if="isLoadingPoints || isError" class="account-rewards__items">
        <div class="account-rewards__items_inactive" :style="`background-image: url(${getRewards[0].image})`" />
      </div>
      <div v-else class="account-rewards__items">
        <Reward v-for="item of getRewards" :key="item.id" :vReward="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Reward from '@/components/account/Reward.vue';

export default {
  name: 'Rewards',
  components: {
    Reward,
  },
  computed: {
    ...mapGetters({
      getRewards: 'account/getRewards',
      getPoints: 'account/getPoints',
      getPointsError: 'account/getPointsError',
      isLoadingPoints: 'account/isLoadingPoints',
    }),
    isError() {
      return this.getPointsError !== null;
    },
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.account-rewards
  background-color: $Background
  border-bottom: 1px solid $Border
  &_inactive
    filter: grayscale(100%)
    overflow: hidden
    width: 2.50rem
    height: 2.50rem
    background-size: auto 2.50rem
    background-repeat: no-repeat
    background-position-x: 50%
    margin-left: 0.50rem
  &__container
    max-width: $Site-MaxWidth
    +flexSb
    +paddingRightBottomLeft($Site-PuddingHorizontal-MAX, 0.20rem, $Site-PuddingHorizontal-MAX)
    margin: 0 auto
  &__title
    width: 100%
    +flexCC
    margin-top: 0.20rem

@media (max-width: 332px)
  .account-rewards
    &__title
      font-size: 17px

@media (min-width: 332px) and (max-width: 344px)
  .account-rewards
    &__title
      font-size: 18px

@media (max-width: $Media-SizeS)
  .account-rewards
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-S)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .account-rewards
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-M)

@media (min-width: $Media-MinSizeL) and (max-width: $Media-MaxSizeL)
  .account-rewards
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-L)
</style>
