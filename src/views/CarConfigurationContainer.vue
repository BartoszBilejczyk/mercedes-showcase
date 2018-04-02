<template>
  <div>
    <CarConfigurationMain></CarConfigurationMain>
    <CarConfigurationNavigation></CarConfigurationNavigation>
  </div>
</template>

<script>
  import CarConfigurationMain from '../components/car-configuration/CarConfigurationMain.vue'
  import CarConfigurationNavigation from '../components/car-configuration/CarConfigurationNavigation.vue'

  export default {
    name: 'Car-configuration',
    components: {
      CarConfigurationMain,
      CarConfigurationNavigation
    }
  }
</script>

<style lang="scss" scoped>


</style>
