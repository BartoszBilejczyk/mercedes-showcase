<template>
  <div>
    <TestDriveConfirmation></TestDriveConfirmation>
    <TestDriveContactForm></TestDriveContactForm>
    <TestDriveInformationConfirmation></TestDriveInformationConfirmation>
  </div>
</template>

<script>
  import TestDriveConfirmation from '../components/test-drive/TestDriveConfirmation.vue'
  import TestDriveContactForm from '../components/test-drive/TestDriveContactForm.vue'
  import TestDriveInformationConfirmation from '../components/test-drive/TestDriveInformationConfirmation.vue'

  export default {
    name: 'Test-Drive-Contact-Container',
    components: {
      TestDriveConfirmation,
      TestDriveContactForm,
      TestDriveInformationConfirmation
    }
  }
</script>

<style lang="scss" scoped>


</style>
