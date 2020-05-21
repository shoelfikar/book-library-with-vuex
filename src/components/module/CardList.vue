<template>
  <div class="card-list">
    <h3>List Book</h3>
    <div class="list-book">
      <div class="card-book">
        <div class="card" style="width: 18rem;">
          <img src="../../assets/image/img/home/covernya.png" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardList'
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .list-book{
    box-sizing: border-box;
    width: 700px;
    margin: auto;
  }
  /* .card-list{
    width: 900px;
  } */
</style>
