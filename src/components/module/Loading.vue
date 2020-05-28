<template>
  <div>
    <div class="spinner-grow spinner-grow-sm" role="status" @load="loading">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  methods: {
    loading () {
      setTimeout(() => {
        document.querySelector('.spinner-grow').classList.toggle('hide')
      }, 3000)
    }
  }
}
</script>

<style scoped>
  .hide{
    display: none;
  }
</style>
