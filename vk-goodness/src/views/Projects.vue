<template>
  <div class="projects">
    <Caption />
    <SelectCategory />
    <SelectCity />
    <Line />
    <div v-if="isLoadingProjectList" class="projects__loading">
      <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <div v-else-if="isError" class="projects__error">
      <h2>Что-то пошло не так</h2>
    </div>
    <div v-else class="projects__content">
      <Card v-for="item of getProjectList" :key="item.id" :vProject="item" />
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
      fetchProjectList: 'projects/fetchProjectList',
    }),
  },
  computed: {
    ...mapGetters({
      getCurrentCategory: 'projects/getCurrentCategory',
      getCurrentCity: 'projects/getCurrentCity',
      getPage: 'projects/getPage',
      getPages: 'projects/getPages',
      getProjectList: 'projects/getProjectList',
      getProjectListError: 'projects/getProjectListError',
      isLoadingProjectList: 'projects/isLoadingProjectList',
    }),
    isError() {
      return this.getProjectListError !== null;
    },
  },
  mounted() {
    this.fetchProjectList({
      category: this.getCurrentCategory.name,
      city: this.getCurrentCity.name,
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
