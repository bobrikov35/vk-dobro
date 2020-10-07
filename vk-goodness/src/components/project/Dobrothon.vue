<template>
  <div class="cs-modal-pay-form" v-show="isVisibilityDobrothonForm">
    <div class="cs-modal-pay-form__container">
      <button class="cs-modal-pay-form__exit" @click="switchVisibilityDobrothonForm">
        <i class="fa fa-times-circle" />
      </button>
      <h2>Сумма вашего взноса</h2>
      <ul class="cs-modal-pay-form__tabs">
        <li v-for="(item, index) in formattedDonationTabs" :key="item.id" @click="choiceItem(index)" v-show="index < 7"
            class="cs-modal-pay-form__tab" :class="index === getDonationTabIndex && 'cs-modal-pay-form__tab_active'">
          {{ formattedDonationTabs[index] }}
        </li>
        <li class="cs-modal-pay-form__tab" :class="getDonationTabIndex < 0 && 'cs-modal-pay-form__tab_active'"
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
    ...mapActions({
      makeDobrothon: 'project/makeDobrothon',
      setAmount: 'project/setAmount',
      setDonationTabIndex: 'project/setDonationTabIndex',
      switchVisibilityDobrothonForm: 'project/switchVisibilityDobrothonForm',
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
    run() {
      this.switchVisibilityDobrothonForm();
      this.makeDobrothon();
    },
  },
  computed: {
    ...mapGetters({
      getCurrentDonationTab: 'project/getCurrentDonationTab',
      getDonationTabs: 'project/getDonationTabs',
      getDonationTabIndex: 'project/getDonationTabIndex',
      isVisibilityDobrothonForm: 'project/isVisibilityDobrothonForm',
    }),
    formattedDonationTabs() {
      return this.getDonationTabs.map((item) => format.numberFinance(item.value));
    },
  },
  mounted() {
    this.setAmount(this.getDonationTabIndex >= 0 ? this.getCurrentDonationTab.value : 0);
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
