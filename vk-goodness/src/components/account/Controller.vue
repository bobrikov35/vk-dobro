<template>
  <div class="account-controller">
    <div class="account-controller__container">
      <div class="cs-select" @click="turnOnVisibilityDropdown">
        <h3 class="cs-select__value">{{ getCurrentController.title }}</h3>
        <i class="fa fa-angle-down cs-select__icon"></i>
        <div class="cs-select__dropbox" @click.stop v-show="isVisibilityDropdown">
          <ul class="cs-select__list">
            <li v-for="(item, index) in getControllers" :key="item.id" @click.stop="choiceItem(index)"
                class="cs-select__item" :class="index === getControllerIndex && 'cs-select__item_active'">
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
  name: 'Controller',
  data() {
    return {
      isVisibilityDropdown: false,
    };
  },
  methods: {
    ...mapActions({
      setControllerIndex: 'account/setControllerIndex',
      fixedBody: 'fixedBody',
      unfixedBody: 'unfixedBody',
    }),
    choiceItem(index) {
      this.turnOffVisibilityDropdown();
      if (index === this.getControllerIndex) return;
      this.setControllerIndex(index);
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
      getControllers: 'account/getControllers',
      getControllerIndex: 'account/getControllerIndex',
      getCurrentController: 'account/getCurrentController',
    }),
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'
@import '../styles/select'

.account-controller
  background-color: $BackgroundSecondary
  border-bottom: 1px solid $Border
  &__container
    max-width: $Site-MaxWidth
    padding: $Site-PuddingVertical $Site-PuddingHorizontal-MAX
    margin: 0 auto

@media (max-width: $Media-SizeS)
  .account-controller
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-S)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .account-controller
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-M)

@media (min-width: $Media-MinSizeL) and (max-width: $Media-MaxSizeL)
  .account-controller
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-L)
</style>
