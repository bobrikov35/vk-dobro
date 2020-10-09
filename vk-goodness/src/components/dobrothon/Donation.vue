<template>
  <div class="cs-modal-pay-form" v-show="isVisibilityDonationForm">
    <div class="cs-modal-pay-form__container">
      <button class="cs-modal-pay-form__exit" @click="switchVisibilityDonationForm">
        <i class="fa fa-times-circle" />
      </button>
      <h2>Сумма пожертвования</h2>
      <ul class="cs-modal-pay-form__tabs">
        <li v-for="(item, index) in formattedDonationTabs" :key="item.id" @click="choiceItem(index)" v-show="index < 7"
            class="cs-modal-pay-form__tab" :class="index === getDonationTabIndex && 'cs-modal-pay-form__tab_active'">
          {{ formattedDonationTabs[index] }}
        </li>
        <li class="cs-modal-pay-form__tab" :class="getDonationTabIndex < 0 && 'cs-modal-pay-form__tab_active'"
            @click="choiceItem(-1)">Своя</li>
      </ul>
      <EditAmount />
      <button class="cs-button-1 cs-modal-pay-form__pay" @click="pay">Пожертвовать</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import format from '@/libs/format';
import EditAmount from '@/components/dobrothon/EditAmount.vue';

export default {
  name: 'Donation',
  components: {
    EditAmount,
  },
  methods: {
    ...mapActions({
      makePayment: 'dobrothon/makePayment',
      setAmount: 'dobrothon/setAmount',
      setDonationTabIndex: 'dobrothon/setDonationTabIndex',
      switchVisibilityDonationForm: 'dobrothon/switchVisibilityDonationForm',
    }),
    choiceItem(index) {
      if (index === this.getDonationTabIndex) {
        return;
      }
      this.setDonationTabIndex(index);
      if (index >= 0) {
        this.setAmount(this.getCurrentDonationTab.value);
      }
    },
    pay() {
      this.switchVisibilityDonationForm();
      this.makePayment();
    },
  },
  computed: {
    ...mapGetters({
      getAmount: 'dobrothon/getAmount',
      getCurrentDonationTab: 'dobrothon/getCurrentDonationTab',
      getDonationTabs: 'dobrothon/getDonationTabs',
      getDonationTabIndex: 'dobrothon/getDonationTabIndex',
      getDobrothon: 'dobrothon/getDobrothon',
      isVisibilityDonationForm: 'dobrothon/isVisibilityDonationForm',
    }),
    formattedDonationTabs() {
      return this.getDonationTabs.map((item) => format.numberFinance(item.value));
    },
    project() {
      return this.getDobrothon.project;
    },
  },
  mounted() {
    this.setAmount(this.getDonationTabIndex >= 0 ? this.getCurrentDonationTab.value : 0);
  },
};
</script>

<style scoped lang="sass">
@import '../styles/buttons'
@import '../styles/modalPayForm'
</style>
