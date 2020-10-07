<template>
  <div class="project-description">
    <div class="project-description__container" v-html="getProject.html" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Description',
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

.project-description
  background-color: $Background
  &__container
    max-width: $Site-MaxWidth
    padding: 0.8rem $Site-PuddingHorizontal-MAX
    margin: 0 auto

@media (max-width: $Media-SizeS)
  .project-description
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-S)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .project-description
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-M)

@media (min-width: $Media-SizeL) and (max-width: $Media-MaxSizeL)
  .project-description
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-L)
</style>
