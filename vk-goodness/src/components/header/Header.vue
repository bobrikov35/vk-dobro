<template>
  <header class="header">
    <div class="header__container">
      <Logo />
    </div>
    <Line />
  </header>
</template>

<script>
import Line from '@/components/objects/Line.vue';
import Logo from '@/components/header/Logo.vue';

export default {
  name: 'Header',
  components: {
    Line,
    Logo,
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.header
  background-color: $ColorMainBlue
  &__container
    max-width: $Site-MaxWidth
    +flexSbC
    padding: 0.30rem
    margin: 0 auto
</style>
