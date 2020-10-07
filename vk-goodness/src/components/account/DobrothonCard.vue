<template>
  <div class="account-dobrothon-card" :class="getUserId === vDobrothon.author && 'account-dobrothon-card_urgent'">
    <div class="account-dobrothon-card__container">
      <div class="cs-card" :style="`background-image: url(${project.image})`">
        <div class="cs-card__header">
          <h3 class="cs-card__text">{{ project.city }}</h3>
          <h2 class="cs-card__title">{{ project.title }}</h2>
        </div>
        <p v-if="isFinished" class="cs-card__finish"><i class="fa fa-check-circle"></i></p>
        <div class="cs-card__bottom-panel">
          <button class="cs-button-3 cs-card__button" @click="goToDobrothon">УЧАСТВОВАТЬ ПОВТОРНО</button>
          <Progressbar :vValue="vDobrothon.amount" :vMax="vDobrothon.target" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Progressbar from '@/components/objects/Progressbar.vue';

export default {
  name: 'DobrothonCard',
  components: {
    Progressbar,
  },
  props: {
    vDobrothon: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToDobrothon() {
      const path = `/dobrothon/${this.vDobrothon.id}`;
      if (this.$route.path !== path) this.$router.push(path);
    },
    resizeCard() {
      const card = this.$el.querySelector('.cs-card');
      card.style.height = `${card.clientWidth * 0.64}px`;
    },
  },
  computed: {
    ...mapGetters({
      getUserId: 'getUserId',
    }),
    isFinished() {
      return this.vDobrothon.amount >= this.vDobrothon.target;
    },
    project() {
      return this.vDobrothon.project;
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
@import '../styles/buttons'
@import '../styles/card'

.account-dobrothon-card
  background-color: $Background
  border-bottom: 1px solid $Border
  +paddingTopBottomSingle($Project-PaddingVertical)
  &_urgent
    background-color: $UrgentColor
  &__container
    max-width: $Site-MaxWidth
    font-weight: 700
    margin: 0 auto
</style>
