<template>
  <div class="projects-city">
    <div class="projects-city__container">
      <div class="projects-city__select" @click="switchDropbox">
        <h3 class="projects-city__value">{{ getCurrentCity.title }}</h3>
        <i class="fa fa-angle-down projects-city__icon"></i>
        <div v-show="isShowDropbox" class="projects-city__dropbox" @click.stop="() => {}" @scroll.prevent="() => {}">
          <ul class="projects-city__list">
            <li class="projects-city__item" :class="index === cityIndex ? 'projects-city__item_active' : ''"
                v-for="(item, index) in cities" :key="item.id" :data-index="index"
                @click.stop="choiceDropboxItem">
              {{ item.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SelectCity',
  data() {
    return {
      isShowDropbox: false,
    };
  },
  methods: {
    choiceDropboxItem(event) {
      const index = parseInt(event.target.getAttribute('data-index'), 10);
      if (index === this.cityIndex) {
        event.preventDefault();
        this.switchDropbox();
        return;
      }
      this.setCityIndex(index);
      this.fetchProjects({
        category: this.categories[this.categoryIndex].name,
        city: this.cities[this.cityIndex].name,
        page: 1,
      });
      this.switchDropbox();
    },
    switchDropbox() {
      this.isShowDropbox = !this.isShowDropbox;
    },
    ...mapActions({
      fetchCities: 'staticDataLoader/fetchCities',
      fetchProjects: 'projects/fetchProjects',
      setCityIndex: 'projects/setCityIndex',
    }),
  },
  computed: {
    getCurrentCity() {
      return this.cities[this.cityIndex];
    },
    ...mapGetters({
      isResponse: 'staticDataLoader/isResponseCities',
      isResult: 'staticDataLoader/isResultCities',
      cities: 'staticDataLoader/getCities',
      categories: 'staticDataLoader/getCategories',
      cityIndex: 'projects/getCityIndex',
      categoryIndex: 'projects/getCategoryIndex',
    }),
  },
  mounted() {
    this.fetchCities();
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.projects-city
  background-color: $BackgroundSecondary
  border-bottom: 1px solid $Border
  &__container
    max-width: $Site-MaxWidth
    margin: 0 auto
  &__select
    cursor: pointer
    background-color: $Background
    border: 1px solid $Border
    +flexSb
  &__value
    font-weight: 400
  &__icon
    margin-top: 1px
  &__dropbox
    z-index: 11
    cursor: default
    overflow-y: scroll
    width: 100%
    height: 100%
    background-color: $BackgroundDarkened
    +flexColumn
    align-items: center
    position: fixed
    +posTopLeft(0, 0)
  &__list
    min-width: $Site-MinWidth
    max-width: $Site-MaxWidth
  &__item
    cursor: pointer
    text-align: center
    background-color: $Background
    border-top: 1px solid $Border
    &:first-of-type
      border-top: none
    &_active
      background-color: $ColorMainYellow
      border-color: $ColorMainYellowActive

@media (max-width: $Media-SizeS)
  .projects-city
    &__container
      padding: 0.5rem 0.75rem
    &__select
      border-radius: 0.25rem
      padding: 0.375rem 0.625rem 0.375rem 0.75rem
    &__icon
      font-size: 1.125rem
    &__list
      padding: 0.75rem
    &__item
      padding: 0.75rem 1.5rem
      &:first-of-type
        +radiusTop(0.25rem)
      &:last-of-type
        +radiusBottom(0.25rem)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .projects-city
    &__container
      padding: 0.625rem 1.125rem
    &__select
      border-radius: 0.315rem
      padding: 0.565rem 0.875rem 0.565rem 1.125rem
    &__icon
      font-size: 1.25rem
    &__list
      padding: 1.125rem
    &__item
      padding: 1rem 2rem
      &:first-of-type
        +radiusTop(0.375rem)
      &:last-of-type
        +radiusBottom(0.375rem)

@media (min-width: $Media-SizeL)
  .projects-city
    &__container
      padding: 0.75rem 1.5rem
    &__select
      border-radius: 0.375rem
      padding: 0.75rem 1.125rem 0.75rem 1.5rem
    &__icon
      font-size: 1.375rem
    &__list
      padding: 1.5rem
    &__item
      padding: 1.25rem 2.5rem
      &:first-of-type
        +radiusTop(0.5rem)
      &:last-of-type
        +radiusBottom(0.5rem)
</style>
