<template>
  <div class="project-action-panel">
    <div class="project-action-panel__container">
      <button class="cs-button-2 project-action-panel__button" @click="switchVisibilityDonationForm">
        Помочь деньгами
      </button>
      <button class="cs-button-2 project-action-panel__button" @click="share">
        Помочь репостом
      </button>
      <button class="cs-button-2 project-action-panel__button" @click="switchVisibilityDobrothonForm">
        Запустить ДОБРОфон
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ActionPanel',
  methods: {
    ...mapActions({
      fetchPoints: 'account/fetchPoints',
      setMessage: 'popup/setMessage',
      shareOnWall: 'project/shareOnWall',
      switchVisibilityDobrothonForm: 'project/switchVisibilityDobrothonForm',
      switchVisibilityDonationForm: 'project/switchVisibilityDonationForm',
    }),
    share() {
      this.shareOnWall({
        showMessage: this.setMessage,
        update: this.fetchPoints(),
      });
    },
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'
@import '../styles/buttons'

.project-action-panel
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
  .project-action-panel
    &__button
      width: 72%

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .project-action-panel
    &__button
      width: 64%

@media (min-width: $Media-SizeL)
  .project-action-panel
    &__button
      width: 56%
</style>
