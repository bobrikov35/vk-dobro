<template>
  <header class="header">
    <div class="header__container">
      <Logo />
    </div>
    <Line />
  </header>
</template>

<script>
import Logo from '@/components/header/Logo.vue';
import Line from '@/components/objects/Line.vue';

export default {
  name: 'Header',
  components: {
    Logo,
    Line,
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
    margin: 0 auto

@media (max-width: $Media-SizeS)
  .header__container
    padding: 0.25rem

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .header__container
    padding: 0.375rem

@media (min-width: $Media-SizeL)
  .header__container
    padding: 0.5rem
</style>
