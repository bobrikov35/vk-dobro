<template>
  <div class="projects-category">
    <div class="projects-category__container">
      <div class="projects-category__select" v-show="isShowSelect" @click="switchDropbox">
        <h3 class="projects-category__value">{{ getCurrentCategory.title }}</h3>
        <i class="fa fa-angle-down projects-category__icon"></i>
        <div v-show="isShowDropbox" class="projects-category__dropbox" @click.stop="() => {}" @scroll.stop="() => {}">
          <ul class="projects-category__list">
            <li class="projects-category__item" :class="index === categoryIndex ? 'projects-category__item_active' : ''"
                v-for="(item, index) in categories" :key="item.id" :data-index="index"
                @click.stop="choiceDropboxItem">
              {{ item.title }}
            </li>
          </ul>
        </div>
      </div>
      <ul class="projects-category__tabs" v-show="isShowTabs">
        <li class="projects-category__tab" :class="index === categoryIndex ? 'projects-category__tab_active' : ''"
            v-for="(item, index) in categories" :key="item.id" :data-index="index" @click="choiceItem">
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SelectCategory',
  data() {
    return {
      isShowTabs: false,
      isShowSelect: true,
      isShowDropbox: false,
    };
  },
  methods: {
    choiceItem(event) {
      const index = parseInt(event.target.getAttribute('data-index'), 10);
      if (index === this.categoryIndex) {
        event.preventDefault();
        return;
      }
      this.setCategoryIndex(index);
      this.fetchProjects({
        category: this.categories[this.categoryIndex].name,
        city: this.cities[this.cityIndex].name,
        page: 1,
      });
    },
    choiceDropboxItem(event) {
      this.choiceItem(event);
      this.switchDropbox();
    },
    switchDropbox() {
      this.isShowDropbox = !this.isShowDropbox;
    },
    switchControlObject() {
      this.isShowTabs = (this.$el.clientWidth >= 594 && this.$el.clientWidth <= 630) || this.$el.clientWidth >= 692;
      this.isShowSelect = !this.isShowTabs;
    },
    ...mapActions({
      fetchProjects: 'projects/fetchProjects',
      setCategoryIndex: 'projects/setCategoryIndex',
    }),
  },
  computed: {
    getCurrentCategory() {
      return this.categories[this.categoryIndex];
    },
    ...mapGetters({
      isResponse: 'staticDataLoader/isResponseCategories',
      isResult: 'staticDataLoader/isResultCategories',
      categories: 'staticDataLoader/categories',
      cities: 'staticDataLoader/cities',
      categoryIndex: 'projects/getCategoryIndex',
      cityIndex: 'projects/getCityIndex',
    }),
  },
  created() {
    window.addEventListener('resize', this.switchControlObject);
  },
  mounted() {
    this.switchControlObject();
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.projects-category
  background-color: $BackgroundSecondary
  +borderTopBottom(1px, $Border)
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
  &__tabs
    +flexJcC
  &__tab
    cursor: pointer
    font-weight: 700
    text-align: center
    border: 1px solid $Border
    &:last-of-type
      margin-right: 0
    &_active
      font-weight: 700
      background-color: $ColorMainYellow
      border-color: $ColorMainYellowActive

@media (max-width: $Media-SizeS)
  .projects-category
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
    &__tab
      font-size: 1rem
      border-radius: 0.25rem
      padding: 0.375rem 0.25rem
      margin-right: 0.25rem

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .projects-category
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
    &__tab
      font-size: 1.125rem
      border-radius: 0.315rem
      padding: 0.565rem 0.375rem
      margin-right: 0.375rem

@media (min-width: $Media-SizeL)
  .projects-category
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
    &__tab
      font-size: 1.25rem
      border-radius: 0.375rem
      padding: 0.75rem 0.5rem
      margin-right: 0.5rem
</style>
