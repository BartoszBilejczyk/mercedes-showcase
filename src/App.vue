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
  color: #2c3e50;
}

body {
  margin: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
