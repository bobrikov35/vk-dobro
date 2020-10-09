<template>
  <div class="dobrothon-card">
    <div class="dobrothon-card__container">
      <div class="cs-card" :style="`background-image: url(${project.image})`">
        <div class="cs-card__header">
          <h3 v-if="project.city" class="cs-card__text dobrothon-card__text">{{ project.city }}</h3>
          <h3 v-if="project.date" class="cs-card__text dobrothon-card__text">{{ project.date }}</h3>
        </div>
        <p v-if="isFinished" class="cs-card__finish"><i class="fa fa-check-circle"></i></p>
        <div class="cs-card__bottom-panel">
          <Progressbar vClass="cs-card__progressbar" :vValue="getDobrothon.amount" :vMax="getDobrothon.target" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Progressbar from '@/components/objects/Progressbar.vue';

export default {
  name: 'Card',
  components: {
    Progressbar,
  },
  methods: {
    resizeCard() {
      const card = this.$el.querySelector('.cs-card');
      card.style.height = `${card.clientWidth * 0.64}px`;
    },
  },
  computed: {
    ...mapGetters({
      getDobrothon: 'dobrothon/getDobrothon',
    }),
    isFinished() {
      return this.getDobrothon.amount >= this.getDobrothon.target;
    },
    project() {
      return this.getDobrothon.project;
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

.dobrothon-card
  background-color: $BackgroundSecondary
  +paddingTopBottomSingle($Project-PaddingVertical)
  &__container
    max-width: $Site-MaxWidth
    margin: 0 auto
</style>
