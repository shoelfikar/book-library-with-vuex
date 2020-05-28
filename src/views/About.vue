<template>
  <div>
    <h1>About</h1>
    <button class="btn btn-outline-success" @click="login">Click</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    login (event) {
      event.preventDefault()
      this.$swal({
        icon: 'success',
        html: 'Login Success!',
        showConfirmButton: false,
        timer: 3000
      })
    }
  }
}
</script>

<style scoped>

</style>
