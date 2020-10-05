<template>
  <div class="project-description">
    <div class="project-description__container" v-html="project.html" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Description',
  computed: {
    ...mapGetters({
      project: 'project/getProject',
    }),
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'

.project-description
  background-color: $Background
  &__container
    max-width: $Site-MaxWidth
    margin: 0 auto

@media (max-width: $Media-SizeS)
  .project-description
    &__container
      padding: 1% $Site-PuddingHorizontal-S

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .project-description
    &__container
      padding: 1.5% $Site-PuddingHorizontal-M

@media (min-width: $Media-SizeL)
  .project-description
    &__container
      padding: 2% $Site-PuddingHorizontal-L
</style>
