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
  height: 0.30rem
  background-color: $LineColor
</style>
