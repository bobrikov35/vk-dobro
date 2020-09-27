<template>
  <div class="single">
    <div v-if="!isResponse" class="single__loading">
      <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <div v-else-if="isResponse && !isResult" class="single__error">
      <h2>Что-то пошло не так</h2>
    </div>
    <div v-else class="single__content">
      <header class="single__header">
        <h1 class="single__title">{{ project.title }}</h1>
        <Cover :vProject="project"/>
        <div class="single__control">
          <Button :vClick="pay" vClass="single__button" vType="type1" vTitle="Помочь деньгами" />
          <Button :vClick="repost" vClass="single__button"  vType="type1" vTitle="Помочь репостом" />
          <Button vClass="single__button" vType="type1" vTitle="Запустить ДОБРОфон" />
        </div>
        <p class="single__description">{{ project.description }}</p>
      </header>
      <Line />
      <Description :vHtml="project.html" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Cover from '@/components/single/Cover.vue';
import Button from '@/components/objects/Button.vue';
import Line from '@/components/objects/Line.vue';
import Description from '@/components/single/Description.vue';

export default {
  name: 'Single',
  components: {
    Cover,
    Button,
    Line,
    Description,
  },
  methods: {
    init() {
      this.fetchProject(this.$route.params.name);
    },
    repost() {
      this.shareOnWall(this.project.title);
    },
    pay() {
      this.makePayment({
        projectId: this.project.id,
        amount: 100,
      });
    },
    ...mapActions({
      fetchProject: 'single/fetchProject',
      shareOnWall: 'dataExchange/shareOnWall',
      makePayment: 'dataExchange/makePayment',
      getDonation: 'dataExchange/getDonationById',
    }),
  },
  computed: {
    ...mapGetters({
      isResponse: 'single/isResponse',
      isResult: 'single/isResult',
      project: 'single/getProject',
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
  +flexColumn
  flex-grow: 1
  background-color: $Background
  &__loading, &__error, &__header
    max-width: $Site-MaxWidth
    margin: 0 auto
  &__loading, &__error, &__content
    flex-grow: 1
  &__loading, &__error
    +flexCC()
  &__content
    background-color: $BackgroundSecondary
  &__header
    +flexColumnCC
  &__title
    text-align: center
  &__control
    +flexColumnCC()
  &__button
    width: inherit
    &:first-of-type
      margin-top: 0
  &__description
    line-height: 1.33em
    text-align: justify

@media (max-width: $Media-SizeS)
  .single
    &__loading
      font-size: 3rem
    &__title
      padding: 0.5rem 2% 0.75rem
    &__control
      width: 92%
      padding: 0.75rem
    &__button
      padding: 0.5rem
      margin-top: 0.5rem
    &__description
      +paddingRightBottomLeft(2%, 0.75rem, 2%)

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  .single
    &__loading
      font-size: 3.5rem
    &__title
      padding: 0.625rem 4% 0.94rem
    &__control
      width: 82%
      padding: 1.125rem
    &__button
      padding: 0.75rem
      margin-top: 0.75rem
    &__description
      +paddingRightBottomLeft(4%, 1.125rem, 4%)

@media (min-width: $Media-SizeL)
  .single
    &__loading
      font-size: 4rem
    &__title
      padding: 0.75rem 6% 1.125rem
    &__control
      width: 72%
      padding: 1.5rem
    &__button
      padding: 1rem
      margin-top: 1rem
    &__description
      +paddingRightBottomLeft(6%, 1.5rem, 6%)
</style>
