<template>
  <div class="projects-card" :class="urgent ? 'project-card_urgent' : ''">
    <div class="projects-card__container">
      <div class="projects-card__cover" :style="`background-image: url(${image})`">
        <div class="projects-card__info">
          <h3 class="projects-card__city">{{ city }}</h3>
          <h2 class="projects-card__title">{{ title }}</h2>
        </div>
        <p v-if="urgent" class="projects-card__urgent">СРОЧНО</p>
        <div class="projects-card__control">
          <Button :vClick="toProject" vClass="projects-card__button" vType="type2" vTitle="ПОМОЧЬ"/>
          <Progressbar vClass="projects-card__progressbar" :vValue="sum" :vMax="target" />
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
  data() {
    const {
      city,
      image,
      sum,
      target,
      title,
      urgent,
    } = this.vProject;
    return {
      city,
      image,
      sum,
      target,
      title,
      urgent,
    };
  },
  methods: {
    toProject() {
      const path = `/single/${this.vProject.path}`;
      if (this.$route.path !== path) this.$router.push(path);
    },
    resize() {
      const cover = this.$el.querySelector('.projects-card__cover');
      cover.style.height = `${cover.clientWidth * 0.64}px`;
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
  &__container
    max-width: $Site-MaxWidth
    color: $TextContrast
    font-weight: 700
    +flexJcC
    padding: 0.85rem 0
    margin: 0 auto
  &__cover
    overflow: hidden
    +shadowText(0, 0, 0.15rem)
    text-align: center
    background-size: cover
    background-repeat: no-repeat
    background-position-x: 50%
    background-position-y: 50%
    border-radius: 0.30rem
    position: relative
    +shadow(0, 0, 0.25rem)
  &__info
    padding: 0.60rem 0.45rem
  &__city
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
    width: 64%
    text-align: left
  &__title
    overflow: hidden
    width: 100%
    text-align: center
    padding: 0.60rem
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
    +posTopRight(0, 0)
    padding: 0.60rem 0 0.60rem 0.10rem
  &__control
    width: 100%
    padding: 0.60rem
    position: absolute
    bottom: 0
  &__button
    letter-spacing: 0.15rem
    margin: 0.40rem auto
  &__button, &__progressbar
    width: 84%

$BaseTitleHeight: 31px

@media (max-width: $Media-SizeS)
  .projects-card
    &__cover
      width: 92%
    &__city
      width: 62%
    &__urgent
      width: 32%

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .projects-card
    &__cover
      width: 84%

@media (min-width: $Media-SizeL)
  .projects-card
    &__cover
      width: 76%

@media (max-width: $Media-SizeS)
  .projects-card__title
    height: 62px

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .projects-card__title
    height: 102px

@media (min-width: $Media-SizeL)
  .projects-card__title
    height: 112px
</style>
