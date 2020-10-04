<template>
  <div class="projects-city">
    <div class="projects-city__container">
      <div class="cs-select" @click="turnOnVisibilityDropdown">
        <h3 class="cs-select__value">{{ currentCity.title }}</h3>
        <i class="fa fa-angle-down cs-select__icon"></i>
        <div class="cs-select__dropbox" id="city" v-show="isVisibilityDropdown" @click.stop>
          <ul class="cs-select__list">
            <li v-for="(item, index) in cities" :key="item.id" @click.stop="choiceItem(index)"
                class="cs-select__item" :class="index === cityIndex ? 'cs-select__item_active' : ''">
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
      isVisibilityDropdown: false,
    };
  },
  methods: {
    choiceItem(index) {
      this.turnOffVisibilityDropdown();
      if (index === this.cityIndex) return;
      this.setCityIndex(index);
      this.fetchProjects({
        category: this.currentCategory.name,
        city: this.currentCity.name,
        page: 1,
      });
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
      setCityIndex: 'projects/setCityIndex',
      fixedBody: 'fixedBody',
      unfixedBody: 'unfixedBody',
    }),
  },
  computed: {
    ...mapGetters({
      cities: 'projects/getCities',
      cityIndex: 'projects/getCityIndex',
      currentCity: 'projects/getCurrentCity',
      currentCategory: 'projects/getCurrentCategory',
    }),
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'
@import '../styles/select'

.projects-city
  background-color: $BackgroundSecondary
  border-bottom: 1px solid $Border
  &__container
    max-width: $Site-MaxWidth
    margin: 0 auto
    +paddingTopBottomSingle($Site-PuddingVertical)

@media (max-width: $Media-SizeS)
  .projects-city
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-S)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .projects-city
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-M)

@media (min-width: $Media-SizeL)
  .projects-city
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-L)
</style>
