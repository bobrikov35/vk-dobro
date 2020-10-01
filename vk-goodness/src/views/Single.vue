<template>
  <div class="single">
    <div v-if="isLoading" class="single__loading">
      <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <div v-else-if="!isLoading && !isResult" class="single__error">
      <h2>Что-то пошло не так</h2>
    </div>
    <div v-else class="single__content" @touchmove="stopEvent" @wheel="stopEvent">
      <header class="single__header">
        <h1 class="single__title">{{ project.title }}</h1>
        <Cover :vProject="project" />
        <div class="single__control">
          <Button vClass="single__button" vType="type1" vTitle="Помочь деньгами" :vClick="switchPayForm" />
          <Button vClass="single__button" vType="type1" vTitle="Помочь репостом" :vClick="share" />
          <Button vClass="single__button" vType="type1" vTitle="Запустить ДОБРОфон" :vClick="switchCreatorDobrothon" />
        </div>
        <p class="single__description">{{ project.description }}</p>
      </header>
      <Line />
      <Description :vHtml="project.html" />
      <Donation />
      <Dobrothon />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Cover from '@/components/single/Cover.vue';
import Button from '@/components/objects/Button.vue';
import Line from '@/components/objects/Line.vue';
import Description from '@/components/single/Description.vue';
import Donation from '@/components/single/Donation.vue';
import Dobrothon from '@/components/single/Dobrothon.vue';

export default {
  name: 'Single',
  components: {
    Cover,
    Button,
    Line,
    Description,
    Donation,
    Dobrothon,
  },
  methods: {
    init() {
      this.fetchProject(this.$route.params.name);
    },
    stopEvent(event) {
      if (this.isShowPayForm || this.isShowCreatorDobrothon) {
        event.preventDefault();
      }
    },
    share() {
      this.shareOnWall(this.project.title);
    },
    ...mapActions({
      fetchProject: 'project/single/fetchProject',
      getDonation: 'account/donations/fetchDonationsById',
      shareOnWall: 'vkBridge/shareOnWall',
      switchCreatorDobrothon: 'project/switchCreatorDobrothon',
      switchPayForm: 'project/switchPayForm',
    }),
  },
  computed: {
    ...mapGetters({
      isLoading: 'project/single/isLoading',
      isResult: 'project/single/isResult',
      project: 'project/single/getProject',
      isShowCreatorDobrothon: 'project/isShowCreatorDobrothon',
      isShowPayForm: 'project/isShowPayForm',
    }),
  },
  watch: {
    '$route.params.name': 'init',
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped lang="sass">
@import '../styles/var'
@import '../styles/mixin'

.single
  background-color: $Background
  +flexColumn
  flex-grow: 1
  &__loading, &__error, &__header
    max-width: $Site-MaxWidth
    margin: 0 auto
  &__loading, &__error
    +flexCC()
  &__loading, &__error, &__content
    flex-grow: 1
  &__loading
    font-size: 3rem
  &__content
    background-color: $BackgroundSecondary
  &__header
    +flexColumnCC
  &__title
    text-align: center
    padding: 0.50rem
  &__control
    +flexColumnCC()
    padding: 0.85rem
  &__button
    width: 100%
    padding: 0.60rem
    margin-top: 0.60rem
    &:first-of-type
      margin-top: 0
  &__description
    line-height: 1.33em
    text-align: justify
    padding-bottom: 0.85rem

@media (max-width: $Media-SizeS)
  .single
    &__title
      +paddingRightLeftSingle(2%)
    &__control
      width: 88%
    &__description
      +paddingRightLeftSingle(2%)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .single
    &__title
      +paddingRightLeftSingle(4%)
    &__control
      width: 80%
    &__description
      +paddingRightLeftSingle(4%)

@media (min-width: $Media-SizeL)
  .single
    &__title
      +paddingRightLeftSingle(6%)
    &__control
      width: 72%
    &__description
      +paddingRightLeftSingle(6%)
</style>
