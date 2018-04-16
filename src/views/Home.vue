<template>
    <!--<Preloader></Preloader>-->
    <div class="home">
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

  export default {
    name: 'home',
    components: {
      AppHeader
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
