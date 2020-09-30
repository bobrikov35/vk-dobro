<template>
  <div class="projects-city">
    <div class="projects-city__container">
      <div class="projects-city__select" @click="this.isShowDropbox = true">
        <h3 class="projects-city__value">{{ currentCity.title }}</h3>
        <i class="fa fa-angle-down projects-city__icon"></i>
        <div v-show="isShowDropbox" class="projects-city__dropbox" @click.stop>
          <ul class="projects-city__list">
            <li v-for="(item, index) in cities" :key="item.id" @click.stop="choiceItem(index)"
                class="projects-city__item" :class="index === cityIndex ? 'projects-city__active' : ''">
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
    choiceItem(index) {
      this.isShowDropbox = false;
      if (index === this.cityIndex) {
        return;
      }
      this.setCityIndex(index);
      this.fetchProjects({
        category: this.currentCategory.name,
        city: this.currentCity.name,
        page: 1,
      });
    },
    ...mapActions({
      fetchProjects: 'project/projects/fetchProjects',
      setCityIndex: 'cities/setCityIndex',
    }),
  },
  computed: {
    ...mapGetters({
      categoryIndex: 'project/getCategoryIndex',
      cities: 'cities/getCities',
      cityIndex: 'cities/getCityIndex',
      currentCategory: 'project/getCurrentCategory',
      currentCity: 'cities/getCurrentCity',
    }),
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.projects-city
  background-color: $BackgroundSecondary
  &__container
    max-width: $Site-MaxWidth
    padding: 0.40rem 0.30rem
    margin: 0 auto
  &__select
    cursor: pointer
    background-color: $Background
    border: 1px solid $Border
    border-radius: 0.30rem
    +flexSb
    padding: 0.45rem 0.70rem 0.45rem 0.85rem
  &__value
    font-weight: 400
  &__icon
    font-size: 1rem
    margin-top: 1px
  &__dropbox
    z-index: 11
    cursor: default
    overflow-y: scroll
    width: 100%
    height: 100%
    background-color: $BackgroundDarkened
    +flexColumnAiC
    position: fixed
    +posTopLeft(0, 0)
  &__list
    min-width: $Site-MinWidth
    max-width: $Site-MaxWidth
    padding: 0.85rem
  &__item
    cursor: pointer
    text-align: center
    background-color: $Background
    border-top: 1px solid $Border
    padding: 0.8rem 1.6rem
    &:first-of-type
      border-top: none
      +radiusTop(0.30rem)
    &:last-of-type
      +radiusBottom(0.30rem)
  &__active
    background-color: $ColorMainYellow
    border-top: 1px solid $ColorMainYellowActive
</style>
