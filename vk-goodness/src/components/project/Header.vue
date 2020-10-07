<template>
  <header class="project-header">
    <Caption />
    <Card />
    <ActionPanel />
    <div class="project-header__description">
      <p>{{ getProject.description }}</p>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import ActionPanel from '@/components/project/ActionPanel.vue';
import Caption from '@/components/project/Caption.vue';
import Card from '@/components/project/Card.vue';

export default {
  name: 'Header',
  components: {
    ActionPanel,
    Caption,
    Card,
  },
  computed: {
    ...mapGetters({
      getProject: 'project/getProject',
    }),
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'

.project-header
  background-color: $BackgroundSecondary
  +flexColumn
  &__description
    max-width: $Site-MaxWidth
    text-align: justify
    padding: 0 $Site-PuddingHorizontal-MAX $Site-PuddingVertical
    margin: 0 auto $Site-PuddingVertical

@media (max-width: $Media-SizeS)
  .project-header
    &__description
      +paddingRightLeftSingle($Site-PuddingHorizontal-S)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .project-header
    &__description
      +paddingRightLeftSingle($Site-PuddingHorizontal-M)

@media (min-width: $Media-SizeL) and (max-width: $Media-MaxSizeL)
  .project-header
    &__description
      +paddingRightLeftSingle($Site-PuddingHorizontal-L)
</style>
