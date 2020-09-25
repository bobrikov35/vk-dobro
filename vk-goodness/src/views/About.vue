<template>
  <section class="about">
    <AboutService />
    <Line />
    <HowAppeared />
    <HowToHelp />
  </section>
</template>

<script>
import AboutService from '@/components/about/AboutService.vue';
import Line from '@/components/objects/Line.vue';
import HowAppeared from '@/components/about/HowAppeared.vue';
import HowToHelp from '@/components/about/HowToHelp.vue';

export default {
  name: 'About',
  components: {
    AboutService,
    Line,
    HowAppeared,
    HowToHelp,
  },
};
</script>

<style scoped lang="sass">
@import '../styles/var'

.about
  min-height: 100%
  background-color: $ColorWhite
</style>
