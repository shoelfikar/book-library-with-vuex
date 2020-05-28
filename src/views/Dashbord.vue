<template>
  <div>
    <div class="dashbord">
      <Sidebar />
      <Aside />
    </div>
    <Modal />
  </div>
</template>

<script>
import Sidebar from '../components/module/Sidebar'
import Aside from '../components/module/Aside'
import Modal from '../components/module/Modal'
export default {
  name: 'Dashbord',
  components: {
    Sidebar,
    Aside,
    Modal
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
