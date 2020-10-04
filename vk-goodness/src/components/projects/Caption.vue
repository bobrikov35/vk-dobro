<template>
  <div class="projects-caption">
    <div class="projects-caption__container">
      <h2 class="projects-caption__title">Я хочу помочь</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Caption',
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.projects-caption
  background-color: $Background
  border-bottom: 1px solid $Border
  &__container
    max-width: $Site-MaxWidth
    margin: 0 auto
    +paddingTopBottomSingle($Site-PuddingVertical)

@media (max-width: $Media-SizeS)
  .projects-caption
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-S)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .projects-caption
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-M)

@media (min-width: $Media-SizeL)
  .projects-caption
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-L)
</style>
