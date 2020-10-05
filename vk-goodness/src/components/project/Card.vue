<template>
  <div class="project-card">
    <div class="project-card__container">
      <div class="cs-card" :style="`background-image: url(${project.image})`">
        <div class="cs-card__header">
          <h3 class="cs-card__text">{{ project.city }}</h3>
          <h3 class="cs-card__text">{{ project.date }}</h3>
        </div>
        <p v-if="project.urgent" class="cs-card__urgent">СРОЧНО</p>
        <div class="cs-card__bottom-panel">
          <Progressbar vClass="cs-card__progressbar" :vValue="project.sum" :vMax="project.target" />
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
    sum() {
      return parseInt(this.vProject.sum, 10);
    },
    target() {
      return parseInt(this.vProject.target, 10);
    },
    ...mapGetters({
      project: 'project/getProject',
    }),
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

.project-card
  background-color: $BackgroundSecondary
  &__container
    max-width: $Site-MaxWidth
    font-weight: 700
    margin: 0 auto
</style>
