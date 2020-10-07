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
import Line from '@/components/objects/Line.vue';
import Menu from '@/components/footer/Menu.vue';

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
  &__space, &__fixed, &__container
    height: 3rem
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
</style>
