<template>
  <button class="button" @click="vClick">{{ vTitle }}</button>
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
        type3: 'button__type-3',
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

@media (max-width: $Media-SizeS)
  .button
    font-size: 1rem
    border-width: 0.065rem
    border-radius: 0.25rem
    padding: 0.75rem 1rem

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .button
    font-size: 1.125rem
    border-width: 0.125rem
    border-radius: 0.315rem
    padding: 1rem 1.35rem

@media (min-width: $Media-SizeL)
  .button
    font-size: 1.25rem
    border-width: 0.19rem
    border-radius: 0.375rem
    padding: 1.25rem 1.685rem
</style>
