<template>
  <div>
    <div class="container hide">
      <div class="card mt-1">
        <i class="fas fa-arrow-circle-left fa-3x" @click="backof"></i>
        <div class="card-body">
          <h1 class="text-center">History Peminjaman Buku</h1>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'History',
  methods: {
    backof () {
      const carousel = document.querySelector('.mycarousel')
      const history = document.querySelector('.container')
      carousel.classList.remove('hide')
      history.classList.add('hide')
    }
  }
}
</script>

<style scoped>
  .container{
    margin-top: 100px;
  }
  .fas{
    cursor: pointer;
    margin-top: 10px;
    margin-left: 10px;
  }
  .hide{
    display: none;
  }
</style>
