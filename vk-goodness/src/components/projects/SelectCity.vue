<template>
  <div class="projects-city">
    <div class="projects-city__container">
      <div class="cs-select" @click="turnOnVisibilityDropdown">
        <h3 class="cs-select__value">{{ getCurrentCity.title }}</h3>
        <i class="fa fa-angle-down cs-select__icon"></i>
        <div class="cs-select__dropbox" @click.stop v-show="isVisibilityDropdown">
          <ul class="cs-select__list">
            <li v-for="(item, index) in getCities" :key="item.id" @click.stop="choiceItem(index)"
                class="cs-select__item" :class="index === getCityIndex ? 'cs-select__item_active' : ''">
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
    ...mapActions({
      fetchProjectList: 'projects/fetchProjectList',
      setCityIndex: 'projects/setCityIndex',
      setLoadingFlag: 'popup/setLoadingFlag',
      removeLoadingFlag: 'popup/removeLoadingFlag',
      fixedBody: 'fixedBody',
      unfixedBody: 'unfixedBody',
    }),
    choiceItem(index) {
      this.turnOffVisibilityDropdown();
      if (index === this.getCityIndex) return;
      this.setCityIndex(index);
      this.fetchProjectList({
        category: this.getCurrentCategory.name,
        city: this.getCurrentCity.name,
        page: 1,
        startLoading: this.setLoadingFlag,
        stopLoading: this.removeLoadingFlag,
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
  },
  computed: {
    ...mapGetters({
      getCities: 'projects/getCities',
      getCityIndex: 'projects/getCityIndex',
      getCurrentCity: 'projects/getCurrentCity',
      getCurrentCategory: 'projects/getCurrentCategory',
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
    padding: $Site-PuddingVertical $Site-PuddingHorizontal-MAX
    margin: 0 auto

@media (max-width: $Media-SizeS)
  .projects-city
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-S)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .projects-city
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-M)

@media (min-width: $Media-MinSizeL) and (max-width: $Media-MaxSizeL)
  .projects-city
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-L)
</style>
