<template>
  <div class="projects">
    <div class="projects__caption">
      <h2 class="projects__title">Я хочу помочь</h2>
    </div>
    <SelectCategory />
    <SelectCity />
    <Line />
    <div v-if="isLoading" class="projects__loading">
      <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <div v-else-if="!isLoading && !isResult" class="projects__error">
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
      fetchProjects: 'project/projects/fetchProjects',
    }),
  },
  computed: {
    ...mapGetters({
      currentCategory: 'project/getCurrentCategory',
      currentCity: 'cities/getCurrentCity',
      isLoading: 'project/projects/isLoading',
      isResult: 'project/projects/isResult',
      projects: 'project/projects/getProjects',
      page: 'project/projects/getPage',
      pages: 'project/projects/getPages',
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
  &__title, &__loading, &__error
    max-width: $Site-MaxWidth
    margin: 0 auto
  &__title
    padding: 0.40rem 0.30rem
  &__loading, &__error
    +flexCC()
  &__loading, &__error, &__content
    flex-grow: 1
  &__loading
    font-size: 3rem
</style>
