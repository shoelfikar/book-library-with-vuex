<template>
  <div>
    <div class="mycarousel">
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
      <div class="container-1">
        <h3>List Book</h3>
        <div class="list-book d-flex justify-content-start flex-wrap">
          <div class="col-md-3">
            <img src="../../assets/image/img/home/covernya.png" alt="" width="250">
            <h4>Dilan</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis repudiandae consequuntur laborum.</p>
          </div>
          <div class="col-md-3">
            <img src="../../assets/image/img/home/covernya.png" alt="" width="250">
            <h4>Dilan</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis repudiandae consequuntur laborum.</p>
          </div>
          <div class="col-md-3">
            <img src="../../assets/image/img/home/covernya.png" alt="" width="250">
            <h4>Dilan</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis repudiandae consequuntur laborum.</p>
          </div>
          <div class="col-md-3">
            <img src="../../assets/image/img/home/covernya.png" alt="" width="250">
            <h4>Dilan</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis repudiandae consequuntur laborum.</p>
          </div>
          <div class="col-md-3">
            <img src="../../assets/image/img/home/covernya.png" alt="" width="250">
            <h4>Dilan</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis repudiandae consequuntur laborum.</p>
          </div>
        </div>
        <!-- pagination -->
        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-center mb-4">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel'
}
</script>

<style scoped>
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
      width: 100%;
    }
    .container-1{
      margin:auto;
      width: 80vw;
      box-sizing: border-box;
    }
    .hide{
      display: none;
    }
</style>
