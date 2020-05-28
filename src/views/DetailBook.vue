<template>
  <div>
    <div class="detail">
      <CoverBook />
      <DetailInfo />
    </div>
  </div>
</template>

<script>
import CoverBook from '../components/module/CoverBook'
import DetailInfo from '../components/module/DetailInfo'
export default {
  name: 'DetailBook',
  components: {
    CoverBook,
    DetailInfo
  } 
}
</script>

<style scoped>
  .detail{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* background-color: coral; */
  }
</style>
