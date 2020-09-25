<template>
  <div class="how-to-help">
    <div class="how-to-help__container">
      <h2 class="how-to-help__title">Как помогать на Добре?</h2>
      <div class="how-to-help__content">
        <HelpCard :vImage="{ link: '/icons/map.png', alter: 'map' }"
                  vHtml="<b>Выберите город</b>,<br>в котором вы хотите сделать доброе дело"/>
        <HelpCard :vImage="{ link: '/icons/paycards.png', alter: 'paycards' }"
                  vHtml="<b>Выберите способ</b>,<br>которым вы хотите помочь"/>
        <HelpCard :vImage="{ link: '/icons/calendar.png', alter: 'calendar' }"
                  vHtml="<b>Начните помогать</b><br>проекту регулярно или поддержите один раз"/>
        <HelpCard :vImage="{ link: '/icons/postbox.png', alter: 'postbox' }"
                  vHtml="<b>Узнавайте новости проекта</b><br>и следите за изменениями, произошедшими благодаря вам"/>
        <HelpCard :vImage="{ link: '/icons/report.png', alter: 'report' }"
                  vHtml="<b>Получайте отчеты</b><br>о расходовании средств по завершении проекта"/>
      </div>
    </div>
  </div>
</template>

<script>
import HelpCard from '@/components/about/HelpCard.vue';

export default {
  name: 'HowToHelp',
  components: {
    HelpCard,
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.how-to-help
  &__container
    max-width: $Site-MaxWidth
    text-align: center
    margin: 0 auto
  &__content
    +flexSaWrap

@media (max-width: $Media-SizeS)
  .how-to-help
    &__container
      padding: 1rem
    &__content
      margin-top: 0.75rem

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .how-to-help
    &__container
      padding: 1.5rem
    &__content
      margin-top: 1.125rem

@media (min-width: $Media-SizeL)
  .how-to-help
    &__container
      padding: 2rem
    &__content
      margin-top: 1.5rem
</style>
