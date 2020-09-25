<template>
  <div class="how-appeared">
    <div class="how-appeared__container">
      <h2>Так появился сервис Добро Mail.ru!</h2>
      <p class="how-appeared__text">
        Сегодня мы общаемся с надежными благотворительными организациями и собираем информацию о проектах, которым
        нужна помощь. Тщательно проверив все данные, мы передаем их вам, чтобы вы могли выбрать, кому и чем помочь. Мы
        хотим, чтобы вам было удобно совершать добрые дела.
      </p>
      <Button vType="type1" vTitle="Помочь сейчас" vClass="how-appeared__button" />
    </div>
  </div>
</template>

<script>
import Button from '@/components/objects/Button.vue';

export default {
  name: 'AboutService',
  components: {
    Button,
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'

.how-appeared
  background-color: $AboutSilverColor
  &__container
    max-width: $Site-MaxWidth
    text-align: center
    margin: 0 auto
  &__text
    font-weight: 400

@media (max-width: $Media-SizeS)
  .how-appeared
    &__container
      padding: 1rem
    &__text, &__button
      margin-top: 0.75rem
    &__button
      width: 80%

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .how-appeared
    &__container
      padding: 1.5rem
    &__text, &__button
      margin-top: 1.125rem
    &__button
      width: 70%

@media (min-width: $Media-SizeL)
  .how-appeared
    &__container
      padding: 2rem
    &__text, &__button
      margin-top: 1.5rem
    &__button
      width: 60%
</style>
