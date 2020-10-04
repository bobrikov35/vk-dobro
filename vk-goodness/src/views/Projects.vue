<template>
  <div class="projects">
    <Caption />
    <SelectCategory />
    <SelectCity />
    <Line />
    <div v-if="isLoading" class="projects__loading">
      <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <div v-else-if="!isLoading && !isResult" class="projects__error">
      <h1>Что-то пошло не так</h1>
    </div>
    <div v-else class="projects__content">
      <Card v-for="project of projects" :key="project.id" :vProject="project" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Caption from '@/components/projects/Caption.vue';
import Card from '@/components/projects/Card.vue';
import Line from '@/components/objects/Line.vue';
import SelectCategory from '@/components/projects/SelectCategory.vue';
import SelectCity from '@/components/projects/SelectCity.vue';

export default {
  name: 'Projects',
  components: {
    Caption,
    Card,
    Line,
    SelectCategory,
    SelectCity,
  },
  methods: {
    ...mapActions({
      fetchProjects: 'projects/fetchProjects',
    }),
  },
  computed: {
    ...mapGetters({
      currentCategory: 'projects/getCurrentCategory',
      currentCity: 'projects/getCurrentCity',
      // projects
      page: 'projects/getPage',
      pages: 'projects/getPages',
      isLoading: 'projects/isLoadingProjects',
      isResult: 'projects/isResultProjects',
      projects: 'projects/getProjects',
    }),
  },
  mounted() {
    this.fetchProjects({
      category: this.currentCategory.name,
      city: this.currentCity.name,
      page: 1,
    });
  },
};
</script>

<style scoped lang="sass">
@import '../styles/var'
@import '../styles/mixin'

.projects
  background-color: $Background
  +flexColumn
  flex-grow: 1
  &__loading, &__error
    max-width: $Site-MaxWidth
    margin: 0 auto
  &__loading, &__error
    +flexCC()
  &__loading, &__error, &__content
    flex-grow: 1
  &__loading
    font-size: $Loading-Size
</style>
