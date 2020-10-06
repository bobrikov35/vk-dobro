<template>
  <div class="how-appeared">
    <div class="how-appeared__container">
      <h2>Так появился сервис Добро Mail.ru!</h2>
      <p class="how-appeared__text">
        Сегодня мы общаемся с надежными благотворительными организациями и собираем информацию о проектах, которым
        нужна помощь. Тщательно проверив все данные, мы передаем их вам, чтобы вы могли выбрать, кому и чем помочь. Мы
        хотим, чтобы вам было удобно совершать добрые дела.
      </p>
      <router-link class="cs-button-2 how-appeared__button" to="/">Помочь сейчас</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutService',
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../styles/buttons'

.how-appeared
  background-color: $AboutSilverColor
  &__container
    max-width: $Site-MaxWidth
    text-align: center
    +flexColumnAiC
    padding: 0.80rem $Site-PuddingHorizontal-MAX
    margin: 0 auto
  &__text, &__button
    margin-top: 0.80rem

@media (max-width: $Media-SizeS)
  .how-appeared
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-S)
    &__button
      width: 80%

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .how-appeared
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-M)
    &__button
      width: 72%

@media (min-width: $Media-MinSizeL) and (max-width: $Media-MaxSizeL)
  .how-appeared
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-L)
    &__button
      width: 64%
</style>
