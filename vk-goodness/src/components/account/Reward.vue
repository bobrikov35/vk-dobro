<template>
  <div class="rewards-item" :style="`background-image: url(${image})`" v-show="id === currentReward.id" @click="next">
    <div class="rewards-item rewards-item__inactive"
         :style="`background-image: url(${image});
                  height: ${points < target ? Math.floor((1 - points / target) * 100) : 100}%`" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Reward',
  props: {
    vItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    const { id, image, target } = this.vItem;
    return { id, image, target };
  },
  methods: {
    ...mapActions({
      next: 'account/nextReward',
      prev: 'account/prevReward',
    }),
  },
  computed: {
    ...mapGetters({
      currentReward: 'account/getCurrentReward',
      points: 'account/getPoints',
    }),
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.rewards-item
  cursor: pointer
  overflow: hidden
  width: 2.50rem
  height: 2.50rem
  background-size: auto 2.50rem
  background-repeat: no-repeat
  background-position-x: 50%
  margin-left: 0.50rem
  &__inactive
    filter: grayscale(100%)
    width: 100%
    margin: 0
</style>
