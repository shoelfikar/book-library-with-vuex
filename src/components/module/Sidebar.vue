<template>
  <div>
    <div class="sidebar hide">
      <div class="burger">
        <i class="burger-icon hide-burger fas fa-bars fa-2x" @click="sidebarClick"></i>
      </div>
      <div class="sidebar-menu">
        <div class="profil">
          <div class="d-flex flex-column justify-content-center">
            <img class="image-profil" src="../../assets/image/display-name.png" alt="">
          </div>
          <div class="name-profil">
            <h4>Niki zefanya</h4>
          </div>
        </div>
        <div class="menu-content">
          <ul class="menu-list">
            <li><i class="fas fa-globe"><a href="#" class="menus">History</a></i></li>
            <li><i class="fas fa-plus-circle"><a href="#" class="menus">Add Book*</a></i></li>
            <li><i class="fas fa-sign-out-alt"><a href="#" class="menus">Logout</a></i></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    sidebarClick () {
      const sidebar = document.querySelector('.sidebar')
      const aside = document.querySelector('.aside')
      const burger = document.querySelector('.icon-burger')
      const burgerIcon = document.querySelector('.burger-icon')
      const sidebarMenu = document.querySelector('.sidebar-menu')
      const logo = document.querySelector('.logo')
      logo.style.marginRight = '10px'
      sidebarMenu.style.display = 'none'
      aside.classList.toggle('full')
      sidebar.classList.toggle('hide')
      burger.classList.toggle('burger-hide')
      burgerIcon.classList.toggle('hide-burger')
    }
  }
}
</script>

<style  scoped>
  .sidebar{
    width: 17vw;
    height: 100%;
    transition: 1s;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  }
  .sidebar-menu{
    width: 100%;
    display: none;
    flex-direction: column;
  }
  .profil{
    /* margin-left: 15%; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
  }
  .image-profil{
    width: 150px;
    margin: auto;
    margin-bottom: 15px;
  }
  .name-profil{
    text-align: center;
    margin-bottom: 50px;
  }
  .menu-content{
   margin: auto;
  }
  .menu-list li{
    margin-bottom: 20px;
    list-style: none;
  }
  .menus{
    display: inline-block;
    padding-left: 10px;
    text-decoration: none;
    color: black;
  }
  .burger{
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    margin-bottom: 40px;
  }
  .burger i{
    margin-top: 5px;
    cursor: pointer;
  }
  .hide{
    width: 0;
  }
  .hide-burger{
    display: none;
  }
</style>
