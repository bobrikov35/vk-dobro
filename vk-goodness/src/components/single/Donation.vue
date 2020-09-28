<template>
  <div class="single-donation" @click.stop="() => {}" @wheel.stop="() => {}">
    <div class="single-donation__container">
      <h3 class="single-donation__title">Сумма пожертвования</h3>
      <ul class="single-donation__tabs">
        <li class="single-donation__tab" :class="index === donatesTabIndex ? 'single-donation__tab_active' : ''"
            v-for="(item, index) in formatDonatesTabs" :key="item.id" v-show="index < 7"
            :data-index="index" :data-value="donatesTabs[index].value" @click="choiceItem">
          {{ formatDonatesTabs[index] }}
        </li>
        <li class="single-donation__tab" :class="donatesTabIndex < 0 ? 'single-donation__tab_active' : ''"
            data-index="-1" data-value="0" @click="choiceItem">Своя</li>
      </ul>
      <EditAmount vClass="single-donation__amount" :vMax="project.target - project.sum" />
      <Button vClass="single-donation__donate" vTitle="Пожертвовать" @click="pay"/>
    </div>
  </div>
</template>

<script>
import format from '@/libs/format';
import { mapActions, mapGetters } from 'vuex';
import EditAmount from '@/components/single/EditAmount.vue';
import Button from '@/components/objects/Button.vue';

export default {
  name: 'Donation',
  components: {
    EditAmount,
    Button,
  },
  methods: {
    choiceItem(event) {
      const index = parseInt(event.target.getAttribute('data-index'), 10);
      if (index === this.donatesTabIndex) {
        return;
      }
      this.setDonatesTabIndex(index);
      if (index < 0) {
        return;
      }
      const value = parseInt(event.target.getAttribute('data-value'), 10);
      this.setAmount(value);
    },
    pay() {
      this.makePayment({
        projectId: this.project.id,
        amount: this.amount,
      });
    },
    ...mapActions({
      makePayment: 'dataExchange/makePayment',
      setDonatesTabIndex: 'single/setDonatesTabIndex',
      setAmount: 'single/setAmount',
    }),
  },
  computed: {
    formatDonatesTabs() {
      return this.donatesTabs.map((item) => format.numberFinance(item.value));
    },
    ...mapGetters({
      amount: 'single/getAmount',
      donatesTabIndex: 'single/getDonatesTabIndex',
      donatesTabs: 'staticDataLoader/getDonatesTabs',
      project: 'single/getProject',
    }),
  },
  mounted() {
    const value = this.donatesTabIndex >= 0 ? this.donatesTabs[this.donatesTabIndex].value : 0;
    this.setAmount(value);
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.single-donation
  background-color: $Background
  +borderTopBottom(1px, $Border)
  &__container
    max-width: $Site-MaxWidth
    text-align: center
    margin: 0 auto
  &__tabs
    display: grid
    grid-template-columns: repeat(4, 1fr)
  &__tab
    cursor: pointer
    text-align: center
    border: 1px solid $Border
    &_active
      font-weight: 700
      background-color: $ColorMainYellow
      border-color: $ColorMainYellowActive
  &__donate
    border-width: 1px

@media (max-width: $Media-SizeS)
  .single-donation
    &__container
      padding: 0.5rem 0.75rem
    &__title
      margin-bottom: 0.5rem
    &__tabs
      grid-gap: 0.5rem
    &__tab
      font-size: 1rem
      border-radius: 0.25rem
      padding: 0.375rem 0
    &__amount
      margin-top: 0.5rem
    &__donate
      width: 80%
      margin: 1rem auto 0.5rem

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .single-donation
    &__container
      padding: 0.625rem 1.125rem
    &__title
      margin-bottom: 0.75rem
    &__tabs
      grid-gap: 0.75rem
    &__tab
      font-size: 1.125rem
      border-radius: 0.315rem
      padding: 0.565rem 0
    &__amount
      margin-top: 0.75rem
    &__donate
      width: 74%
      margin: 1.5rem auto 0.75rem

@media (min-width: $Media-SizeL)
  .single-donation
    &__container
      padding: 0.75rem 1.5rem
    &__title
      margin-bottom: 1rem
    &__tabs
      grid-gap: 1rem
    &__tab
      font-size: 1.25rem
      border-radius: 0.375rem
      padding: 0.75rem 0
    &__amount
      margin-top: 1rem
    &__donate
      width: 68%
      margin: 2rem auto 1rem
</style>
