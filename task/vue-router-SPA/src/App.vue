<template>
  <div id="app">
    <h1>SPA</h1>
    <router-view name="gnb"></router-view>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
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

.fade-enter-active
  animation: fade-in 0.8s
.fade-leave-active
  animation: fade-out 0.8s

@keyframes fade-in
  from

  to
    opacity: 1
@keyframes fade-out
  from

  to
    opacity: 0
</style>
