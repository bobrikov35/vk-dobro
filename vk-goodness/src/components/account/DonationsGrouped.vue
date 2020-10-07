<template>
  <div class="account-donations-grouped">
    <div v-if="isLoadingDonationList" class="account-donations-grouped__loading">
      <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <div v-else-if="isError" class="account-donations-grouped__error">
      <h2>Что-то пошло не так</h2>
    </div>
    <div v-else class="account-donations-grouped__content">
      <DonationCard v-for="item of getDonationListGrouped" :key="item.id" :vDonation="item" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DonationCard from '@/components/account/DonationCard.vue';

export default {
  name: 'DonationsGrouped',
  components: {
    DonationCard,
  },
  computed: {
    ...mapGetters({
      getDonationListGrouped: 'account/getDonationListGrouped',
      getDonationListError: 'account/getDonationListError',
      isLoadingDonationList: 'account/isLoadingDonationList',
    }),
    isError() {
      return this.getDonationListError !== null;
    },
  },
  mounted() {
    const list = this.$el.querySelectorAll('.progressbar__value');
    for (let i = 0; i < list.length; i++) {
      list[i].innerHTML = 'вклад';
    }
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.account-donations-grouped
  background-color: $Background
  +flexColumnGrow(1)
  &__loading, &__error
    max-width: $Site-MaxWidth
    +flexCC()
    margin: 0 auto
  &__loading, &__error, &__content
    flex-grow: 1
  &__loading
    font-size: $Loading-Size
</style>
