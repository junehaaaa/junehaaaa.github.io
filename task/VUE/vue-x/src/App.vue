<template>
  <div id="app">
  Counter : {{ $store.state.count }}, counter is {{ evenOrOdd }}
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  computed : mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement'
  ])
}
</script>