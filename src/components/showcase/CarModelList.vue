<template>
  <div class="align-center fullheight car-model-list">
    <div v-for="(carClass, index) in classes">
      <CarModel :carClassLink="carClass._links.models" :classId="carClass.classId" :name="carClass.className" :image="carClass.classImage" :carClassindex="index" :key="index"></CarModel>
    </div>
  </div>
</template>

<script>
  import CarModel from './CarModel.vue'

  export default {
    name: 'Car-Model-List',
    props: ['classes'],
    data() {
      return {
//        models: [1,2,3,4,5,6,7,8,9]
      }
    },
    components: {
      CarModel
    }
  }
</script>

<style lang="scss" scoped>

  .car-model-list {
    padding-left: 150px;
    overflow-x: scroll;
    display: flex;
  }

</style>
