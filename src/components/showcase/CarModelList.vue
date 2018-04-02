<template>
  <div>
    <div v-for="model in models">
      {{ model }} Model
    </div>
  </div>
</template>

<script>
  import CarModel from './CarModel.vue'

  export default {
    name: 'Car-Model-List',
    components: {
      CarModel
    }
  }
</script>

<style lang="scss" scoped>


</style>
