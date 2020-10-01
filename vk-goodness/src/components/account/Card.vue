<template>
  <div class="donations-card">
    <div class="donations-card__container">
      <div class="donations-card__cover" :style="`background-image: url(${vProject.image})`">
        <div class="donations-card__info">
          <h3 class="donations-card__city">{{ vProject.city }}</h3>
          <h2 class="donations-card__title">{{ vProject.title }}</h2>
          <div class="donations-card__amount">
            <h1 class="donations-card__amount_item">{{ formatAmount }}</h1>
            <h2 class="donations-card__amount_text">из</h2>
            <h2 class="donations-card__amount_item">{{ formatTarget }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import format from '@/libs/format';

export default {
  name: 'Card',
  props: {
    vProject: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formatAmount() {
      return format.numberFinance(this.vProject.amount);
    },
    formatTarget() {
      return format.numberFinance(this.vProject.target);
    },
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.donations-card
  border-bottom: 1px solid $Border
  &__container
    max-width: $Site-MaxWidth
    color: $TextContrast
    font-weight: 700
    +shadowText(0, 0, 0.133rem)
    +paddingTopBottom(0.667rem, 0.667rem)
    margin: 0 auto
  &__cover
    overflow: hidden
    text-align: center
    background-size: 104% auto
    background-repeat: no-repeat
    background-position-x: 50%
    background-position-y: 50%
    border-radius: 0.267rem
    +shadow(0, 0, 0.2rem)
    padding: 0.667rem
    margin: 0 auto
  &__city
    overflow: hidden
    width: 100%
    white-space: nowrap
    text-overflow: ellipsis
    text-align: left
  &__title
    overflow: hidden
    width: 100%
    height: 2.67em
    text-align: center
    margin-top: 0.667rem
  &__amount
    +flexSbC
    margin: 0.667rem auto 0
    &_item
      width: 35%
    &_text
      width: 20%

@media (max-width: $Media-SizeS)
  .donations-card
    &__cover, &__amount
      width: 88%

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .donations-card
    &__cover, &__amount
      width: 80%

@media (min-width: $Media-SizeL)
  .donations-card
    &__cover, &__amount
      width: 72%
    &__title
      height: 4em
</style>
