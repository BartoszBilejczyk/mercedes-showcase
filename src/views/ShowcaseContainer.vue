<template>
  <div class="showcase fullheight">
    <!--<button @click="setData()">jksadjkljkldsaas</button>-->

    <AppHeader></AppHeader>

      <CarModelList :classes="getData"></CarModelList>
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
  import store from '../store'

  export default {
    name: 'showcase',
    data () {
      return {
        loading: false
      }
    },
    computed: {
      ...mapGetters([
        `getData`,
        'getLoading'
      ]),
    },
    methods: {
      ...mapActions([
        `setData`
      ]),
      setData() {
        if (!this.getData.length) {
          this.$store.dispatch('setData');
        }
      }
    },
   mounted() {
     this.$store.dispatch('setData');
   },
   beforeRouteEnter (to, from, next) {
     return store.dispatch('setData').then(next);
   },
   beforeRouteUpdate (to, from, next) {
     return this.$store.dispatch('setData').then(next);
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
