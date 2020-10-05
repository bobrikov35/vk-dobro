<template>
  <div class="help-card">
    <div class="help-card__icon">
      <img :src="vImage" alt="icon">
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
  width: 12rem
  margin: 0.60rem
  &__icon
    +flexCC
    & img
      height: 2.40rem
  &__text
    font-weight: 300
    text-align: center
    margin-top: 0.60rem

@media (max-width: $Media-SizeS)
  .help-card
    width: 88%
    +flexAiC
    &__icon
      height: 100%
    &__text
      text-align: left
      margin-left: 1.20rem
</style>
