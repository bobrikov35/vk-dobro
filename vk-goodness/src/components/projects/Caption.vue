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
    padding: $Site-PuddingVertical $Site-PuddingHorizontal-MAX
    margin: 0 auto

@media (max-width: $Media-SizeS)
  .projects-caption
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-S)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .projects-caption
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-M)

@media (min-width: $Media-MinSizeL) and (max-width: $Media-MaxSizeL)
  .projects-caption
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-L)
</style>
