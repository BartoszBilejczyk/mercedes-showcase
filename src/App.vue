<template>
    <div id="app">
      <transition name="fade" appear mode="out-in">
        <router-view/>
      </transition>

      <!--<div id="nav">-->
        <!--<router-link to="/">Home</router-link> |-->
        <!--<router-link to="/about">About</router-link>-->
      <!--</div>-->
    </div>
</template>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  margin: 0;
  min-height: 100vh;
  background: black;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
