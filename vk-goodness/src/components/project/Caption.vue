<template>
  <div class="project-caption">
    <div class="project-caption__container">
      <h1 class="project-caption__title">{{ getProject.title }}</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Caption',
  computed: {
    ...mapGetters({
      getProject: 'project/getProject',
    }),
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.project-caption
  background-color: $BackgroundSecondary
  border-bottom: 1px solid $Border
  &__container
    max-width: $Site-MaxWidth
    text-align: center
    padding: $Site-PuddingVertical $Site-PuddingHorizontal-MAX
    margin: 0 auto

@media (max-width: $Media-SizeS)
  .project-caption
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-S)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .project-caption
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-M)

@media (min-width: $Media-SizeL) and (max-width: $Media-MaxSizeL)
  .project-caption
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-L)
</style>
