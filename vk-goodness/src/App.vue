<template>
  <main class="main">
    <Header />
    <section class="panel">
      <router-view/>
    </section>
  </main>
</template>

<script>
import Header from '@/components/header/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
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

button
  outline: none

li
  list-style-type: none

.main
  height: 100vh
  +flexColumn()

.panel
  flex-grow: 3

@media (max-width: $Media-SizeS)
  body
    font-size: 2rem

@media (min-width: $Media-MinSizeM) and (max-width: $Media-MaxSizeM)
  body
    font-size: 2.25rem

@media (min-width: $Media-SizeL)
  body
    font-size: 2.5rem
</style>
