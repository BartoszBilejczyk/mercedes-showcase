<template>
  <div class="row no-gutters">
    <CarDetailsImage></CarDetailsImage>
    <CarDetailsMainInfo :activeModel="getActiveModel"></CarDetailsMainInfo>
  </div>
</template>

<script>
  import CarDetailsImage from '../components/car-details/CarDetailsImage.vue'
  import CarDetailsMainInfo from '../components/car-details/CarDetailsMainInfo.vue'
  import {mapGetters} from 'vuex'

  export default {
    name: 'Car-Details',
    data() {
      return {
        windowHeight: null
      }
    },
    computed: {
      ...mapGetters([
        `getActiveModel`
      ]),
    },
    methods: {
      handleScroll: function (event) {
        if (window.scrollY === window.outerHeight) {
          console.log('a')
        }
      }
    },
    created: function () {
      this.windowHeight = window.outerHeight;
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    components: {
      CarDetailsImage,
      CarDetailsMainInfo
    }
  }
</script>

<style lang="scss" scoped>


</style>
