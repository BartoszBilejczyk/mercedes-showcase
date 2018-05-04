<template>
  <transition name="slide-fade" appear mode="out-in">
    <div class="car-details-main-info">
      <transition name="fade" appear mode="out-in">
        <div class="container">
          <!--<div class="navigation text-center row justify-around align-center copy copy&#45;&#45;small semi uppercase">-->
            <!--<router-link class="black styled-link styled-link&#45;&#45;on-light" :to="{ name: 'car', params: { model: 'mercedes' }}">Close Details</router-link>-->
            <!--<router-link class="black styled-link styled-link&#45;&#45;on-light" to="/test-drive">Arrange Test Drive</router-link>-->
            <!--<p class="black styled-link styled-link&#45;&#45;on-light" @click="goToConfiguration">Configure Vehicle</p>-->
          <!--</div>-->

          <div class="main-info">
            <h1 class="heading heading--primary black">{{ activeModel.name }}</h1>
            <h2 class="heading heading--secondary black">If there’s one thing that’s not in short supply at AMG, it’s confidence. Tobias Moers, Mercedes-AMG’s chairman and CEO, told us in no uncertain terms to compare the latest version of the brand’s sports car, the GT R, against the Porsche 911 GT3 RS. “Our car is faster,” he said. And when we asked where, the reply was as abrupt as it was unequivocal: “Everywhere.”</h2>
          </div>

          <div class="description-wrapper">
            <div class="container">
              <div class="row description-">
                <h3 class="title copy copy--large bold black">Fast and furious.</h3>
                <p class="description copy copy--dark">Sharpened racetrack performance comes courtesy of the intelligent lightweight construction incorporating aluminium and carbon, specific reinforcements in the body shell, the uprated twin-turbo V-8 engine with the specifically adapted seven-speed dual-clutch transmission, the innovative aerodynamics with active components, and the new suspension with active rear-wheel steering and uniball joints.</p>
              </div>

              <div class="divider"></div>

              <div class="row description-">
                <h3 class="title copy copy--large bold black">Modern luxury.</h3>
                <p class="description copy copy--dark">Mercedes-AMG uses an intelligent material mix for the structure of the AMG GT R: various aluminium alloys for the chassis and body, steel for the boot lid and magnesium for the front deck. A host of further measures contributes to the weight reduction as part of the AMG lightweight-performance strategy. The use of carbon fibre, the lightweight and high-strength material from motorsport, helps to achieve the ambitious goals. </p>
              </div>
            </div>
          </div>

          <div class="divider"></div>

          <div class="measurements">
            <div class="measurements__item row align-center justify-center">
              <div class="col col-xs-12 align-center">
                <p class="heading heading--primary black">Stats</p>
                <div class="divider divider--medium"></div>
                <div class="row align-center justify-center heading heading--secondary black">
                  <div class="col col-xs-3">
                  <p class="copy bold black">0-100 km/h</p>
                  <div class="divider divider--small"></div>
                  <p class="heading heading--secondary black">{{ activeModel.configurations.technicalInformation.acceleration.value }}{{ activeModel.configurations.technicalInformation.acceleration.unit }}</p>
                </div>
                  <div class="col col-xs-3">
                    <p class="copy bold black">Max speed</p>
                    <div class="divider divider--small"></div>
                    <p class="heading heading--secondary black">{{ activeModel.configurations.technicalInformation.topSpeed.value }}{{ activeModel.configurations.technicalInformation.topSpeed.unit }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="measurements__item row align-center justify-center">
              <div class="col col-xs-12 align-center">
                <p class="heading heading--primary black">Engine</p>
                <div class="divider divider--medium"></div>
                <div class="row align-center justify-between heading heading--secondary black">
                  <div class="col col-xs-3">
                    <span>{{ activeModel.configurations.technicalInformation.engine.powerHp.value }}{{ activeModel.configurations.technicalInformation.engine.powerHp.unit }} / {{ activeModel.configurations.technicalInformation.engine.powerKw .value}}{{ activeModel.configurations.technicalInformation.engine.powerKw.unit }}</span>
                  </div>
                  <div class="col col-xs-3">
                    <span>{{ activeModel.configurations.technicalInformation.engine.capacity.value }}{{ activeModel.configurations.technicalInformation.engine.capacity.unit }}</span>
                  </div>
                  <div class="col col-xs-3">
                    <span>{{ activeModel.configurations.technicalInformation.engine.engineTorque.value }}{{ activeModel.configurations.technicalInformation.engine.engineTorque.unit }}</span>
                  </div>
                  <div class="col col-xs-3">
                    <span>{{ activeModel.configurations.technicalInformation.engine.cylinder }} cylinders</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="measurements__item row align-center justify-center">
              <div class="col col-xs-12 align-center">
                <p class="heading heading--primary black">Fuel Economy</p>
                <div class="divider divider--medium"></div>
                <div class="row align-center justify-center black heading heading--secondary">
                  <div class="col col-xs-5">
                    <p class="copy copy--dark">City Min</p>
                    <span>{{ activeModel.configurations.technicalInformation.engine.fuelEconomy.fuelConsumptionCityMin.value }}{{ activeModel.configurations.technicalInformation.engine.fuelEconomy.fuelConsumptionCityMin.unit }}</span>
                  </div>
                  <div class="col col-xs-5">
                    <p class="copy copy--dark">City Max</p>
                    <span>{{ activeModel.configurations.technicalInformation.engine.fuelEconomy.fuelConsumptionOverlandMax.value }}{{ activeModel.configurations.technicalInformation.engine.fuelEconomy.fuelConsumptionOverlandMax.unit }}</span>                  </div>
                  <div class="col col-xs-5">
                    <p class="copy copy--dark">Journey Min</p>
                    <span>{{ activeModel.configurations.technicalInformation.engine.fuelEconomy.fuelConsumptionOverlandMin.value }}{{ activeModel.configurations.technicalInformation.engine.fuelEconomy.fuelConsumptionOverlandMin.unit }}</span>                  </div>
                  <div class="col col-xs-5">
                    <p class="copy copy--dark">Journey Max</p>
                    <span>{{ activeModel.configurations.technicalInformation.engine.fuelEconomy.fuelConsumptionOverlandMax.value }}{{ activeModel.configurations.technicalInformation.engine.fuelEconomy.fuelConsumptionOverlandMax.unit }}</span>                  </div>
                </div>
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
    name: 'Car-details-main-info',
    props: ['activeModel'],
    methods: {
      goToConfiguration() {
        this.$store.dispatch('setConfigurationEnvironment');
        this.$router.push(`/car/${this.$route.params.classId}/configuration`)
      }
    }
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

    &--medium {
      width: 50px;
      height: 2px;
      margin: 20px 0;
    }

    &--small {
      width: 25px;
      height: 2px;
      margin: 5px auto 15px;
    }
  }

  .measurements {
    margin: 140px 0;

    &__item {
      margin: 100px 0;
    }
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


configurations initial price
technicalInformation

acceleration
dimensions
engine - powerHp/powerKw engineTourqe capacity cylinder
top speed
transmission
kerbWeight
