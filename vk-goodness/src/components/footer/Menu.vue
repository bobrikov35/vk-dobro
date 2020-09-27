<template>
  <ul class="menu">
    <li class="menu__item">
      <router-link class="menu__link" to="/"><i class="fa fa-arrow-left"></i></router-link>
    </li>
    <li class="menu__item">
      <router-link class="menu__link" to="/about"><i class="fa fa-info"></i></router-link>
    </li>
    <li class="menu__item">
      <router-link class="menu__link" to="/"><i class="fa fa-home"></i></router-link>
    </li>
    <li class="menu__item">
      <router-link class="menu__link" to="/"><i class="fa fa-user"></i></router-link>
    </li>
    <li class="menu__item">
      <router-link class="menu__link" to="/test"><i class="fa fa-users"></i></router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Menu',
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
    &:first-of-type
      margin-left: 0
  &__link
    overflow: hidden
    color: $TextContrast
    border-radius: 50%
    +flexCC
    .fa-arrow-left, .fa-home, .fa-user
      margin-top: -3px
    .fa-info
      margin-top: 1px

@media (max-width: $Media-SizeS)
  .menu
    &__item
      margin-left: 1rem
    &__link
      width: 2rem
      height: 2rem
      font-size: 1.375rem
      border: 0.125rem solid $TextContrast

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .menu
    &__item
      margin-left: 1.5rem
    &__link
      width: 3rem
      height: 3rem
      font-size: 2.05rem
      border: 0.19rem solid $TextContrast

@media (min-width: $Media-SizeL)
  .menu
    &__item
      margin-left: 2rem
    &__link
      width: 4rem
      height: 4rem
      font-size: 2.75rem
      border: 0.25rem solid $TextContrast
</style>
