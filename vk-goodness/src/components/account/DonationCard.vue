<template>
  <div class="account-donations-card">
    <div class="account-donations-card__container">
      <div class="cs-card account-donations-card__cover" :style="`background-image: url(${project.image});`"
           @click="goToProject">
        <div class="cs-card__header">
          <h3 class="cs-card__text">{{ project.city }}</h3>
          <h2 class="cs-card__title">{{ project.title }}</h2>
        </div>
        <div class="cs-card__bottom-panel">
          <Progressbar :vBarVisibility="false" :vValue="vDonation.amount" :vMax="project.target" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Progressbar from '@/components/objects/Progressbar.vue';

export default {
  name: 'DonationCard',
  props: {
    vDonation: {
      type: Object,
      required: true,
    },
  },
  components: {
    Progressbar,
  },
  methods: {
    goToProject() {
      const path = `/project/${this.project.path}`;
      if (this.$route.path !== path) this.$router.push(path);
    },
    resizeCard() {
      const card = this.$el.querySelector('.cs-card');
      card.style.height = `${card.clientWidth * 0.40}px`;
    },
  },
  computed: {
    project() {
      return this.vDonation.project;
    },
  },
  created() {
    window.addEventListener('resize', this.resizeCard);
  },
  mounted() {
    this.resizeCard();
  },
};
</script>

<style scoped lang="sass">
@import '../../styles/var'
@import '../../styles/mixin'
@import '../styles/card'

.account-donations-card
  background-color: $Background
  border-bottom: 1px solid $Border
  +paddingTopBottomSingle($Project-PaddingVertical)
  &_urgent
    background-color: $UrgentColor
  &__container
    max-width: $Site-MaxWidth
    font-weight: 700
    margin: 0 auto
  &__cover
    cursor: pointer
</style>
