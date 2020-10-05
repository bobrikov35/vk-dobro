<template>
  <div class="single-amount" :class="vClass">
    <div class="single-amount__container">
      <div class="single-amount__field">
        <button class="single-amount__button single-amount__dec" :disabled="donationTabIndex >= 0" @click="decrease">
          <i class="fa fa-caret-down"></i>
        </button>
        <input class="single-amount__input" type="number" :value="amount" :readonly="donationTabIndex >= 0"
               @keydown="keyIgnore" @input="changeValue">
        <button class="single-amount__button single-amount__inc" :disabled="donationTabIndex >= 0" @click="increase">
          <i class="fa fa-caret-up"></i>
        </button>
        <h3 class="single-amount__rub">₽</h3>
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
  data() {
    return {
      edit: null,
    };
  },
  methods: {
    changeValue() {
      const value = this.edit.value.length > 0 ? parseInt(this.edit.value, 10) : 0;
      if (value > this.vMax) {
        this.edit.value = this.vMax;
        this.setAmount(this.vMax);
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
      if (value > this.vMax) value = this.vMax;
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
    ...mapGetters({
      amount: 'project/getAmount',
      donationTabs: 'project/getDonationTabs',
      donationTabIndex: 'project/getDonationTabIndex',
    }),
  },
  mounted() {
    this.edit = this.$el.querySelector('.single-amount__input');
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

$height: 2.20rem

.single-amount
  &__container
    max-width: $Site-MaxWidth
    margin: 0 auto
  &__field
    overflow: hidden
    width: 88%
    height: $height
    background-color: $Background
    border: 1px solid $Border
    border-radius: 0.30rem
    +flexSbC
    position: relative
    margin: 0 auto
  &__input
    height: $height
    text-align: center
    padding: 0.40rem 1.80rem 0.40rem 0.60rem
  &__button
    cursor: pointer
    overflow: hidden
    width: $height
    height: $height
    +flexCC
    .fa-caret-down
      margin-top: 0.10rem
    .fa-caret-up
      margin-bottom: 0.10rem
  &__dec
    border-right: 1px solid $Border
    +posTopLeftSingle(1px)
  &__inc
    border-left: 1px solid $Border
    +posTopRightSingle(1px)
  &__rub
    width: $height
    height: $height
    font-weight: 400
    +flexCC
    padding-bottom: 0.10rem
    position: absolute
    +posTopRight(0, $height - 0.15rem)

@media (max-width: $Media-SizeS)
  .single-amount
    &__input
      width: 78%

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .single-amount
    &__input
      width: 74%

@media (min-width: $Media-SizeL)
  .single-amount
    &__input
      width: 72%
</style>
