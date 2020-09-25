<template>
  <div class="help-card">
    <div class="help-card__icon">
      <img class="help-card__image" :src="vImage.link" :alt="vImage.alter">
    </div>
    <p class="help-card__text" v-html="vHtml" />
  </div>
</template>

<script>
export default {
  name: 'HelpCard',
  props: {
    vImage: {
      type: Object,
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
  padding: 0.5rem
  &__content
    margin-top: 1.125rem
  &__image
    height: 48px
  &__text
    font-weight: 300

@media (max-width: $Media-SizeS)
  .help-card
    width: 96%
    +flexAiC
    &__text
      font-size: 0.875rem
      text-align: left
      padding: 0.5rem
      margin-left: 0.5rem

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .help-card
    width: 210px
    &__icon
      margin-bottom: 0.75rem
    &__text
      font-size: 1rem

@media (min-width: $Media-SizeL)
  .help-card
    width: 230px
    padding: 0.75rem
    &__content
      margin-top: 1.5rem
    &__icon
      margin-bottom: 1rem
    &__image
      height: 64px
    &__text
      font-size: 1.125rem
</style>
