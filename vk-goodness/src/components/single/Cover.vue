<template>
  <div class="single-cover" id="">
    <div class="single-cover__content" :style="`background-image: url(${vProject.image})`">
      <div class="single-cover__info">
        <p class="single-cover__text">{{ vProject.city }}</p>
        <p class="single-cover__text">{{ vProject.date }}</p>
      </div>
      <p v-if="vProject['urgent']" class="single-cover__urgent">СРОЧНО</p>
      <div class="single-cover__box">
        <Progressbar vClass="single-cover__progressbar"
                     :vValue="parseInt(vProject.sum)" :vMax="parseInt(vProject.target)" />
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
  methods: {
    resize() {
      const content = this.$el.querySelector('.single-cover__content');
      content.style.height = `${content.clientWidth * 0.6}px`;
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
  color: $TextContrast
  font-weight: 700
  margin: 0 auto
  &__content
    width: 92%
    overflow: hidden
    max-width: $Site-MaxWidth
    background-size: cover
    background-repeat: no-repeat
    background-position-x: 50%
    background-position-y: 50%
    position: relative
    margin: 0 auto
  &__text
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
    width: 64%
    height: 1.25em
    text-align: left
  &__urgent
    width: 30%
    color: $Text
    text-shadow: none
    text-align: center
    background-color: $UrgentColor
    +borderBottomLeft(1px, $Border)
    position: absolute
    +posTopRight(0, 0)
    padding-left: 0.125rem
  &__box
    width: 100%
    position: absolute
  &__progressbar
    width: 88%

@media (max-width: $Media-SizeS)
  .single-cover
    +shadowText(0, 0, 0.125rem)
    &__content
      border-radius: 0.25rem
      +shadow(0, 0, 0.19rem)
    &__info
      padding: 0.5rem 0.375rem
    &__text
      width: 62%
    &__urgent
      width: 32%
      letter-spacing: 0.125rem
      +radiusRightLeft(0.25rem)
      +paddingTopBottom(0.5rem, 0.5rem)
    &__box
      bottom: 0.5rem

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .single-cover
    +shadowText(0, 0, 0.19rem)
    &__content
      border-radius: 0.375rem
      +shadow(0, 0, 0.315rem)
    &__info
      padding: 0.75rem 0.565rem
    &__urgent
      letter-spacing: 0.125rem
      +radiusRightLeft(0.375rem)
      +paddingTopBottom(0.75rem, 0.75rem)
    &__box
      bottom: 0.75rem

@media (min-width: $Media-SizeL)
  .single-cover
    +shadowText(0, 0, 0.25rem)
    &__content
      border-radius: 0.5rem
      +shadow(0, 0, 0.44rem)
    &__info
      padding: 1rem 0.75rem
    &__urgent
      letter-spacing: 0.25rem
      +radiusRightLeft(0.5rem)
      +paddingTopBottom(1rem, 1rem)
    &__box
      bottom: 1rem
</style>
