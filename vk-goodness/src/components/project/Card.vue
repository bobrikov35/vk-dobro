<template>
  <div class="project-card">
    <div class="project-card__container">
      <div class="cs-card" :style="`background-image: url(${getProject.image})`">
        <div class="cs-card__header">
          <h3 class="cs-card__text">{{ getProject.city }}</h3>
          <h3 class="cs-card__text">{{ getProject.date }}</h3>
        </div>
        <p v-if="isFinished" class="cs-card__finish"><i class="fa fa-check-circle"></i></p>
        <p v-else-if="getProject.urgent" class="cs-card__urgent">СРОЧНО</p>
        <div class="cs-card__bottom-panel">
          <Progressbar vClass="cs-card__progressbar" :vValue="getProject.sum" :vMax="getProject.target" />
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
      getProject: 'project/getProject',
    }),
    isFinished() {
      return this.getProject.sum >= this.getProject.target;
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

.project-card
  background-color: $BackgroundSecondary
  +paddingTopBottomSingle($Project-PaddingVertical)
  &__container
    max-width: $Site-MaxWidth
    margin: 0 auto
</style>
