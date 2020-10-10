<template>
  <div class="dobrothon">
    <div v-if="isLoadingDobrothon" class="dobrothon__loading">
      <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <div v-else-if="isError" class="dobrothon__error">
      <h2>Что-то пошло не так</h2>
    </div>
    <div v-else class="dobrothon__content">
      <Header />
      <Line />
      <Description />
      <Donation />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Description from '@/components/dobrothon/Description.vue';
import Donation from '@/components/dobrothon/Donation.vue';
import Header from '@/components/dobrothon/Header.vue';
import Line from '@/components/objects/Line.vue';

export default {
  name: 'Dobrothon',
  components: {
    Description,
    Donation,
    Header,
    Line,
  },
  methods: {
    init() {
      if (this.$route.params.id) {
        this.fetchDobrothon(this.$route.params.id);
      }
    },
    ...mapActions({
      fetchDobrothon: 'dobrothon/fetchDobrothon',
      setPageTitle: 'setPageTitle',
    }),
  },
  computed: {
    ...mapGetters({
      getDobrothon: 'dobrothon/getDobrothon',
      getDobrothonError: 'dobrothon/getDobrothonError',
      getPageTitle: 'getPageTitle',
      isLoadingDobrothon: 'dobrothon/isLoadingDobrothon',
    }),
    isError() {
      return this.getDobrothonError !== null;
    },
  },
  watch: {
    '$route.params.id': 'init',
  },
  mounted() {
    this.setPageTitle('Доброфон');
    this.init();
  },
};
</script>

<style scoped lang="sass">
@import '../styles/var'
@import '../styles/mixin'

.dobrothon
  background-color: $Background
  +flexColumnGrow(1)
  &__loading, &__error
    max-width: $Site-MaxWidth
    +flexCC()
    margin: 0 auto
  &__loading, &__error, &__content
    flex-grow: 1
  &__loading
    font-size: $Loading-Size
</style>
