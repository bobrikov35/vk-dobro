<template>
  <router-link class="logo" to="/">
    <LogoDobro />
    <TextDobro />
  </router-link>
</template>

<script>
import LogoDobro from '@/components/header/LogoDobro.vue';
import TextDobro from '@/components/header/TextDobro.vue';

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
  +flexAiC
</style>
