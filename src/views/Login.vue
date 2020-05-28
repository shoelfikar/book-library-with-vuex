<template>
  <div>
    <div class="login">
      <CoverLogin />
      <FormLogin />
    </div>
  </div>
</template>

<script>
import CoverLogin from '../components/module/CoverLogin'
import FormLogin from '../components/module/FormLogin'
export default {
  name: 'Login',
  components: {
    CoverLogin,
    FormLogin
  }
}
</script>

<style scoped>
  .login{
    display: flex;
    flex-wrap: wrap;
  }
</style>
