<template>
  <div class="progressbar" :class="vClass">
    <div class="progressbar__caption">
      <p>
        <span class="progressbar__value">{{ sValue }}</span>
        <span class="progressbar__title" v-show="!trimmed"> собрано</span>
      </p>
      <p v-show="trimmed">из</p>
      <p>
        <span class="progressbar__title" v-show="!trimmed">цель </span>
        <span class="progressbar__max">{{ sMax }}</span>
      </p>
    </div>
    <div class="progressbar__box">
      <div class="progressbar__active">
        <div class="progressbar__active_background"></div>
      </div>
    </div>
  </div>
</template>

<script>
import format from '@/libs/format';

export default {
  name: 'Progressbar',
  props: {
    vMax: {
      type: Number,
      required: true,
    },
    vValue: {
      type: Number,
      required: true,
    },
    vClass: String,
  },
  data() {
    return {
      trimmed: false,
    };
  },
  methods: {
    resize() {
      const bar = this.$el.querySelector('.progressbar__box');
      this.trimmed = bar.clientWidth < 320;
      this.$el.querySelector('.progressbar__active').style.width = `${bar.clientWidth * (this.vValue / this.vMax)}px`;
      this.$el.querySelector('.progressbar__active_background').style.width = `${bar.clientWidth}px`;
    },
  },
  computed: {
    sValue() {
      return format.numberFinance(this.vValue);
    },
    sMax() {
      return format.numberFinance(this.vMax);
    },
  },
  created() {
    window.addEventListener('resize', this.resize);
  },
  mounted() {
    this.resize();
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.progressbar
  margin: 0 auto
  &__caption
    color: $ColorWhite
    +RobotoSlabSerif
    +flexSbC
  &__title
    font-size: 0.8em
  &__value, &__max
    font-size: 1.2em
    font-weight: 700
    padding: 0 6px
  &__box
    overflow: hidden
    background-color: $ProgressbarColor
  &__active
    overflow: hidden
    height: inherit
    &_background
      height: inherit
      background: $ProgressbarActiveBackground

@media (max-width: $Media-SizeS)
  .progressbar
    &__caption
     margin-bottom: 0.375rem
    &__box
      height: 0.5rem
      border-radius: 0.25rem
      +shadow(0, 0, 0.125rem)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .progressbar
    &__caption
      margin-bottom: 0.5rem
    &__box
      height: 0.625rem
      border-radius: 0.3125rem
      +shadow(0, 0, 0.19rem)

@media (min-width: $Media-SizeL)
  .progressbar
    &__caption
      margin-bottom: 0.625rem
    &__box
      height: 0.75rem
      border-radius: 0.375rem
      +shadow(0, 0, 0.25rem)
</style>
