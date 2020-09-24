<template>
  <div class="logo">
    <LogoDobro />
    <TextDobro />
  </div>
</template>

<script>
import LogoDobro from '@/components/svg/LogoDobro.vue';
import TextDobro from '@/components/svg/TextDobro.vue';

export default {
  name: 'Logo',
  components: {
    LogoDobro,
    TextDobro,
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.logo
  background-color: $ColorMainBlue
  +flexLC
</style>
