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
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
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

html
  font-size: 16px

body
  user-select: none
  min-width: $Site-MinWidth
  +RobotoSansSerif()
  color: $Text
  font-weight: 400

a
  text-decoration: none

h1, h2, h3
  +RobotoSerif
  font-weight: bold

li
  list-style-type: none

.main
  height: 100vh
  +flexColumn()

.panel
  flex-grow: 1

@media (max-width: $Media-SizeS)
  p
    font-size: 1rem
  h1
    font-size: 1.375rem
    line-height: 1.375rem * 1.25
  h2
    font-size: 1.25rem
    line-height: 1.25rem * 1.25
  h3
    font-size: 1.125rem
    line-height: 1.125rem * 1.25

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  p
    font-size: 1.125rem
  h1
    font-size: 1.5rem
    line-height: 1.5rem * 1.25
  h2
    font-size: 1.375rem
    line-height: 1.375rem * 1.25
  h3
    font-size: 1.25rem
    line-height: 1.25rem * 1.25

@media (min-width: $Media-SizeL)
  p
    font-size: 1.25rem
  h1
    font-size: 1.625rem
    line-height: 1.625rem * 1.25
  h2
    font-size: 1.5rem
    line-height: 1.5rem * 1.25
  h3
    font-size: 1.375rem
    line-height: 1.375rem * 1.25
</style>
