<template>
  <div class="cs-edit">
    <div class="cs-edit__container">
      <div class="cs-edit__field">
        <button class="cs-edit__button cs-edit__dec" @click="decrease">
          <i class="fa fa-caret-down"></i>
        </button>
        <input class="cs-edit__input" type="number" :value="getTarget" @keydown="keyIgnore" @input="changeValue">
        <button class="cs-edit__button cs-edit__inc" @click="increase">
          <i class="fa fa-caret-up"></i>
        </button>
        <h3 class="cs-edit__rub">₽</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'EditTarget',
  data() {
    return {
      edit: null,
    };
  },
  methods: {
    ...mapActions({
      setTarget: 'project/setTarget',
    }),
    changeValue() {
      const value = this.edit.value.length > 0 ? parseInt(this.edit.value, 10) : 0;
      const max = Math.min(this.getAmount * 100, this.maxValue);
      if (value > max) {
        this.edit.value = max;
        this.setTarget(max);
      } else {
        this.setTarget(value);
      }
    },
    decrease() {
      let value = this.edit.value.length > 0 ? parseInt(this.edit.value, 10) : 0;
      const min = this.getAmount * 2;
      for (let i = this.getDonationTabs.length - 1; i >= 0; i--) {
        if (value >= this.getDonationTabs[i].value * 5) {
          const remnant = value % this.getDonationTabs[i].value;
          value -= remnant === 0 ? this.getDonationTabs[i].value : remnant;
          break;
        }
        if (i === 0) value -= 1;
      }
      if (value < min) value = min;
      this.edit.value = value;
      this.setTarget(value);
    },
    increase() {
      let value = this.edit.value.length > 0 ? parseInt(this.edit.value, 10) : 0;
      const max = Math.min(this.getAmount * 100, this.maxValue);
      for (let i = this.getDonationTabs.length - 1; i >= 0; i--) {
        if (value >= this.getDonationTabs[i].value * 4) {
          const remnant = value % this.getDonationTabs[i].value;
          value += this.getDonationTabs[i].value - remnant;
          break;
        }
        if (i === 0) value += 1;
      }
      if (value > max) value = max;
      this.edit.value = value;
      this.setTarget(value);
    },
    keyIgnore(event) {
      if (event.key === '-' || event.key === '+' || event.key === 'e') {
        event.preventDefault();
      }
    },
  },
  computed: {
    ...mapGetters({
      getAmount: 'project/getAmount',
      getDonationTabs: 'project/getDonationTabs',
      getProject: 'project/getProject',
      getTarget: 'project/getTarget',
    }),
    maxValue() {
      return this.getProject.target - this.getProject.sum;
    },
  },
  mounted() {
    this.edit = this.$el.querySelector('.cs-edit__input');
  },
};
</script>

<style scoped lang="sass">
@import '../styles/edit'
</style>
