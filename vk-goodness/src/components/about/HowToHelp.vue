<template>
  <div class="how-to-help">
    <div class="how-to-help__container">
      <h2 class="how-to-help__title">Как помогать на Добре?</h2>
      <div class="how-to-help__content">
        <HelpCard vImage="/icons/map.png"
                  vHtml="<b>Выберите город</b>,<br>в котором вы хотите сделать доброе дело"/>
        <HelpCard vImage="/icons/paycards.png"
                  vHtml="<b>Выберите способ</b>,<br>которым вы хотите помочь"/>
        <HelpCard vImage="/icons/calendar.png"
                  vHtml="<b>Начните помогать</b><br>проекту регулярно или поддержите один раз"/>
        <HelpCard vImage="/icons/postbox.png"
                  vHtml="<b>Узнавайте новости проекта</b><br>и следите за изменениями, произошедшими благодаря вам"/>
        <HelpCard vImage="/icons/report.png"
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
    padding: 1rem
    margin: 0 auto
  &__content
    +flexSaWrap
    margin-top: $px12f15
</style>
