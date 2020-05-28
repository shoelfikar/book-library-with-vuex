<template>
  <div>
    <div class="container mt-2">
      <div class="info-detail col-md-8">
        <p class="category">Novel</p>
        <div class="title">
          <h3>Dilan 1990</h3>
          <p>Available</p>
        </div>
        <p>30 Juni 2020</p>
        <p>Pidi Baiq</p>
        <p class="deskripsi">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique labore recusandae velit optio sed et? Aspernatur provident repellendus iure omnis incidunt nisi enim, eius doloremque qui magnam. Mollitia, quisquam architecto?</p>
      </div>
      <div class="borrow-book col-md-4">
        <button class="btn btn-warning">Borrow</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailInfo'   
}
</script>

<style scoped>
  .container{
    display: flex;
  }
  .deskripsi{
    width: 680px;
    height: 180px;
    text-align: justify;
  }
  .title{
    display: flex;
    justify-content: space-between;
  }
  .title p{
    color: #99D815;
  }
  .btn{
    width: 190px;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 20px;
    margin-right: -100px;
  }
  .category{
    width: 105px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #FBCC38;
    border-radius: 15px;
  }
  .borrow-book{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
</style>
