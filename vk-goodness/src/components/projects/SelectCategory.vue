<template>
  <div class="projects-category">
    <div class="projects-category__container">
      <div class="projects-category__select" @click="this.isShowDropbox = true" v-show="isShowSelect">
        <h3 class="projects-category__value">{{ currentCategory.title }}</h3>
        <i class="fa fa-angle-down projects-category__icon"></i>
        <div v-show="isShowDropbox" class="projects-category__dropbox" @click.stop>
          <ul class="projects-category__list">
            <li v-for="(item, index) in categories" :key="item.id" @click.stop="choiceItem(index)"
                class="projects-category__item" :class="index === categoryIndex ? 'projects-category__active' : ''">
              {{ item.title }}
            </li>
          </ul>
        </div>
      </div>
      <ul class="projects-category__tabs" v-show="isShowTabs">
        <li v-for="(item, index) in categories" :key="item.id" @click="choiceItem(index)"
            class="projects-category__tab" :class="index === categoryIndex ? 'projects-category__active' : ''">
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
    choiceItem(index) {
      this.isShowDropbox = false;
      if (index === this.categoryIndex) {
        return;
      }
      this.setCategoryIndex(index);
      this.fetchProjects({
        category: this.currentCategory.name,
        city: this.currentCity.name,
        page: 1,
      });
    },
    switchControlObject() {
      this.isShowTabs = (this.$el.clientWidth >= 588 && this.$el.clientWidth <= 630) || this.$el.clientWidth >= 666;
      this.isShowSelect = !this.isShowTabs;
      if (this.isShowTabs) {
        this.isShowDropbox = false;
      }
    },
    ...mapActions({
      fetchProjects: 'project/projects/fetchProjects',
      setCategoryIndex: 'project/setCategoryIndex',
    }),
  },
  computed: {
    ...mapGetters({
      categories: 'project/getCategories',
      categoryIndex: 'project/getCategoryIndex',
      currentCategory: 'project/getCurrentCategory',
      currentCity: 'cities/getCurrentCity',
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
  &__tabs
    +flexJcC
  &__tab
    cursor: pointer
    text-align: center
    border: 1px solid $Border
    border-radius: 0.30rem
    padding: 0.45rem 0.30rem
    margin-right: 0.30rem
    &:last-of-type
      margin-right: 0
  &__active
    background-color: $ColorMainYellow
    border-top: 1px solid $ColorMainYellowActive
</style>
