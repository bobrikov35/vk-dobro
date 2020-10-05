<template>
  <div class="projects-card" :class="vProject.urgent || 'project-card_urgent'">
    <div class="projects-card__container">
      <div class="cs-card" :style="`background-image: url(${vProject.image})`">
        <div class="cs-card__header">
          <h3 class="cs-card__text">{{ vProject.city }}</h3>
          <h2 class="cs-card__title">{{ vProject.title }}</h2>
        </div>
        <p v-if="vProject.urgent" class="cs-card__urgent">СРОЧНО</p>
        <div class="cs-card__bottom-panel">
          <button class="cs-button-3 cs-card__button" @click="goToProject">ПОМОЧЬ</button>
          <Progressbar vClass="cs-card__progressbar" :vValue="vProject.sum" :vMax="vProject.target" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Progressbar from '@/components/objects/Progressbar.vue';

export default {
  name: 'Card',
  components: {
    Progressbar,
  },
  props: {
    vProject: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToProject() {
      const path = `/project/${this.vProject.path}`;
      if (this.$route.path !== path) this.$router.push(path);
    },
    resizeCard() {
      const card = this.$el.querySelector('.cs-card');
      card.style.height = `${card.clientWidth * 0.64}px`;
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

.projects-card
  background-color: $Background
  border-bottom: 1px solid $Border
  &_urgent
    background-color: $UrgentColor
  &__container
    max-width: $Site-MaxWidth
    font-weight: 700
    margin: 0 auto
</style>
