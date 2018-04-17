<template>
    <div v-if="getLoading">
      <Preloader></Preloader>
    </div>
    <div v-else class="home">
      <AppHeader></AppHeader>
      <div class="hero">
        <h1 class="heading heading--hero">Explore <br> the Mercedes-Benz</h1>
        <router-link to="showcase">
          <p class="styled-link heading heading--secondary uppercase">See the vehicles</p>
        </router-link>
      </div>
    </div>
</template>

<script>
  import AppHeader from '../components/AppHeader.vue'
  import Preloader from '../components/Preloader.vue'
  import {mapGetters, mapActions} from 'vuex'
  import store from '../store'

  export default {
    name: 'home',
    beforeRouteEnter (to, from, next) {
      next(vm => vm.setData())
    },
    // when route changes and this component is already rendered,
    // the logic will be slightly different.
    beforeRouteUpdate (to, from, next) {
      this.setData();
      next()
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
          console.log('a')
          this.$store.dispatch('setData');
        }
      }
    },
    components: {
      AppHeader,
      Preloader
    }
  }
</script>

<style lang="scss" scoped>

  .home {
    background: linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.75) 100%), url('../assets/images/showcase-background.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    max-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero {
    text-align: left;

    h1 {
      letter-spacing: 7px;
    }

    p {
      float: right;
    }
  }

</style>
