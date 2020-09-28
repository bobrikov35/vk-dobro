<template>
  <div class="single-amount" :class="vClass">
    <div class="single-amount__container">
      <div class="single-amount__box" @click.stop="">
        <button class="single-amount__button single-amount__dec" :disabled="donatesTabIndex >= 0" @click="decrease">
          <i class="fa fa-caret-down"></i>
        </button>
        <input class="single-amount__input" type="number" :readonly="donatesTabIndex >= 0" :value="amount"
               @click.stop @keydown="keyIgnore" @input="changeValue">
        <button class="single-amount__button single-amount__inc" :disabled="donatesTabIndex >= 0" @click="increase">
          <i class="fa fa-caret-up"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'EditAmount',
  props: {
    vMax: {
      type: Number,
      required: true,
    },
    vClass: String,
  },
  methods: {
    keyIgnore(event) {
      if (event.key === '-' || event.key === '+' || event.key === 'e') {
        event.preventDefault();
      }
    },
    changeValue(event) {
      const edit = event.target;
      const value = event.target.value.length > 0 ? parseInt(event.target.value, 10) : 0;
      if (value > this.vMax) {
        edit.value = this.vMax;
        this.setAmount(this.vMax);
      } else {
        this.setAmount(value);
      }
    },
    decrease() {
      const edit = this.$el.querySelector('.single-amount__input');
      let value = edit.value.length > 0 ? parseInt(edit.value, 10) : 0;
      for (let i = this.donatesTabs.length - 1; i >= 0; i--) {
        if (value >= this.donatesTabs[i].value * 5) {
          const remnant = value % this.donatesTabs[i].value;
          value -= remnant === 0 ? this.donatesTabs[i].value : remnant;
          break;
        }
        if (i === 0) {
          value -= 1;
        }
      }
      if (value < 0) {
        value = 0;
      }
      this.setAmount(value);
      edit.value = value;
    },
    increase() {
      const edit = this.$el.querySelector('.single-amount__input');
      let value = edit.value.length > 0 ? parseInt(edit.value, 10) : 0;
      for (let i = this.donatesTabs.length - 1; i >= 0; i--) {
        if (value >= this.donatesTabs[i].value * 4) {
          const remnant = value % this.donatesTabs[i].value;
          value += this.donatesTabs[i].value - remnant;
          break;
        }
        if (i === 0) {
          value += 1;
        }
      }
      if (value > this.vMax) {
        value = this.vMax;
      }
      this.setAmount(value);
      edit.value = value;
    },
    ...mapActions({
      setAmount: 'single/setAmount',
    }),
  },
  computed: {
    ...mapGetters({
      amount: 'single/getAmount',
      donatesTabIndex: 'single/getDonatesTabIndex',
      donatesTabs: 'staticDataLoader/getDonatesTabs',
    }),
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

input
  &[type=number]
    appearance: none
    -moz-appearance: textfield
  &[type=number]::-webkit-outer-spin-button,
  &[type=number]::-webkit-inner-spin-button
    -webkit-appearance: none

.single-amount
  &__container
    max-width: $Site-MaxWidth
    margin: 0 auto
  &__box
    overflow: hidden
    background-color: $Background
    border: 1px solid $Border
    +flexCC
    position: relative
    margin: 0 auto
  &__input
    width: 100%
    text-align: center
  &__button
    cursor: pointer
    overflow: hidden
    +flexCC
    position: absolute
  &__dec
    border-right: 1px solid $Border
    +posTopLeft(1px, 1px)
  &__inc
    border-left: 1px solid $Border
    +posTopRight(1px, 1px)

@media (max-width: $Media-SizeS)
  $height: 2.065rem
  .single-amount
    &__box
      width: 80%
      height: $height
      border-radius: 0.25rem
    &__input
      height: $height - 0.25rem
      font-size: 1rem
      padding: 0.375rem 4.25rem 0.375rem 2.75rem
    &__button
      width: $height
      height: $height - 0.25rem
      font-size: 1.1rem
    .fa-caret-down
      margin-top: 2px
    .fa-caret-up
      margin-bottom: 2px

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  $height: 2.625rem
  .single-amount
    &__box
      width: 74%
      height: $height
      border-radius: 0.375rem
    &__input
      height: $height - 0.25rem
      font-size: 1.125rem
      padding: 0.5rem 5.125rem 0.5rem 3.375rem
    &__button
      width: $height
      height: $height - 0.25rem
      font-size: 1.25rem
    .fa-caret-down
      margin-top: 2px
    .fa-caret-up
      margin-bottom: 2px

@media (min-width: $Media-SizeL)
  $height: 3.125rem
  .single-amount
    &__box
      width: 68%
      height: $height
      border-radius: 0.375rem
    &__input
      height: $height - 0.25rem
      font-size: 1.25rem
      padding: 0.75rem 6rem 0.75rem 4rem
    &__button
      width: $height
      height: $height - 0.25rem
      font-size: 1.5rem
    .fa-caret-down
      margin-top: 2px
    .fa-caret-up
      margin-bottom: 2px
</style>
