<template>
  <div>
    <AppHeader></AppHeader>
    <CarModelList></CarModelList>
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'car', params: { model: 'mercedes' }}">Car homepage</router-link>
    <router-link to="/car/mercedes/details">Details</router-link>
    <router-link to="/car/mercedes/configuration">Configuration</router-link>
    <router-link to="/test-drive">Test Drive</router-link>
  </div>
</template>

<script>
  import AppHeader from '../components/AppHeader.vue'
  import CarModelList from '../components/showcase/CarModelList.vue'

  export default {
    name: 'showcase',
    components: {
      AppHeader,
      CarModelList
    }
  }
</script>

<style lang="scss" scoped>


</style>
