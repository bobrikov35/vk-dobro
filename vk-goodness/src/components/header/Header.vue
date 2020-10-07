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
    padding: $Site-PuddingVertical $Site-PuddingHorizontal-MAX
    margin: 0 auto

@media (max-width: $Media-SizeS)
  .header
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-S)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .header
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-M)

@media (min-width: $Media-MinSizeL) and (max-width: $Media-MaxSizeL)
  .header
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-L)
</style>
