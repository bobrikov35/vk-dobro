<template>
  <div class="single-cover">
    <div class="single-cover__container" :style="`background-image: url(${image})`">
      <div class="single-cover__info">
        <h3 class="single-cover__text">{{ city }}</h3>
        <h3 class="single-cover__text">{{ date }}</h3>
      </div>
      <p v-if="urgent" class="single-cover__urgent">СРОЧНО</p>
      <div class="single-cover__box">
        <Progressbar vClass="single-cover__progressbar" :vValue="sum" :vMax="target" />
      </div>
    </div>
  </div>
</template>

<script>
import Progressbar from '@/components/objects/Progressbar.vue';

export default {
  name: 'Cover',
  props: {
    vProject: {
      type: Object,
      required: true,
    },
  },
  components: {
    Progressbar,
  },
  data() {
    const {
      city,
      date,
      image,
      urgent,
    } = this.vProject;
    return {
      city,
      date,
      image,
      sum: parseInt(this.vProject.sum, 10),
      target: parseInt(this.vProject.target, 10),
      urgent,
    };
  },
  methods: {
    resize() {
      const content = this.$el.querySelector('.single-cover__container');
      content.style.height = `${content.clientWidth * 0.60}px`;
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

.single-cover
  width: 100%
  background-color: $BackgroundSecondary
  +flexJcC
  padding: 0.60rem 0
  &__container
    overflow: hidden
    width: 88%
    color: $TextContrast
    font-weight: 700
    +shadowText(0, 0, 0.15rem)
    background-size: cover
    background-repeat: no-repeat
    background-position-x: 50%
    background-position-y: 50%
    border-radius: 0.30rem
    +shadow(0, 0, 0.25rem)
    position: relative
  &__info
    padding: 0.60rem 0.45rem
  &__text
    width: 64%
    text-align: left
  &__urgent
    +RobotoSlabSerif
    width: 30%
    color: $Text
    letter-spacing: 0.15rem
    text-shadow: none
    text-align: center
    background-color: $UrgentColor
    +borderBottomLeft(1px, $Border)
    +radiusRightLeft(0.30rem)
    position: absolute
    +posTopRightSingle(0)
    padding: 0.60rem 0 0.60rem 0.10rem
  &__box
    width: 100%
    padding: 0.60rem
    position: absolute
    bottom: 0
  &__progressbar
    width: 88%
    padding-bottom: 0.50rem

@media (max-width: $Media-SizeS)
  .single-cover
    &__text
      width: 62%
    &__urgent
      width: 32%
</style>
