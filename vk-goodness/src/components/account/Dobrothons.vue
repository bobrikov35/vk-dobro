<template>
  <div class="account-dobrothons" v-show="tabIndex === 2">
    {{ dobrothons }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Dobrothons',
  computed: {
    ...mapGetters({
      dobrothons: 'dobrothon/getList',
      tabIndex: 'account/getTabIndex',
    }),
  },
};
</script>

<style scoped lang="sass">

</style>
