<template>
  <transition name="slide-fade" appear mode="out-in">
    <div class="detail-images">
      <div class="detail-images__item" :style="{'backgroundImage': 'url(' + getActiveModel.exteriorImage + ')'}"></div>
      <div class="detail-images__item" :style="{'backgroundImage': 'url(' + getActiveModel.interiorImage + ')'}"></div>
    </div>
  </transition>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'Car-Details-Image',
    computed: {
      ...mapGetters([
        `getActiveModel`
      ])
    }
  }
</script>

<style lang="scss" scoped>

  .detail-images {
    width: 50%;

    &__item {
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100vh;
    }
  }

  .slide-fade-enter-active {
    transition: all 1.4s ease;
  }
  .slide-fade-leave-active {
    transition: all 1.4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(-100%);
    opacity: 0;
  }

</style>
