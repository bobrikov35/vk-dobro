<template>
  <div class="line" :style="vStyle" />
</template>

<script>
export default {
  name: 'Line',
  props: {
    vStyle: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'

.line
  background-color: $LineColor

@media (max-width: $Media-SizeS)
  .line
    height: 0.25rem

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .line
    height: 0.375rem

@media (min-width: $Media-SizeL)
  .line
    height: 0.5rem
</style>
