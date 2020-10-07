<template>
  <ul class="menu">
    <li class="menu__item">
      <button class="menu__link" @click="goBack"><i class="fa fa-arrow-left"></i></button>
    </li>
    <li class="menu__item">
      <router-link class="menu__link" to="/about"><i class="fa fa-info"></i></router-link>
    </li>
    <li class="menu__item">
      <router-link class="menu__link" to="/"><i class="fa fa-home"></i></router-link>
    </li>
    <li class="menu__item">
      <router-link class="menu__link" to="/account"><i class="fa fa-user"></i></router-link>
    </li>
    <li class="menu__item">
      <router-link class="menu__link" to="/test"><i class="fa fa-users"></i></router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
    goBack() {
      if (this.$router.options.history.state.back !== null) this.$router.back();
    },
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.menu
  background-color: $ColorMainBlue
  +flexSaC
  &__item
    cursor: pointer
    margin-left: 1.60rem
    &:first-of-type
      margin-left: 0
  &__link
    cursor: pointer
    overflow: hidden
    width: 2.25rem
    height: 2.25rem
    color: $TextContrast
    font-size: 1.50rem
    border: 0.15rem solid $TextContrast
    border-radius: 50%
    +flexCC
    .fa-arrow-left, .fa-home, .fa-user
      margin-top: -0.10rem
</style>
