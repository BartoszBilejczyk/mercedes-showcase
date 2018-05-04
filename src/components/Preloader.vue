<template>
  <div class="preloader-wrapper">
    <div class="preloader">
      <div class="preloader--active" :style="preloaderWidth"></div>
    </div>
    <p class="copy bold light uppercase">Application is loading</p>
  </div>
</template>

<script>

  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'preloader',
    computed: {
      ...mapGetters([
        `getLoadingStatus`,
      ]),
//      cubicRootOfLoadingStatus() {
//        return Math.cbrt(this.getLoadingStatus)
//      },
      preloaderWidth() {
        return {
          'width': `calc(100% * ${this.getLoadingStatus})`
        }
      },
      preloaderPercent() {
        return `${this.getLoadingStatus}`
      }
    }
  }

</script>

<style lang="scss" scoped>

  .preloader {
    width: 400px;
    height: 3px;
    background: gray;
    position: relative;
    margin-bottom: 20px;

    &--active {
      position: absolute;
      top: 0;
      left: 0;
      height: 3px;
      background: white;
      transition: 0.7s ease;
    }

    &-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
      background: #030303;
    }
  }

</style>
