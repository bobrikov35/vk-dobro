<template>
  <div class="dobrothon-action-panel">
    <div class="dobrothon-action-panel__container">
      <button class="cs-button-2 dobrothon-action-panel__button" @click="switchVisibilityDonationForm">
        Принять участие
      </button>
      <button class="cs-button-2 dobrothon-action-panel__button" @click="goToProject">
        Перейти к проекту
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ActionPanel',
  methods: {
    ...mapActions({
      switchVisibilityDonationForm: 'dobrothon/switchVisibilityDonationForm',
    }),
    goToProject() {
      const path = `/project/${this.project.path}`;
      if (this.$route.path !== path) this.$router.push(path);
    },
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
@import '../styles/buttons'

.dobrothon-action-panel
  background-color: $BackgroundSecondary
  &__container
    max-width: $Site-MaxWidth
    +flexJcC
    flex-wrap: wrap
    margin: $Project-MarginVertical auto
  &__button
    padding: $Project-PaddingVertical
    margin-top: $Project-MarginVertical
    &:first-of-type
      margin-top: 0

@media (max-width: $Media-SizeS)
  .dobrothon-action-panel
    &__button
      width: 72%

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .dobrothon-action-panel
    &__button
      width: 64%

@media (min-width: $Media-SizeL)
  .dobrothon-action-panel
    &__button
      width: 56%
</style>
