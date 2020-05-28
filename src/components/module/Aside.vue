<template>
  <div>
    <div class="aside">
      <div class="navbar-aside col-md-12">
        <div class="aside-burger">
          <i class="icon-burger fas fa-bars fa-2x" @click="asideClick"></i>
        </div>
        <div class="sorting">
          <select name="" id="" class="mr-2">
            <option value="1">Komik</option>
            <option value="1">Novel</option>
            <option value="1">Sejarah</option>
          </select>
          <select name="" id="">
            <option value="1">Terbaru</option>
            <option value="1">Best Seller</option>
            <option value="1">Lama</option>
          </select>
        </div>
        <div class="search">
          <i class="fas fa-search fa-2x"></i>
          <input type="text"
          placeholder="Search Book"
          />
        </div>
        <div class="logo">
          <img src="../../assets/image/logo.png" alt="">
          <h4>Library</h4>
        </div>
      </div>
      <Carousel />
      <Profil />
      <History />
    </div>
  </div>
</template>

<script>
import Carousel from '../module/Carousel'
import Profil from '../module/Profil'
import History from '../module/History'
export default {
  name: 'Aside',
  components: {
    Carousel,
    Profil,
    History
  },
  methods: {
    asideClick () {
      const sidebar = document.querySelector('.sidebar')
      const aside = document.querySelector('.aside')
      const burger = document.querySelector('.icon-burger')
      const burgerIcon = document.querySelector('.burger-icon')
      const sidebarMenu = document.querySelector('.sidebar-menu')
      const logo = document.querySelector('.logo')
      logo.style.marginRight = '230px'
      aside.classList.toggle('full')
      sidebar.classList.toggle('hide')
      burger.classList.toggle('burger-hide')
      burgerIcon.classList.toggle('hide-burger')
      setTimeout(() => {
        sidebarMenu.style.display = 'flex'
      }, 900)
    }
  }
}
</script>

<style  scoped>
  .aside{
    width: 100vw;
    height:100%;
    transition: 1s;
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
    position: relative;
    /* overflow:hidden; */
  }
  .navbar-aside{
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    background-color: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    margin-bottom: 35px;
    position: fixed;
    top: 0;
    z-index: 10;
  }
  .sorting{
    margin-left: -150px;
  }
  .sorting select{
    border: none;
  }
  .aside-burger{
    display: flex;
    margin-left: 5px;
  }
  .search{
    position: relative;
    margin-left: -90px;
  }
  .search .fas{
    position: absolute;
    top: 7px;
    left: 10px;
    color: #CACACA;
  }
  .search input{
    width: 350px;
    height: 43px;
    border-radius: 20px;
    border: 1px solid #CACACA;
    outline: none;
    font-size: 17px;
    padding-left: 45px;
  }
  .logo{
    display: flex;
    align-items: center;
    margin-right: 10px;
    transition: 1s;
  }
  .aside-burger i{
    margin-top: 5px;
    cursor: pointer;
  }
  .full{
    width: 83vw;
  }
  .burger-hide{
    display: none;
  }
  .hide{
    display: none;
  }
</style>
