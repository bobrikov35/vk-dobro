<template>
  <div class="popup-form popup-message" v-show="hasMessage" @click.prevent @touch.prevent @wheel.prevent>
    <div class="container popup-message__container">
      <button class="popup-message__exit" @click="removeMessage">
        <i class="fa fa-times-circle" />
      </button>
      <h2 class="popup-message__title">Сообщение</h2>
      <p class="popup-message__text" v-html="getMessage" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MessageForm',
  methods: {
    ...mapActions({
      removeMessage: 'popup/removeMessage',
    }),
  },
  computed: {
    ...mapGetters({
      getMessage: 'popup/getMessage',
      hasMessage: 'popup/hasMessage',
    }),
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'
@import '../styles/container'
@import '../styles/popup'

.popup-message
  background-color: $BackgroundSecondary
  border-bottom: 1px solid $Border
  &__container
    background-color: white

.popup-message
  background-color: $BackgroundDarkened
  &__container
    width: 0.64 * $Site-MaxWidth
    background-color: $Background
    border-radius: $Site-Radius
    position: relative
  &__exit
    cursor: pointer
    overflow: hidden
    width: 1.70rem
    height: 1.70rem
    color: $ColorAuto
    background-color: $Background
    border: 1px solid $Border
    border-radius: 50%
    +flexCC
    position: absolute
    +posTopRightSingle(0.30rem)
    & .fa
      font-size: 2rem
  &__title
    height: 1.70rem
    +flexAiC
  &__text
    min-height: 5rem
    text-align: justify
    padding: 0.70rem 0.30rem 1rem

@media (max-width: $Media-SizeS)
  .popup-message
    &__container
      width: 80%

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .popup-message
    &__container
      width: 72%

@media (min-width: $Media-SizeL) and (max-width: $Media-MaxSizeL)
  .popup-message
    &__container
      width: 64%
</style>
