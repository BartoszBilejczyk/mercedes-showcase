<template>
  <div class="align-center fullheight car-model-list">
    <div v-for="(carClass, index) in filteredClasses">
      <CarModel :carClassLink="carClass._links.models" :classId="carClass.classId" :name="carClass.className" :image="carClass.classImage" :carClassindex="index" :key="index"></CarModel>
    </div>
  </div>
</template>

<script>
  import CarModel from './CarModel.vue'

  export default {
    name: 'Car-Model-List',
    props: ['classes'],
    computed: {
      filteredClasses() {
        return this.classes.slice(0, 10);
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
