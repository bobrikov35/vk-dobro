<template>
  <div class="account-dobrothons" v-show="tabIndex === 2">
    Доброфоны
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Dobrothons',
  computed: {
    ...mapGetters({
      tabIndex: 'account/getTabIndex',
    }),
  },
};
</script>

<style scoped lang="sass">

</style>
