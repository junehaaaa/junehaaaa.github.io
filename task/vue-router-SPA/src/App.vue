<template>
  <div id="app">
    <h1>SPA</h1>
    <app-nav></app-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
export default {
  name: 'app',
  components: {
    appNav: Navigation
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  margin-top: 60px

h1, h2 
  font-weight: normal

ul 
  list-style-type: none
  padding: 0

li 
  display: inline-block
  margin: 0 10px

a 
  color: #42b983

.router-link-active,
.current-page
  text-decoration: none
  font-weight: 800

</style>
