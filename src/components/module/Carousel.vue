<template>
  <div>
    <div class="carousel" data-flickity='{"wrapAround": true, "autoPlay": 1500 }'>
      <div class="carousel-cell">
        <img src="../../assets/image/img/home/covernya.png" alt="">
      </div>
      <div class="carousel-cell">
        <img src="../../assets/image/img/home/react-native.png" alt="">
      </div>
      <div class="carousel-cell">
        <img src="../../assets/image/img/home/ubur-ubur.png" alt="">
      </div>
    </div>
    <!-- card-list -->
    <!-- <div class="card-list">
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
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Carousel'
}
</script>

<style scoped>
  * { box-sizing: border-box; }

    body { font-family: sans-serif; }

    .carousel {
      background:#ffffff;
      width:900px;
      height:250px;
      margin:70px auto;
      box-sizing: border-box;
    }
    .carousel-cell {
      width: 40%;
      height: 250px;
      margin-right: 20px;
      margin-top:25px;
      border-radius: 20px;
      border-radius: 5px;
    }
    .carousel-cell img{
      width: 350px;
      height: 200px;
      margin-right: 20px;
    }
    .list-book{
      box-sizing: border-box;
      width: 700px;
      margin: auto;
    }
</style>
