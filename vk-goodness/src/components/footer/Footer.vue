<template>
  <footer class="footer">
    <Line />
    <div class="footer__space"></div>
    <div class="footer__fixed">
      <nav class="footer__container">
        <Menu />
      </nav>
    </div>
  </footer>
</template>

<script>
import Menu from '@/components/footer/Menu.vue';
import Line from '@/components/objects/Line.vue';

export default {
  name: 'Footer',
  components: {
    Line,
    Menu,
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.footer
  background-color: $ColorMainBlue
  &__fixed
    width: 100%
    background-color: $ColorMainBlue
    position: fixed
    bottom: 0
  &__container
    min-width: $Site-MinWidth
    max-width: $Site-MaxWidth
    +flexCC
    margin: 0 auto

@media (max-width: $Media-SizeS)
  .footer
    &__space, &__fixed, &__container
      height: 3rem

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .footer
    height: 4.5rem
    &__space, &__fixed, &__container
      height: 4.5rem

@media (min-width: $Media-SizeL)
  .footer
    height: 6rem
    &__space, &__fixed, &__container
      height: 6rem
</style>
