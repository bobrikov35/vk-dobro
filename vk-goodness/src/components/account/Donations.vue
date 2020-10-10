<template>
  <div class="account-donations">
    <div v-if="isLoadingDonationList" class="account-donations__loading">
      <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <div v-else-if="isError" class="account-donations__error">
      <h2>Что-то пошло не так</h2>
    </div>
    <div v-else class="account-donations__content">
      <div v-for="item of getDonationList" :key="item.id" class="account-donations__row">
        <div class="account-donations__item">
          <p class="account-donations__date">{{ printDate(item.dateCreated) }}</p>
          <p class="account-donations__project">Проект №
            <router-link class="account-donations__link" :to="`/project/${item.project.path}`">
              {{ item.project.id }}
            </router-link>
          </p>
          <p class="account-donations__amount">{{ printAmount(item.amount) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import format from '@/libs/format';

export default {
  name: 'Donations',
  methods: {
    printNumb(n) {
      return `0${n}`.slice(-2);
    },
    printDate(date) {
      const d = `${this.printNumb(date.getDate())}.${this.printNumb(date.getMonth() + 1)}.${date.getFullYear()}`;
      const t = `${this.printNumb(date.getHours())}:${this.printNumb(date.getMinutes())}`;
      return `${d} ${t}`;
    },
    printAmount(amount) {
      return format.numberFinance(amount);
    },
  },
  computed: {
    ...mapGetters({
      getDonationList: 'account/getDonationList',
      isLoadingDonationList: 'account/isLoadingDonationList',
      getDonationListError: 'account/getDonationListError',
    }),
    isError() {
      return this.getDonationListError !== null;
    },
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.account-donations
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
  &__row
    border-bottom: 1px solid $Border
    padding: $Site-PuddingVertical $Site-PuddingHorizontal-MAX
  &__item
    +flexSbC
  &__date, &__project
    width: 35%
  &__date, &__project, &__amount
    font-size: 1.25em
  &__amount
    width: 25%
    text-align: right
  &__link
    text-decoration: underline
    color: $Text
    font-size: 1.10em
    font-weight: 700

@media (max-width: $Media-SizeS)
  .account-donations
    &__row
      +paddingRightLeftSingle($Site-PuddingHorizontal-S)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .account-donations
    &__row
      +paddingRightLeftSingle($Site-PuddingHorizontal-M)

@media (min-width: $Media-MinSizeL) and (max-width: $Media-MaxSizeL)
  .account-donations
    &__row
      +paddingRightLeftSingle($Site-PuddingHorizontal-L)
</style>
