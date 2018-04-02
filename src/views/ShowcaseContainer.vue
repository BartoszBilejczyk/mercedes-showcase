<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/car/mercedes">Car homepage</router-link>
    <router-link to="/car/mercedes/details">Details</router-link>
    <router-link to="/car/mercedes/configuration">Configuration</router-link>
    <router-link to="/test-drive">Test Drive</router-link>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'showcase'
  }
</script>

<style lang="scss" scoped>


</style>
