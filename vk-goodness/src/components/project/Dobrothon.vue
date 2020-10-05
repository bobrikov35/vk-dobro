<template>
  <div class="single-dobrothon" v-show="isVisibilityDobrothonForm">
    <div class="single-dobrothon__container">
      <div class="single-dobrothon__exit">
        <button class="single-dobrothon__exit-button" @click="switchVisibilityDobrothonForm">
          <i class="fa fa-times-circle"></i>
        </button>
      </div>
      <h3 class="single-dobrothon__title">Сумма вашего взноса</h3>
      <ul class="single-dobrothon__tabs">
        <li v-for="(item, index) in formatDonatesTabs" :key="item.id" v-show="index < 7" @click.stop="choiceItem(index)"
            class="single-dobrothon__tab" :class="index === donationTabIndex ? 'single-dobrothon__tab_active' : ''">
          {{ formatDonatesTabs[index] }}
        </li>
        <li class="single-dobrothon__tab" :class="donationTabIndex < 0 ? 'single-dobrothon__tab_active' : ''"
            @click.stop="choiceItem(-1)">Своя</li>
      </ul>
      <EditAmount vClass="single-dobrothon__amount" :vMax="project.target - project.sum" />
      <h3 class="single-dobrothon__title single-dobrothon__title_target">Целевая сумма ДОБРОфона</h3>
      <EditTarget vClass="single-dobrothon__target" :vMax="project.target - project.sum" />
      <Button vClass="single-dobrothon__pay" vTitle="Запустить" @click="make"/>
    </div>
  </div>
</template>

<script>
import format from '@/libs/format';
import { mapActions, mapGetters } from 'vuex';
import EditAmount from '@/components/project/EditAmount.vue';
import EditTarget from '@/components/project/EditTarget.vue';
import Button from '@/components/objects/Button.vue';

export default {
  name: 'Dobrothon',
  components: {
    EditAmount,
    EditTarget,
    Button,
  },
  methods: {
    choiceItem(index) {
      if (index === this.donationTabIndex) {
        return;
      }
      this.setDonationTabIndex(index);
      if (index >= 0) {
        this.setAmount(this.currentDonationTab.value);
      }
    },
    make() {
      this.switchVisibilityDobrothonForm();
      this.makeDobrothon({
        projectId: this.project.id,
        amount: this.amount,
        target: this.target,
      });
    },
    ...mapActions({
      makeDobrothon: 'dobrothon/makeDobrothon',
      setAmount: 'project/setAmount',
      setDonationTabIndex: 'project/setDonationTabIndex',
      switchVisibilityDobrothonForm: 'project/switchVisibilityDobrothonForm',
    }),
  },
  computed: {
    formatDonatesTabs() {
      return this.donationTabs.map((item) => format.numberFinance(item.value));
    },
    ...mapGetters({
      amount: 'project/getAmount',
      target: 'project/getTarget',
      currentDonationTab: 'project/getCurrentDonationTab',
      donationTabs: 'project/getDonationTabs',
      donationTabIndex: 'project/getDonationTabIndex',
      isVisibilityDobrothonForm: 'project/isVisibilityDobrothonForm',
      project: 'project/getProject',
    }),
  },
  mounted() {
    this.setAmount(this.donationTabIndex >= 0 ? this.currentDonationTab.value : 0);
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.single-dobrothon
  z-index: 11
  width: 100%
  height: 100%
  background-color: $BackgroundDarkened
  border: 1px solid $Border
  +flexCC
  position: fixed
  +posTopLeftSingle(0)
  &__container
    max-width: $Site-MaxWidth
    text-align: center
    background-color: $Background
    border-radius: 0.30rem
    padding: 1.60rem 0.80rem 1rem
    position: relative
  &__title
    margin-bottom: 0.60rem
  &__title_target
    margin-top: 1.20rem
  &__tabs
    display: grid
    grid-template-columns: repeat(4, 1fr)
    grid-gap: 0.60rem
  &__tab
    cursor: pointer
    text-align: center
    border: 1px solid $Border
    border-radius: 0.30rem
    padding: 0.45rem 0.30rem
    &_active
      font-weight: 700
      background-color: $ColorMainYellow
      border-color: $ColorMainYellowActive
  &__amount, &__target
    margin-top: 0.60rem
  &__pay
    border-width: 1px
    margin: 1.20rem auto 0.60rem
  &__exit
    width: 2rem
    height: 2rem
    +flexCC
    position: absolute
    +posTopRightSingle(0.2rem)
  &__exit-button
    cursor: pointer
    overflow: hidden
    width: 1.60rem
    height: 1.60rem
    color: $ColorWhite
    font-size: 1.40rem
    background-color: $ColorAuto
    border-radius: 50%
    +flexCC
    & .fa
      line-height: 0.90rem
      +marginTopLeft(-2px, 1px)

@media (max-width: $Media-SizeS)
  .single-dobrothon
    &__container
      +marginRightLeftSingle(2%)
    &__tabs
      grid-template-columns: repeat(3, 1fr)
    &__pay
      width: 78%
    &__exit-button i
      +marginTopLeft(-1px, 0)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .single-dobrothon
    &__container
      +marginRightLeftSingle(4%)
    &__pay
      width: 74%

@media (min-width: $Media-SizeL)
  .single-dobrothon
    &__container
      +marginRightLeftSingle(6%)
    &__pay
      width: 72%
</style>
