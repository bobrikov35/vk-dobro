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
  color: white
  background-color: $AboutBlueColor
  &__container
    max-width: $Site-MaxWidth
    text-align: center
    margin: 0 auto
  &__text
    +RobotoSlabSerif
    font-weight: 300

@media (max-width: $Media-SizeS)
  .about-service
    &__container
      padding: 1rem
    &__text
      margin-top: 0.75rem

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .about-service
    &__container
      padding: 1.5rem
    &__text
      margin-top: 1.125rem

@media (min-width: $Media-SizeL)
  .about-service
    &__container
      padding: 2rem
    &__text
      margin-top: 1.5rem
</style>
