<template>
  <div class="projects-category">
    <div class="projects-category__container">
      <div class="cs-select" @click="turnOnVisibilityDropdown" v-show="isVisibilityList">
        <h3 class="cs-select__value">{{ currentCategory.title }}</h3>
        <i class="fa fa-angle-down cs-select__icon"></i>
        <div class="cs-select__dropbox" @click.stop v-show="isVisibilityDropdown">
          <ul class="cs-select__list">
            <li v-for="(item, index) in categories" :key="item.id" @click.stop="choiceItem(index)"
                class="cs-select__item" :class="index === categoryIndex ? 'cs-select__item_active' : ''">
              {{ item.title }}
            </li>
          </ul>
        </div>
      </div>
      <ul class="cs-tabs" v-show="isVisibilityTabs">
        <li v-for="(item, index) in categories" :key="item.id" @click="choiceItem(index)"
            class="cs-tabs__item" :class="index === categoryIndex ? 'cs-tabs__item_active' : ''">
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
      selector: {
        current: 0,
        list: ['list', 'tabs'],
      },
      isVisibilityDropdown: false,
    };
  },
  methods: {
    choiceItem(index) {
      this.turnOffVisibilityDropdown();
      if (index === this.categoryIndex) return;
      this.setCategoryIndex(index);
      this.fetchProjects({
        category: this.currentCategory.name,
        city: this.currentCity.name,
        page: 1,
      });
    },
    switchSelector() {
      if ((this.$el.clientWidth >= 610 && this.$el.clientWidth <= 630) || this.$el.clientWidth >= 700) {
        this.selector.current = 1;
        this.turnOffVisibilityDropdown();
      } else {
        this.selector.current = 0;
      }
    },
    turnOnVisibilityDropdown() {
      this.isVisibilityDropdown = true;
      this.fixedBody();
    },
    turnOffVisibilityDropdown() {
      this.isVisibilityDropdown = false;
      this.unfixedBody();
    },
    ...mapActions({
      fetchProjects: 'projects/fetchProjects',
      setCategoryIndex: 'projects/setCategoryIndex',
      fixedBody: 'fixedBody',
      unfixedBody: 'unfixedBody',
    }),
  },
  computed: {
    isVisibilityList() {
      return this.selector.current === 0;
    },
    isVisibilityTabs() {
      return this.selector.current === 1;
    },
    ...mapGetters({
      categories: 'projects/getCategories',
      categoryIndex: 'projects/getCategoryIndex',
      currentCategory: 'projects/getCurrentCategory',
      currentCity: 'projects/getCurrentCity',
    }),
  },
  created() {
    window.addEventListener('resize', this.switchSelector);
  },
  mounted() {
    this.switchSelector();
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'
@import '../styles/select'
@import '../styles/tabs'

.projects-category
  background-color: $BackgroundSecondary
  border-bottom: 1px solid $Border
  &__container
    max-width: $Site-MaxWidth
    margin: 0 auto
    +paddingTopBottomSingle($Site-PuddingVertical)

@media (max-width: $Media-SizeS)
  .projects-category
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-S)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .projects-category
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-M)

@media (min-width: $Media-SizeL)
  .projects-category
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-L)
</style>
