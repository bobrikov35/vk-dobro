<template>
  <div class="about">
    <AboutService />
    <Line />
    <HowAppeared />
    <HowToHelp />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AboutService from '@/components/about/AboutService.vue';
import HowAppeared from '@/components/about/HowAppeared.vue';
import HowToHelp from '@/components/about/HowToHelp.vue';
import Line from '@/components/objects/Line.vue';

export default {
  name: 'About',
  components: {
    AboutService,
    HowAppeared,
    HowToHelp,
    Line,
  },
  methods: {
    ...mapActions({
      setPageTitle: 'setPageTitle',
    }),
  },
  computed: {
    ...mapGetters({
      getPageTitle: 'getPageTitle',
    }),
  },
  mounted() {
    this.setPageTitle('О нас');
  },
};
</script>

<style scoped lang="sass">
@import '../styles/var'
@import '../styles/mixin'

.about
  background-color: $Background
  +flexColumnGrow(1)
</style>
