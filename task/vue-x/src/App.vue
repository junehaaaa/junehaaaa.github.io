<template>
  <div id="app">
  {{ $store.state.count }}
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'app',
  methods: mapActions([
    'increment',
    'decrement'
  ])
}
</script>