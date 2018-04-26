<template>
  <div class="model-box-wrapper">
    <div class="model-box" :style="{'backgroundImage': 'url(' + image + ')'}">
      <div class="model-box--tint row align-center justify-center" @click="goToModel">
        <p class="go-to-model">
          {{ name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Car-Model',
    props: ['name', 'image', 'carClassLink', 'classId'],
    methods: {
      goToModel() {
        this.$router.push({ name: 'car', params: { classId: this.classId }});
      }
    }
  }
</script>

<style lang="scss" scoped>

  .model-box {
    height: 350px;
    width: 350px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    &-wrapper {
      background: rgba(255,255,255,0.2);
      margin-right: 10px;
      padding: 20px 40px 20px 20px;
      position: relative;
    }

    &--tint {
      opacity: 0;
      background: rgba(0,0,0,0.85);
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      transition: all 0.3s ease;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .go-to-model {
    padding: 20px;
  }

</style>
