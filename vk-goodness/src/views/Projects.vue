<template>
  <div class="projects">
    <h2 class="projects__title">Я хочу помочь</h2>
    <SelectCategory />
    <SelectCity />
    <Line />
    <div v-if="!isResponse" class="projects__loading">
      <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <div v-else-if="isResponse && !isResult" class="projects__error">
      <h2>Что-то пошло не так</h2>
    </div>
    <div v-else class="projects__content">
      <Card v-for="project of projects" :key="project.id" :vProject="project" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SelectCategory from '@/components/projects/SelectCategory.vue';
import SelectCity from '@/components/projects/SelectCity.vue';
import Line from '@/components/objects/Line.vue';
import Card from '@/components/projects/Card.vue';

export default {
  name: 'Projects',
  components: {
    SelectCategory,
    SelectCity,
    Line,
    Card,
  },
  methods: {
    ...mapActions({
      fetchProjects: 'projects/fetchProjects',
    }),
  },
  computed: {
    ...mapGetters({
      categories: 'staticDataLoader/categories',
      cities: 'staticDataLoader/cities',
      isResponse: 'projects/isResponse',
      isResult: 'projects/isResult',
      categoryIndex: 'projects/getCategoryIndex',
      cityIndex: 'projects/getCityIndex',
      projects: 'projects/getProjects',
      page: 'projects/getProjectsPage',
      pages: 'projects/getProjectsPages',
    }),
  },
  mounted() {
    const category = this.categories[this.categoryIndex].name;
    const city = this.cities[this.cityIndex].name;
    const page = 1;
    this.fetchProjects({ category, city, page });
  },
};
</script>

<style scoped lang="sass">
@import '../styles/var'
@import '../styles/mixin'

.projects
  +flexColumn
  flex-grow: 1
  background-color: $Background
  &__title, &__loading, &__error
    max-width: $Site-MaxWidth
    margin: 0 auto
  &__loading, &__error, &__content
    flex-grow: 1
  &__loading, &__error
    +flexCC()

@media (max-width: $Media-SizeS)
  .projects
    &__title
      padding: 0.5rem 0.75rem
    &__loading
      font-size: 3rem

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .projects
    &__title
      padding: 0.75rem 1.125rem
    &__loading
      font-size: 3.5rem

@media (min-width: $Media-SizeL)
  .projects
    &__title
      padding: 1rem 1.5rem
    &__loading
      font-size: 4rem
</style>
