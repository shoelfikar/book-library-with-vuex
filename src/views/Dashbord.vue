<template>
  <div>
    <div class="dashbord">
      <Sidebar />
      <Aside />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/module/Sidebar'
import Aside from '../components/module/Aside'
export default {
  name: 'Dashbord',
  components: {
    Sidebar,
    Aside
  }
}
</script>

<style scoped>
  .dashbord{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
</style>
