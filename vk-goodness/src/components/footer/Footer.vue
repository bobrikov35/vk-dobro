<template>
  <footer class="footer">
    <div class="footer__fixed">
      <nav class="footer__container">
        <Menu />
      </nav>
    </div>
  </footer>
</template>

<script>
import Menu from '@/components/footer/Menu.vue';

export default {
  name: 'Footer',
  components: {
    Menu,
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'

.footer
  background-color: $ColorMainBlue
  &__fixid
    background-color: $ColorMainBlue
    position: fixed
    bottom: 0
  &__container
    min-width: $Site-MinWidth
    max-width: $Site-MaxWidth
    margin: 0 auto

@media (max-width: $Media-SizeS)
  .footer__container
    padding: 0.5rem

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .footer__container
    padding: 0.75rem

@media (min-width: $Media-SizeL)
  .footer__container
    padding: 1rem
</style>
