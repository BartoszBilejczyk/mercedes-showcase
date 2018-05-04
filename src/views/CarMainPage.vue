<template>
  <div class="car" :style="backgroundImageObject">
    <div class="container fullheight">
      <AppHeader></AppHeader>
      <div class="car-header">
        <h1 class="heading heading--hero">{{ getActiveModel.name }} </h1>
        <p class="copy copy--x-large">
          {{ getActiveModel.priceInformation.price }} <span class="copy copy--faded">{{ getActiveModel.priceInformation.currency }}</span>
        </p>
        <router-link class="heading heading--secondary uppercase styled-link" :to="{ name: 'car-details' }">See more</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import AppHeader from '../components/AppHeader.vue'

  export default {
    name: 'Car main page',
    computed: {
      ...mapGetters([
        `getActiveModel`
      ]),
      backgroundImageObject() {
        return {
          backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.80) 40%, rgba(0,0,0,0.20) 60%, rgba(0,0,0,0.90) 95%, #000000 100%), url(' + this.getActiveModel.images.EXT020.url + ')'
        }
      }
    },
    beforeCreate() {
      this.$store.dispatch('setCurrentModel', {
        classId: this.$route.params.classId
      });
    },
    components: {
      AppHeader
    }
  }
</script>

<style lang="scss" scoped>

  @import '../assets/styles/main.scss';

  .car {
    /*background: linear-gradient(90deg, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.80) 40%, rgba(0,0,0,0.20) 60%, rgba(0,0,0,0.90) 95%, #000000 100%), url('../assets/images/mercedes-amg-gtr.jpg');*/
    background-position: 15% 50%;
    background-repeat: no-repeat;
    background-size: 140%;

    > .container {
      position: relative;
    }

    &-header {
      text-align: left;
      @include center(vertical);

      @include md-up {
        width: 60%;
      }

      @include lg-up {
        width: 70%;
      }

      @include xl-up {
        width: 60%;
      }
    }

    &-images-carousel {
      position: absolute;
      bottom: 30px;
      width: 70%;
      right: 0;
    }
  }

  .styled-link {
    margin-top: 20px;
  }

  .thumbnail {
    height: 100px;
  }


</style>
