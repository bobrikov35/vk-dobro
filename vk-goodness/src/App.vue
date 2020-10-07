<template>
  <section class="main">
    <Header />
    <main class="panel">
      <router-view/>
    </main>
    <Footer />
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import { VK_PARAMS } from '@/app';
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  methods: {
    ...mapActions({
      fetchCities: 'projects/fetchCities',
    }),
    init() {
      this.fetchCities();
      if (VK_PARAMS.fragment.name === 'project') {
        this.$router.push(`/project/${VK_PARAMS.fragment.id}/`);
      } else if (VK_PARAMS.fragment.name === 'dobrothon') {
        this.$router.push(`/dobrothon/${VK_PARAMS.fragment.id}/`);
      }
    },
  },
  created() {
    this.init();
    this.$router.beforeRouteUpdate = this.beforeRouteUpdate;
  },
};
</script>

<style lang="sass">
@import './styles/var'
@import './styles/mixin'
@import './styles/article'

*
  box-sizing: border-box
  padding: 0
  margin: 0

body
  user-select: none
  min-width: $Site-MinWidth
  +RobotoSansSerif()
  color: $Text
  font-weight: 400
  line-height: 1.33em

h1, h2, h3
  +RobotoSerif
  font-weight: 700
  line-height: 1.4em

a
  text-decoration: none

button, button:focus,
input, input:focus
  outline: none
  background: none
  border: none

input
  &[type=number]
    appearance: none
    -moz-appearance: textfield
    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button
      -webkit-appearance: none

li
  list-style-type: none

.main
  min-height: 100vh
  +flexColumn

.panel
  +flexColumnGrow(1)

@media (max-width: $Media-SizeS)
  html
    font-size: 15px
  body, p, a
    font-size: 15px
  button, input, li, h3
    font-size: 17px
  h2
    font-size: 19px
  h1
    font-size: 21px

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  html
    font-size: 20px
  body, p, a
    font-size: 17px
  button, input, li, h3
    font-size: 19px
  h2
    font-size: 21px
  h1
    font-size: 23px

@media (min-width: $Media-SizeL)
  html
    font-size: 25px
  body, p, a
    font-size: 19px
  button, input, li, h3
    font-size: 21px
  h2
    font-size: 23px
  h1
    font-size: 25px
</style>
