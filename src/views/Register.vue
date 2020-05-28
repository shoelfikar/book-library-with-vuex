<template>
  <div>
    <div class="register">
      <CoverLogin />
      <Form />
    </div>
  </div>
</template>

<script>
import CoverLogin from '../components/module/CoverLogin'
import Form from '../components/module/Form'
export default {
  name: 'Register',
  components: {
    CoverLogin,
    Form
  } 
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .register{
    display: flex;
    flex-wrap: wrap;
  }
</style>
