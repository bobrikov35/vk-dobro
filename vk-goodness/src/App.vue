<template>
  <main class="main">
    <Header />
    <section class="panel">
      <router-view/>
    </section>
    <Footer />
  </main>
</template>

<script>
import { mapActions } from 'vuex';
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
      fetchCities: 'cities/fetchCities',
    }),
  },
  created() {
    this.fetchCities();
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
  +RobotoSansSerif()
  min-width: $Site-MinWidth
  color: $Text
  font-weight: 400

h1, h2, h3
  +RobotoSerif
  font-weight: 700
  line-height: 1.4em

a
  text-decoration: none

button, button:focus, input, input:focus
  border: none
  background: none
  outline: none

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
  +flexColumn()

.panel
  +flexColumn()
  flex-grow: 1

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
