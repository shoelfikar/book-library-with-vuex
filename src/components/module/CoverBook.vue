<template>
  <div>
    <div class="cover-book">
      <div class="fitur">
        <div class="back">
          <i class="fas fa-arrow-circle-left fa-3x mt-2 ml-2" @click="back"></i>
        </div>
        <div class="admin mt-3 ml-3">
          <button class="btn btn-outline-secondary">Edit</button>
          <button class="btn btn-outline-secondary">Delete</button>
        </div>
      </div>
      <div class="mini-cover">
        <div class="book-cover">
          <img src="../../assets/image/img/home/mini-cover.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoverBook',
  methods: {
    back () {
      this.$router.go('/dashbord')
    }
  }    
}
</script>

<style  scoped>
  .cover-book{
    width: 100vw;
    height: 454px;
    background-color: burlywood;
    background-image: url('../../assets/image/img/home/covernya (1).png');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
  }
  .cover-book .fas{
    cursor: pointer;
  }
  .fitur{
    display: flex;
    justify-content: space-between;
    margin-bottom: 220px;
  }
  .admin{
    margin-right: 20px;
  }
  .mini-cover{
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .book-cover{
    width: 200px;
    height: 288px;
    /* background-color: chartreuse; */
    margin-right: 40px;
  }
  .book-cover img{
    width: 200px;
    height: 288px;
  }
  .btn{
    width: 120px;
    height: 35px;
    margin-right: 10px;
  }
</style>
