<template>
  <header class="dobrothon-header">
    <Caption />
    <Card />
    <ActionPanel />
    <div class="dobrothon-header__description">
      <p>{{ project.description }}</p>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import ActionPanel from '@/components/dobrothon/ActionPanel.vue';
import Caption from '@/components/dobrothon/Caption.vue';
import Card from '@/components/dobrothon/Card.vue';

export default {
  name: 'Header',
  components: {
    ActionPanel,
    Caption,
    Card,
  },
  computed: {
    ...mapGetters({
      getDobrothon: 'dobrothon/getDobrothon',
    }),
    project() {
      return this.getDobrothon.project;
    },
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.dobrothon-header
  background-color: $BackgroundSecondary
  +flexColumn
  &__description
    max-width: $Site-MaxWidth
    text-align: justify
    padding: 0 $Site-PuddingHorizontal-MAX $Site-PuddingVertical
    margin: 0 auto $Site-PuddingVertical

@media (max-width: $Media-SizeS)
  .dobrothon-header
    &__description
      +paddingRightLeftSingle($Site-PuddingHorizontal-S)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .dobrothon-header
    &__description
      +paddingRightLeftSingle($Site-PuddingHorizontal-M)

@media (min-width: $Media-SizeL) and (max-width: $Media-MaxSizeL)
  .dobrothon-header
    &__description
      +paddingRightLeftSingle($Site-PuddingHorizontal-L)
</style>
