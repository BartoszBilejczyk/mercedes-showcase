<template>
  <div class="showcase fullheight">
    <!--<button @click="setClasses()">jksadjkljkldsaas</button>-->

    <AppHeader></AppHeader>

      <CarModelList :classes="getClasses"></CarModelList>
        <!--<router-link to="/">Home</router-link>-->
        <!--<router-link :to="{ name: 'car', params: { model: 'mercedes' }}">Car homepage</router-link>-->
        <!--<router-link to="/car/mercedes/details">Details</router-link>-->
        <!--<router-link to="/car/mercedes/configuration">Configuration</router-link>-->
        <!--<router-link to="/test-drive">Test Drive</router-link>-->
        <!--<button @click="getCarLines()">Get Car Lines</button>-->

  </div>
</template>

<script>
  import AppHeader from '../components/AppHeader.vue'
  import CarModelList from '../components/showcase/CarModelList.vue'
  import {mapGetters, mapActions} from 'vuex'

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
        `getClasses`
      ]),
    },
    methods: {
      ...mapActions([
        `setClasses`
      ])
    },
    mounted() {
      if(!this.$store.state.classes.length) {
        this.$store.dispatch('setClasses');
      }
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
