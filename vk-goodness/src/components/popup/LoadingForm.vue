<template>
  <div class="popup-form" v-show="isLoading" @click.prevent @touch.prevent @wheel.prevent>
    <i class="fa fa-spinner fa-pulse popup-loading__icon"></i>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'LoadingForm',
  computed: {
    ...mapGetters({
      isLoading: 'popup/isLoading',
    }),
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'
@import '../styles/popup'

.popup-loading
  &__icon
    +Awesome
    font-size: $Loading-Size
</style>
