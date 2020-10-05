<template>
  <div class="cs-edit">
    <div class="cs-edit__container">
      <div class="cs-edit__field">
        <button class="cs-edit__button cs-edit__dec" :disabled="donationTabIndex >= 0" @click="decrease">
          <i class="fa fa-caret-down"></i>
        </button>
        <input class="cs-edit__input" type="number" :value="amount" :readonly="donationTabIndex >= 0"
               @keydown="keyIgnore" @input="changeValue">
        <button class="cs-edit__button cs-edit__inc" :disabled="donationTabIndex >= 0" @click="increase">
          <i class="fa fa-caret-up"></i>
        </button>
        <h3 class="cs-edit__rub">₽</h3>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapActions,
  mapGetters,
} from 'vuex';

export default {
  name: 'EditAmount',
  data() {
    return {
      edit: null,
    };
  },
  methods: {
    changeValue() {
      const value = this.edit.value.length > 0 ? parseInt(this.edit.value, 10) : 0;
      if (value > this.maxValue) {
        this.edit.value = this.maxValue;
        this.setAmount(this.maxValue);
      } else {
        this.setAmount(value);
      }
    },
    decrease() {
      let value = this.edit.value.length > 0 ? parseInt(this.edit.value, 10) : 0;
      for (let i = this.donationTabs.length - 1; i >= 0; i--) {
        if (value >= this.donationTabs[i].value * 5) {
          const remnant = value % this.donationTabs[i].value;
          value -= remnant === 0 ? this.donationTabs[i].value : remnant;
          break;
        }
        if (i === 0) value -= 1;
      }
      if (value < 0) value = 0;
      this.edit.value = value;
      this.setAmount(value);
    },
    increase() {
      let value = this.edit.value.length > 0 ? parseInt(this.edit.value, 10) : 0;
      for (let i = this.donationTabs.length - 1; i >= 0; i--) {
        if (value >= this.donationTabs[i].value * 4) {
          const remnant = value % this.donationTabs[i].value;
          value += this.donationTabs[i].value - remnant;
          break;
        }
        if (i === 0) value += 1;
      }
      if (value > this.maxValue) value = this.maxValue;
      this.edit.value = value;
      this.setAmount(value);
    },
    keyIgnore(event) {
      if (event.key === '-' || event.key === '+' || event.key === 'e') {
        event.preventDefault();
      }
    },
    ...mapActions({
      setAmount: 'project/setAmount',
    }),
  },
  computed: {
    maxValue() {
      return this.project.target - this.project.sum;
    },
    ...mapGetters({
      amount: 'project/getAmount',
      donationTabs: 'project/getDonationTabs',
      donationTabIndex: 'project/getDonationTabIndex',
      project: 'project/getProject',
    }),
  },
  mounted() {
    this.edit = this.$el.querySelector('.cs-edit__input');
  },
};
</script>

<style scoped lang="sass">
@import '../styles/edit'
</style>
