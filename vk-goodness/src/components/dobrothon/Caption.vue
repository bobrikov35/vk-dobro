<template>
  <div class="dobrothon-caption">
    <div class="dobrothon-caption__container">
      <h1 class="dobrothon-caption__title">{{ project.title }}</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Caption',
  computed: {
    ...mapGetters({
      dobrothon: 'dobrothon/getDobrothon',
    }),
    project() {
      return this.dobrothon.project;
    },
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.dobrothon-caption
  background-color: $BackgroundSecondary
  border-bottom: 1px solid $Border
  &__container
    max-width: $Site-MaxWidth
    text-align: center
    padding: $Site-PuddingVertical $Site-PuddingHorizontal-MAX
    margin: 0 auto

@media (max-width: $Media-SizeS)
  .dobrothon-caption
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-S)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .dobrothon-caption
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-M)

@media (min-width: $Media-SizeL) and (max-width: $Media-MaxSizeL)
  .dobrothon-caption
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-L)
</style>
