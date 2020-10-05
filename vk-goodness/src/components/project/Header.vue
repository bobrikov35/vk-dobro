<template>
  <header class="project-header">
    <Caption />
    <Card />
    <ActionPanel />
    <p class="project-header__description">{{ project.description }}</p>
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
      project: 'project/getProject',
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
    line-height: 1.33em
    text-align: justify
    padding-bottom: $Site-PuddingVertical
    margin-bottom: $Site-PuddingVertical

@media (max-width: $Media-SizeS)
  .project-header
    &__description
      +paddingRightLeftSingle($Site-PuddingHorizontal-S)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .project-header
    &__description
      +paddingRightLeftSingle($Site-PuddingHorizontal-M)

@media (min-width: $Media-SizeL)
  .project-header
    &__description
      +paddingRightLeftSingle($Site-PuddingHorizontal-L)
</style>
