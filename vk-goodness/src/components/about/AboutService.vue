<template>
  <div class="about-service">
    <div class="about-service__container">
      <h2>Добро Mail.ru – это сервис для добрых дел</h2>
      <p class="about-service__text">
        Идея проекта родилась у сотрудников Mail.Ru Group. Они сами участвовали в благотворительных проектах, приводили
        с собой друзей... А потом подумали: как сделать так, чтобы помогать было проще?
      </p>
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
@import '../../styles/mixin'

.about-service
  color: $ColorWhite
  background-color: $AboutBlueColor
  &__container
    max-width: $Site-MaxWidth
    text-align: center
    padding: 1rem + $px3f15
    margin: 0 auto
  &__text
    +RobotoSerif
    margin-top: 1rem
</style>
