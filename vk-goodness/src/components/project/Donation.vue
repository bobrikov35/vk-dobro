<template>
  <div class="cs-modal-pay-form" v-show="isVisibilityDonationForm">
    <div class="cs-modal-pay-form__container">
      <button class="cs-modal-pay-form__exit" @click="switchVisibilityDonationForm">
        <i class="fa fa-times-circle" />
      </button>
      <h2>Сумма пожертвования</h2>
      <ul class="cs-modal-pay-form__tabs">
        <li v-for="(item, index) in formatDonationTabs" :key="item.id" @click="choiceItem(index)" v-show="index < 7"
            class="cs-modal-pay-form__tab" :class="index === donationTabIndex && 'cs-modal-pay-form__tab_active'">
          {{ formatDonationTabs[index] }}
        </li>
        <li class="cs-modal-pay-form__tab" :class="donationTabIndex < 0 && 'cs-modal-pay-form__tab_active'"
            @click="choiceItem(-1)">Своя</li>
      </ul>
      <EditAmount />
      <button class="cs-button-1 cs-modal-pay-form__pay" @click="pay">Пожертвовать</button>
    </div>
  </div>
</template>

<script>
import {
  mapActions,
  mapGetters,
} from 'vuex';
import format from '@/libs/format';
import EditAmount from '@/components/project/EditAmount.vue';

export default {
  name: 'Donation',
  components: {
    EditAmount,
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
    pay() {
      this.switchVisibilityDonationForm();
      this.makePayment({
        projectId: this.project.id,
        amount: this.amount,
      });
    },
    ...mapActions({
      makePayment: 'account/makePayment',
      setAmount: 'project/setAmount',
      setDonationTabIndex: 'project/setDonationTabIndex',
      switchVisibilityDonationForm: 'project/switchVisibilityDonationForm',
    }),
  },
  computed: {
    formatDonationTabs() {
      return this.donationTabs.map((item) => format.numberFinance(item.value));
    },
    ...mapGetters({
      amount: 'project/getAmount',
      currentDonationTab: 'project/getCurrentDonationTab',
      donationTabs: 'project/getDonationTabs',
      donationTabIndex: 'project/getDonationTabIndex',
      isVisibilityDonationForm: 'project/isVisibilityDonationForm',
      project: 'project/getProject',
    }),
  },
  mounted() {
    this.setAmount(this.donationTabIndex >= 0 ? this.currentDonationTab.value : 0);
  },
};
</script>

<style scoped lang="sass">
@import '../styles/buttons'
@import '../styles/modalPayForm'
</style>
