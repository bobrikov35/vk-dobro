<template>
  <button class="button" @click="vClick"><span>{{ vTitle }}</span></button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    vClick: {
      type: Function,
      default: () => {},
    },
    vTitle: {
      type: String,
      required: true,
    },
    vType: {
      type: String,
      default: 'default',
    },
    vClass: String,
  },
  data() {
    return {
      typeList: {
        default: 'button__default',
        type1: 'button__type-1',
        type2: 'button__type-2',
      },
    };
  },
  methods: {
    getClass() {
      if (this.typeList[this.vType] !== undefined) {
        return this.typeList[this.vType];
      }
      return this.typeList.default;
    },
  },
  mounted() {
    this.$el.classList.add(this.getClass());
    this.$el.classList.add(this.vClass);
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.button
  cursor: pointer
  outline: none
  +RobotoSlabSerif
  font-weight: 700
  border-style: solid
  &__default
    background-color: $BackgroundSecondary
    border-color: $Border
  &__type-1
    background-color: $ColorMainYellow
    border-color: $ColorMainYellowActive
  &__type-2
    color: $ColorWhite
    background-color: $ButtonType2Background
    border-color: $ColorMainYellow
    +flexCC

@media (max-width: $Media-SizeS)
  .button
    border-width: 0.065rem
    border-radius: 0.25rem
    padding: 0.5rem 1rem
    &__type-2
      height: 2.5rem
      +shadowText(0, 0, 0.125rem)
      border-width: 0.125rem
      border-radius: 1.5rem
      +shadow(0, 0, 0.125rem)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .button
    border-width: 0.125rem
    border-radius: 0.315rem
    padding: 0.75rem 1.35rem
    &__type-2
      height: 3.25rem
      +shadowText(0, 0, 0.19rem)
      border-width: 0.19rem
      border-radius: 1.75rem
      +shadow(0, 0, 0.19rem)

@media (min-width: $Media-SizeL)
  .button
    border-width: 0.19rem
    border-radius: 0.375rem
    padding: 1rem 1.685rem
    &__type-2
      height: 4rem
      +shadowText(0, 0, 0.25rem)
      border-width: 0.19rem
      border-radius: 2rem
      +shadow(0, 0, 0.25rem)
</style>
