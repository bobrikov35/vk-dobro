<template>
  <div class="account-donations" v-show="tabIndex === 0">
    <div v-if="!isResponse" class="account-donations__loading">
      <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <div v-else-if="isResponse && !isResult" class="account-donations__error">
      <h2>Что-то пошло не так</h2>
    </div>
    <div v-else class="account-donations__content">
      <Card v-for="item of donations" :key="item.id" :vProject="item" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from '@/components/account/Card.vue';

export default {
  name: 'Donations',
  components: {
    Card,
  },
  computed: {
    ...mapGetters({
      donations: 'account/donations/getDonations',
      isResponse: 'account/donations/isResponse',
      isResult: 'account/donations/isResult',
      tabIndex: 'account/getTabIndex',
    }),
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.account-donations
  background-color: $Background
  +flexColumn
  flex-grow: 1
</style>
