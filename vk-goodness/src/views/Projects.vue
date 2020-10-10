<template>
  <div class="projects">
    <Caption />
    <SelectCategory />
    <SelectCity />
    <Line />
    <div v-if="isError" class="projects__error">
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
      setPageTitle: 'setPageTitle',
    }),
  },
  computed: {
    ...mapGetters({
      getPageTitle: 'getPageTitle',
      getProjectList: 'projects/getProjectList',
      getProjectListError: 'projects/getProjectListError',
    }),
    isError() {
      return this.getProjectListError !== null;
    },
  },
  mounted() {
    this.setPageTitle('Проекты');
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
