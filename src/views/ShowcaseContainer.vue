<template>
  <div class="showcase fullheight">
    <AppHeader></AppHeader>
    <CarModelList :classes="getData"></CarModelList>
  </div>
</template>

<script>
  import AppHeader from '../components/AppHeader.vue'
  import CarModelList from '../components/showcase/CarModelList.vue'
  import {mapGetters, mapActions} from 'vuex'
  import store from '../store'

  export default {
    name: 'showcase',
    data () {
      return {
        carLines: [],
        loading: false
      }
    },
    computed: {
      ...mapGetters([
        `getData`
      ]),
    },
    components: {
      AppHeader,
      CarModelList
    }
  }
</script>

<style lang="scss" scoped>

  .showcase {
    background: radial-gradient(ellipse at center, rgba(0,0,0,0.80) 0%, #000000 100%), url('../assets/images/showcase-background.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>
