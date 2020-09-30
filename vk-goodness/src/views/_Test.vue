<template>
  <div class="test">
    <div class="test__container">
      <Button :vClick="getAccessToken" vTitle="Get access token" vClass="test__button"/>
      <Button :vClick="getAchievementsById" vTitle="Get achievements" vClass="test__button"/>
      <Button :vClick="getDonationById" vTitle="Get donations" vClass="test__button"/>
      <Button :vClick="invite" vTitle="Invite" vClass="test__button"/>
      <Button :vClick="makeDobrothon" vTitle="Make Dobrothon" vClass="test__button"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Button from '@/components/objects/Button.vue';

export default {
  name: '_Test',
  components: {
    Button,
  },
  methods: {
    ...mapActions({
      getAccessToken: 'vkBridge/getAccessToken',
      getAchievementsById: 'vkBridge/getAchievementsById',
      getDonationById: 'vkBridge/getDonationById',
      invite: 'vkBridge/invite',
      makeDobrothon: 'vkBridge/makeDobrothon',
    }),
  },
};
</script>

<style scoped lang="sass">
@import '../styles/var'

.test
  &__container
    max-width: $Site-MaxWidth
    display: flex
    flex-direction: column
    align-items: center
    padding: 1rem
  &__button
    width: 80%
    display: inline-block
    margin-top: 1rem
    &:first-of-type
      margin-top: 0
</style>
