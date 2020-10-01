<template>
  <div class="account-rewards">
    <div class="account-rewards__container">
      <h2 class="account-rewards__title">Награда за добродеятельность</h2>
      <div class="account-rewards__items">
        <Reward v-for="item of rewards" :key="item.id" :vItem="item" />
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
      rewards: 'account/getRewards',
    }),
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.account-rewards
  background-color: $Background
  border-bottom: 1px solid $Border
  &__container
    max-width: $Site-MaxWidth
    +flexSb
    padding-bottom: 0.20rem
    margin: 0 auto
  &__title
    width: 100%
    +flexCC
    margin-top: 0.20rem

@media (max-width: 332px)
  .account-rewards__title
    font-size: 17px

@media (min-width: 332px) and (max-width: 344px)
  .account-rewards__title
    font-size: 18px

@media (max-width: $Media-SizeS)
  .account-rewards__container
    +paddingRightLeftSingle(2%)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .account-rewards__container
    +paddingRightLeftSingle(2%)

@media (min-width: $Media-SizeL)
  .account-rewards__container
    +paddingRightLeftSingle(2%)
</style>
