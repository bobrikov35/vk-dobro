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
    padding: 1rem
    margin: 0 auto
  &__text, &__button
    margin-top: $px12f15

@media (max-width: $Media-SizeS)
  .how-appeared__button
    width: 80%

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .how-appeared__button
    width: 70%

@media (min-width: $Media-SizeL)
  .how-appeared__button
    width: 60%
</style>
