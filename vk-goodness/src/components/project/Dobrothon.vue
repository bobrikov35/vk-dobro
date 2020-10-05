<template>
  <div class="cs-modal-pay-form" v-show="isVisibilityDobrothonForm">
    <div class="cs-modal-pay-form__container">
      <button class="cs-modal-pay-form__exit" @click="switchVisibilityDobrothonForm">
        <i class="fa fa-times-circle" />
      </button>
      <h2>Сумма вашего взноса</h2>
      <ul class="cs-modal-pay-form__tabs">
        <li v-for="(item, index) in formatDonationTabs" :key="item.id" @click="choiceItem(index)" v-show="index < 7"
            class="cs-modal-pay-form__tab" :class="index === donationTabIndex && 'cs-modal-pay-form__tab_active'">
          {{ formatDonationTabs[index] }}
        </li>
        <li class="cs-modal-pay-form__tab" :class="donationTabIndex < 0 && 'cs-modal-pay-form__tab_active'"
            @click="choiceItem(-1)">Своя</li>
      </ul>
      <EditAmount />
      <h2 class="project-dobrothon__title">Целевая сумма ДОБРОфона</h2>
      <EditTarget />
      <button class="cs-button-1 cs-modal-pay-form__pay" @click="run">Запустить</button>
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
import EditTarget from '@/components/project/EditTarget.vue';

export default {
  name: 'Dobrothon',
  components: {
    EditAmount,
    EditTarget,
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
    run() {
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
    formatDonationTabs() {
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
@import '../../styles/mixin'
@import '../styles/buttons'
@import '../styles/modalPayForm'

.project-dobrothon__title
  +marginTopBottomSingle(0.80rem)
</style>
