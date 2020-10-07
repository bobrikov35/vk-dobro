<template>
  <div class="account-dobrothons">
    <div v-if="isLoadingDobrothonList" class="account-dobrothons__loading">
      <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <div v-else-if="isError" class="account-dobrothons__error">
      <h2>Что-то пошло не так</h2>
    </div>
    <div v-else class="account-dobrothons__content">
      <DobrothonCard v-for="item of getDobrothonList" :key="item.id" :vDobrothon="item" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DobrothonCard from '@/components/account/DobrothonCard.vue';

export default {
  name: 'Dobrothons',
  components: {
    DobrothonCard,
  },
  computed: {
    ...mapGetters({
      getDobrothonList: 'account/getDobrothonList',
      getDobrothonListError: 'account/getDobrothonListError',
      isLoadingDobrothonList: 'account/isLoadingDobrothonList',
    }),
    isError() {
      return this.getDobrothonListError !== null;
    },
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.account-dobrothons
  background-color: $Background
  +flexColumnGrow(1)
  &__loading, &__error
    max-width: $Site-MaxWidth
    +flexCC()
    margin: 0 auto
  &__loading, &__error, &__content
    flex-grow: 1
  &__loading
    font-size: $Loading-Size
</style>
