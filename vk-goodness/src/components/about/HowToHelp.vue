<template>
  <div class="about-how-to-help">
    <div class="about-how-to-help__container">
      <h2 class="about-how-to-help__title">Как помогать на Добре?</h2>
      <div class="about-how-to-help__content">
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

.about-how-to-help
  background-color: $ColorWhite
  &__container
    max-width: $Site-MaxWidth
    text-align: center
    padding: 0.80rem $Site-PuddingHorizontal-MAX
    margin: 0 auto
  &__content
    +flexSaWrap
    margin-top: 0.80rem

@media (max-width: $Media-SizeS)
  .about-how-to-help
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-S)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .about-how-to-help
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-M)

@media (min-width: $Media-MinSizeL) and (max-width: $Media-MaxSizeL)
  .about-how-to-help
    &__container
      +paddingRightLeftSingle($Site-PuddingHorizontal-L)
</style>
