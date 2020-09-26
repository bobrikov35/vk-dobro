<template>
  <div class="projects-card" :class="vProject['urgent'] ? 'projects-card_urgent' : ''">
    <div class="projects-card__container">
      <div class="projects-card__cover" :style="`background-image: url(${vProject.image})`">
        <div class="projects-card__info">
          <p class="projects-card__city">{{ vProject.city }}</p>
          <h2 class="projects-card__title">{{ vProject.title }}</h2>
        </div>
        <p v-if="vProject['urgent']" class="projects-card__urgent">СРОЧНО</p>
        <div class="projects-card__control">
          <Button :vClick="toProject" vClass="projects-card__button" vType="type2" vTitle="ПОМОЧЬ"/>
          <Progressbar vClass="projects-card__progressbar" :vValue="vProject.sum" :vMax="vProject.target" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/objects/Button.vue';
import Progressbar from '@/components/objects/Progressbar.vue';

export default {
  name: 'Card',
  components: {
    Button,
    Progressbar,
  },
  props: {
    vProject: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toProject() {
      const path = `/single/${this.vProject.path}`;
      if (this.$route.path !== path) this.$router.push(path);
    },
    resize() {
      const cover = this.$el.querySelector('.projects-card__cover');
      cover.style.height = `${cover.clientWidth * 0.67}px`;
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

.projects-card
  border-bottom: 1px solid $Border
  &_urgent
    background-color: $UrgentColor
  &__container, &__cover
    margin: 0 auto
  &__container
    max-width: $Site-MaxWidth
    color: $TextContrast
    font-weight: 700
  &__cover
    overflow: hidden
    text-align: center
    background-size: cover
    background-repeat: no-repeat
    background-position-x: 50%
    background-position-y: 50%
    position: relative
  &__city
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
    width: 64%
    height: 1.25em
    text-align: left
  &__title
    overflow: hidden
    width: 100%
    text-align: center
  &__urgent
    width: 30%
    color: $Text
    text-shadow: none
    text-align: center
    background-color: $UrgentColor
    +borderRightBottomLeft(1px, $Border)
    position: absolute
    +posTopRight(0, 0)
    padding-left: 0.125rem
  &__control
    width: 100%
    position: absolute
  &__button
    margin: 0 auto
  &__button, &__progressbar
    width: 88%

@media (max-width: $Media-SizeS)
  .projects-card
    &__container
      +shadowText(0, 0, 0.125rem)
      +paddingTopBottom(0.75rem, 0.75rem)
    &__cover
      width: 88%
      border-radius: 0.25rem
      +shadow(0, 0, 0.19rem)
    &__info
      padding: 0.5rem 0.375rem
    &__city
      width: 62%
    &__urgent
      width: 32%
      letter-spacing: 0.125rem
      +radiusRightLeft(0.25rem)
      +paddingTopBottom(0.5rem, 0.5rem)
    &__title
      height: 2.6em
      +paddingRightLeft(0.5rem, 0.5rem)
      margin-top: 0.75rem
    &__control, &__button, &__progressbar
      bottom: 0.5rem
    &__button
      letter-spacing: 0.125rem
      margin-bottom: 0.375rem

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .projects-card
    &__container
      +shadowText(0, 0, 0.19rem)
      +paddingTopBottom(1.125rem, 1.125rem)
    &__cover
      width: 80%
      border-radius: 0.375rem
      +shadow(0, 0, 0.315rem)
    &__info
      padding: 0.75rem 0.565rem
    &__urgent
      letter-spacing: 0.125rem
      +radiusRightLeft(0.375rem)
      +paddingTopBottom(0.75rem, 0.75rem)
    &__title
      height: 2.6em
      +paddingRightLeft(0.75rem, 0.75rem)
      margin-top: 1.5rem
    &__control, &__button, &__progressbar
      bottom: 0.75rem
    &__button
      margin-bottom: 0.5rem
      letter-spacing: 0.19rem

@media (min-width: $Media-SizeL)
  .projects-card
    &__container
      +shadowText(0, 0, 0.25rem)
      +paddingTopBottom(1.5rem, 1.5rem)
    &__cover
      width: 72%
      border-radius: 0.5rem
      +shadow(0, 0, 0.44rem)
    &__info
      padding: 1rem 0.75rem
    &__urgent
      letter-spacing: 0.25rem
      +radiusRightLeft(0.5rem)
      +paddingTopBottom(1rem, 1rem)
    &__title
      height: 3.9em
      +paddingRightLeft(1rem, 1rem)
      margin-top: 2.25rem
    &__control, &__button, &__progressbar
      bottom: 1rem
    &__button
      margin-bottom: 0.625rem
      letter-spacing: 0.25rem
</style>
