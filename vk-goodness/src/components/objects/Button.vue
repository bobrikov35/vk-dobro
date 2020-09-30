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
  +RobotoSlabSerif
  cursor: pointer
  outline: none
  font-weight: 700
  border-width: 0.10rem
  border-style: solid
  border-radius: 0.30rem
  +flexCC
  padding: 0.60rem 1.10rem
  &__default
    background-color: $BackgroundSecondary
    border-color: $Border
  &__type-1
    background-color: $ColorMainYellow
    border-color: $ColorMainYellowActive
  &__type-2
    height: 2.6rem
    color: $ColorWhite
    +shadowText(0, 0, 0.15rem)
    background-color: $ButtonType2Background
    border-color: $ColorMainYellow
    border-radius: 2.6rem
    box-shadow: none
</style>
