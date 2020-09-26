<template>
  <div class="single-description">
    <div class="single-description__container" v-html="vHtml" />
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: {
    vHtml: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.single-description
  background-color: $Background
  &__container
    max-width: $Site-MaxWidth
    margin: 0 auto

@media (max-width: $Media-SizeS)
  .single-description
    padding: 2%

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .single-description
    padding: 4%

@media (min-width: $Media-SizeL)
  .single-description
    padding: 6%
</style>
