<template>
  <div class="account-tabs">
    <ul class="account-tabs__container">
      <li v-for="(item, index) in tabs" :key="item.id" @click="setCurrentTab(index)"
          class="account-tabs__tab" :class="index === tabIndex ? 'account-tabs__tab_active' : ''">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Tabs',
  methods: {
    ...mapActions({
      setCurrentTab: 'account/setCurrentTab',
    }),
  },
  computed: {
    ...mapGetters({
      tabs: 'account/getTabs',
      tabIndex: 'account/getTabIndex',
    }),
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.account-tabs
  background-color: $BackgroundSecondary
  border-bottom: 1px solid $Border
  &__container
    max-width: $Site-MaxWidth
    +flexJcC
    padding: 0.40rem 0.30rem
    margin: 0 auto
  &__tab
    cursor: pointer
    min-width: 10rem
    text-align: center
    border: 1px solid $Border
    border-radius: 0.30rem
    padding: 0.45rem 0.30rem
    margin-left: 0.30rem
    &:first-of-type
      margin-left: 0
    &_active
      font-weight: 700
      background-color: $ColorMainYellow
      border-color: $ColorMainYellowActive
</style>
