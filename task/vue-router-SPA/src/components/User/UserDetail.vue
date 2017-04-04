<template>
  <div>
    <h3>Selected User Detail Information</h3>
    <p>Selected User ID {{ $route.params.id }}</p>
    <router-link 
      type="button"
      :to="{ name: 'userEdit', params: { id: $route.params.id } }" 
      tag="button">Edit</router-link>
  </div>
</template>

<script>
  
</script>

<style lang="sass">
  
</style>