<template>
  <div class="help-card">
    <div class="help-card__icon">
      <img class="help-card__image" :src="vImage" alt="icon">
    </div>
    <p class="help-card__text" v-html="vHtml" />
  </div>
</template>

<script>
export default {
  name: 'HelpCard',
  props: {
    vImage: {
      type: String,
      required: true,
    },
    vHtml: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.help-card
  padding: $px9f15
  &__content
    margin-top: 1rem
  &__image
    height: 3rem
  &__text
    font-size: 1rem
    font-weight: 300

@media (max-width: $Media-SizeS)
  .help-card
    width: 96%
    +flexAiC
    &__text
      text-align: left
      padding: $px9f15
      margin-left: $px9f15

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .help-card
    width: 14rem
    &__icon
      margin-bottom: $px9f15

@media (min-width: $Media-SizeL)
  .help-card
    width: 15rem
    padding: $px12f15
    &__content
      margin-top: 1rem + $px6f15
    &__icon
      margin-bottom: 1rem
    &__image
      height: 4rem + $px3f15
    &__text
      font-size: 1rem + $px3f15
</style>
