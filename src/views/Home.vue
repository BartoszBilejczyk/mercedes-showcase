<template>
    <!--<Preloader></Preloader>-->
    <div class="home">
      <router-link to="showcase">Showcase</router-link>
    </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>

  .home {
    background: radial-gradient(ellipse at center, rgba(0,0,0,0.80) 0%, #000000 100%), url('../assets/images/iris.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 150%;
    height: 100vh;
    width: 100%;
    max-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: white !important;
  }

</style>
