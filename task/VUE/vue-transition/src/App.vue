<template>
  <div id="app" class="container">
    <div class="columns">
      <div class="column is-6-offset-3">
        <h1 class="title is-2">VUE JS TRANSITION</h1>
        <button 
          type="button" 
          class="button is-primary" 
          @click="show_noti = !show_noti">{{show_noti ? 'Hide' : 'Show'}} alret</button>

        <transition name="fade">
          <div class="notification is-warning" v-if="show_noti">
          <button class="delete" aria-label="delete notification" @click="show_noti = false"></button>
            Warning lorem ipsum dolor sit amet, consectetur
            adipiscing elit lorem ipsum dolor sit amet,
            consectetur adipiscing elit
          </div>
        </transition>  

      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      show_noti: true
    }
  }
}
</script>

<style lang="sass">
.notification
  margin-top: 20px

.fade-enter,
.fade-leave-to
  opacity: 0
.fade-enter-active,
.fade-leave-active
  transition: opacity 1s ease

</style>
