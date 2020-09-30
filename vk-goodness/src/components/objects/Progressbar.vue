<template>
  <div class="progressbar" :class="vClass">
    <div class="progressbar__caption">
      <h2 class="progressbar__value">
        {{ formatValue }}
        <span class="progressbar__title" v-show="!trimmed"> собрано</span>
      </h2>
      <p v-show="trimmed">из</p>
      <h2 class="progressbar__max">
        <span class="progressbar__title" v-show="!trimmed">цель </span>
        {{ formatMax }}
      </h2>
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
      const width = bar.clientWidth;
      const height = bar.clientHeight;
      this.trimmed = (height < 9 && width < 300) || (height < 11 && width < 340);
      this.$el.querySelector('.progressbar__active').style.width = `${width * (this.vValue / this.vMax)}px`;
      this.$el.querySelector('.progressbar__active_background').style.width = `${width}px`;
    },
  },
  computed: {
    formatValue() {
      return format.numberFinance(this.vValue);
    },
    formatMax() {
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
    +RobotoSlabSerif
    color: $ColorWhite
    +flexSbC
    margin-bottom: 0.20rem
  &__title
    font-size: 0.60em
  &__value, &__max
    padding: 0 0.60rem
  &__box
    overflow: hidden
    height: 0.50rem
    background-color: $ProgressbarColor
    border-radius: 0.25rem
    +shadow(0, 0, 0.15rem)
  &__active
    overflow: hidden
    height: inherit
    &_background
      height: inherit
      background: $ProgressbarActiveBackground
</style>
