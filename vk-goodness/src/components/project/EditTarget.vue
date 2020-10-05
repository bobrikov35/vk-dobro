<template>
  <div class="single-target" :class="vClass">
    <div class="single-target__container">
      <div class="single-target__field">
        <button class="single-target__button single-target__dec" @click="decrease">
          <i class="fa fa-caret-down"></i>
        </button>
        <input class="single-target__input" type="number" :value="target" @keydown="keyIgnore" @input="changeValue">
        <button class="single-target__button single-target__inc" @click="increase">
          <i class="fa fa-caret-up"></i>
        </button>
        <h3 class="single-target__rub">₽</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'EditTarget',
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
      const max = Math.min(this.amount * 100, this.vMax);
      if (value > max) {
        this.edit.value = max;
        this.setTarget(max);
      } else {
        this.setTarget(value);
      }
    },
    decrease() {
      const min = this.amount * 2;
      let value = this.edit.value.length > 0 ? parseInt(this.edit.value, 10) : 0;
      for (let i = this.donationTabs.length - 1; i >= 0; i--) {
        if (value >= this.donationTabs[i].value * 5) {
          const remnant = value % this.donationTabs[i].value;
          value -= remnant === 0 ? this.donationTabs[i].value : remnant;
          break;
        }
        if (i === 0) value -= 1;
      }
      if (value < min) value = min;
      this.edit.value = value;
      this.setTarget(value);
    },
    increase() {
      const max = Math.min(this.amount * 100, this.vMax);
      let value = this.edit.value.length > 0 ? parseInt(this.edit.value, 10) : 0;
      for (let i = this.donationTabs.length - 1; i >= 0; i--) {
        if (value >= this.donationTabs[i].value * 4) {
          const remnant = value % this.donationTabs[i].value;
          value += this.donationTabs[i].value - remnant;
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
    ...mapActions({
      setTarget: 'project/setTarget',
    }),
  },
  computed: {
    ...mapGetters({
      amount: 'project/getAmount',
      target: 'project/getTarget',
      donationTabs: 'project/getDonationTabs',
    }),
  },
  mounted() {
    this.edit = this.$el.querySelector('.single-target__input');
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

$height: 2.20rem

.single-target
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
  .single-target
    &__input
      width: 78%

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .single-target
    &__input
      width: 74%

@media (min-width: $Media-SizeL)
  .single-target
    &__input
      width: 72%
</style>
