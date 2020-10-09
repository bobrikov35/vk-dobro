<template>
  <div class="dobrothon-description">
    <div class="dobrothon-description__container" v-html="project.html" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Description',
  computed: {
    ...mapGetters({
      getDobrothon: 'dobrothon/getDobrothon',
    }),
    project() {
      return this.getDobrothon.project;
    },
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.dobrothon-description
  background-color: $Background
  &__container
    max-width: $Site-MaxWidth
    padding: 0.8rem $Site-PuddingHorizontal-MAX
    margin: 0 auto

@media (max-width: $Media-SizeS)
  .dobrothon-description
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-S)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .dobrothon-description
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-M)

@media (min-width: $Media-SizeL) and (max-width: $Media-MaxSizeL)
  .dobrothon-description
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-L)
</style>
