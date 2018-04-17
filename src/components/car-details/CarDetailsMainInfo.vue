<template>
  <transition name="slide-fade" appear mode="out-in">
    <div class="car-details-main-info">
      <transition name="fade" appear mode="out-in">
        <div class="container">
          <div class="navigation text-center row justify-around align-center copy copy--small semi uppercase">
            <router-link class="black styled-link styled-link--on-light" :to="{ name: 'car', params: { model: 'mercedes' }}">Close Details</router-link>
            <router-link class="black styled-link styled-link--on-light" to="/test-drive">Arrange Test Drive</router-link>
            <router-link class="black styled-link styled-link--on-light" :to="{ path: 'configuration' }">Configure Vehicle</router-link>
          </div>

          <div class="main-info">
            <h1 class="heading heading--primary black">AMG GT-R</h1>
            <h2 class="heading heading--secondary black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus omnis porro quos. Animi asperiores eius fugiat illum inventore laborum quisquam, quod. Maxime natus numquam veniam. Itaque optio quas reprehenderit similique!</h2>
          </div>

          <div class="description-wrapper">
            <div class="container">
              <div class="row description-">
                <h3 class="title copy copy--large bold black">Fast and furious.</h3>
                <p class="description copy copy--dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cum ex, iusto laudantium nam nulla obcaecati qui reiciendis repellendus reprehenderit, similique soluta vitae voluptates. Animi consequuntur ducimus numquam quos sapiente?</p>
              </div>

              <div class="divider"></div>

              <div class="row description-">
                <h3 class="title copy copy--large bold black">Modern luxury.</h3>
                <p class="description copy copy--dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A commodi, consectetur cumque, debitis delectus distinctio ea fuga iste minus nam nemo officiis porro quibusdam sapiente sit ut velit voluptas voluptate?</p>
              </div>
            </div>
          </div>

          <div class="divider"></div>

          <div class="measurements">
            <div class="row align-center justify-around">
              <div class="col">
                <p class="copy bold black">Power</p>
                <div class="divider divider--small"></div>
                <p class="heading heading--secondary black">450 HP</p>
              </div>
              <div class="col">
                <p class="copy bold black">0-100 km/h</p>
                <div class="divider divider--small"></div>
                <p class="heading heading--secondary black">3.5s</p>
              </div>
              <div class="col">
                <p class="copy bold black">Max speed</p>
                <div class="divider divider--small"></div>
                <p class="heading heading--secondary black">354 km/h</p>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Car-details-main-info'
  }
</script>

<style lang="scss" scoped>

  @import '../../assets/styles/main.scss';

  .car-details-main-info {
    width: 50%;
    background: white;
    color: black;
  }

  .navigation {
    position: fixed;
    width: 50%;
    background: #fff;
    padding: 30px 0;
    top: 0;
    left: 50%;
    margin: 0;

    a {
      width: 33%;
    }

    .styled-link {
      &:after {
        width: 20%;
        left: 40%;
      }

      &:hover:after {
        width: 25%;
        left: 37.5%;
        bottom: -5px;
      }
    }
  }

  .main-info {
    > h1 {
      margin: 170px 0 120px;
    }

    margin-bottom: 100px;
  }

  .description-wrapper {
    text-align: left;

    .row {
      @include sm-up {
        flex-wrap: nowrap;
      }
    }

    .title {
      width: 100px;
    }

    .description {
      width: calc(100% - 100px);
    }
  }

  .divider {
    margin: 100px auto;
    width: 40px;
    height: 3px;
    background: pal(black);

    &--small {
      width: 25px;
      height: 2px;
      margin: 5px auto 15px;
    }
  }

  .measurements {
    margin: 140px 0;
  }


  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s ease;
    transition-delay: 1.2s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .slide-fade-enter-active {
    transition: all 1.4s ease;
  }
  /*.slide-fade-leave-active {*/
    /*transition: all 1.4s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
  /*}*/
  .slide-fade-enter
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(100%);
    opacity: 0;
  }

</style>
