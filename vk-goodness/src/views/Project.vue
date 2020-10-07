<template>
  <div class="project">
    <div v-if="isLoadingProject" class="project__loading">
      <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <div v-else-if="isError" class="project__error">
      <h2>Что-то пошло не так</h2>
    </div>
    <div v-else class="project__content">
      <Header />
      <Line />
      <Description />
      <Donation />
      <Dobrothon />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Description from '@/components/project/Description.vue';
import Dobrothon from '@/components/project/Dobrothon.vue';
import Donation from '@/components/project/Donation.vue';
import Header from '@/components/project/Header.vue';
import Line from '@/components/objects/Line.vue';

export default {
  name: 'Project',
  components: {
    Description,
    Dobrothon,
    Donation,
    Header,
    Line,
  },
  methods: {
    init() {
      this.fetchProject(this.$route.params.name);
    },
    ...mapActions({
      fetchProject: 'project/fetchProject',
    }),
  },
  computed: {
    ...mapGetters({
      getProject: 'project/getProject',
      getProjectError: 'project/getProjectError',
      isLoadingProject: 'project/isLoadingProject',
    }),
  },
  watch: {
    '$route.params.name': 'init',
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped lang="sass">
@import '../styles/var'
@import '../styles/mixin'

.project
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
