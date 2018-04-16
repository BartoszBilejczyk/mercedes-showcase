<template>
  <div class="row no-gutters">
    <CarDetailsImage></CarDetailsImage>
    <CarDetailsMainInfo></CarDetailsMainInfo>
  </div>
</template>

<script>
  import CarDetailsImage from '../components/car-details/CarDetailsImage.vue'
  import CarDetailsMainInfo from '../components/car-details/CarDetailsMainInfo.vue'

  export default {
    name: 'Car-Details',
    components: {
      CarDetailsImage,
      CarDetailsMainInfo
    }
  }
</script>

<style lang="scss" scoped>


</style>
