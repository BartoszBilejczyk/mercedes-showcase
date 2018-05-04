<template>
  <div>
    <header>
      <router-link to="/showcase">
        <img class="brand" src="../assets/images/mercedes-logo.svg" alt="mercedes-logo">
      </router-link>
    </header>
    <!--<Navigation></Navigation>-->
  </div>
</template>

<script>
  import Navigation from './Navigation.vue'

  export default {
    name: 'header',
    data() {
      return {
      }
    },
    components: {
      Navigation
    }
  }
</script>

<style lang="scss">

  header {
    position: fixed;
    top: 30px;
    left: 80px;

    img.brand {
      width: 80px;
    }
  }

</style>
