<template>
  <div class="progressbar" :class="vClass">
    <div class="progressbar__caption">
      <h2 class="progressbar__title">
        {{ formatValue }}<span class="progressbar__value" v-show="!trimmed">собрано</span>
      </h2>
      <p v-show="trimmed">из</p>
      <h2 v-if="isFinished" class="progressbar__title">100%</h2>
      <h2 v-else class="progressbar__title">
        <span class="progressbar__max" v-show="!trimmed">цель</span>{{ formatMax }}
      </h2>
    </div>
    <div v-if="vBarVisibility" class="progressbar__box" :class="isFinished && 'progressbar__box_finish'">
      <div class="progressbar__active" :class="isFinished && 'progressbar__active_finish'">
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
    vBarVisibility: {
      type: Boolean,
      default: true,
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
      if (!this.vBarVisibility) return;
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
    isFinished() {
      return this.vValue >= this.vMax;
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
  &__value, &__max
    font-size: 0.60em
  &__value
    margin-left: 0.25rem
  &__max
    margin-right: 0.25rem
  &__title
    padding: 0 0.60rem
  &__box
    overflow: hidden
    height: 0.50rem
    background-color: $ProgressbarColor
    border-radius: 0.25rem
    +shadow(0, 0, 0.15rem)
    &_finish
      background: $ColorMainYellow
  &__active
    overflow: hidden
    height: inherit
    &_finish
      visibility: hidden
    &_background
      height: inherit
      background: $ProgressbarActiveBackground
</style>
