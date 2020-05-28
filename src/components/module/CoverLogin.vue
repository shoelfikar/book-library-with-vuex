<template>
  <div>
    <div class="cover-login">
      <h2 class="title-book">Book is a window to the world</h2>
      <p class="footer-book">Photo by Mark Pan4ratte on Unsplash</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoverLogin'  
}
</script>

<style scoped>
  .cover-login{
    width: 65vw;
    height: 100vh;
    background-image: url('../../assets/image/img/login/register-cover.png');
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
    padding: 0;
  }
  .title-book{
    width: 40vw;
    height: 150px;
    font-size: 64px;
    color: #ffffff;
    margin-left: 35px;
    padding-top: 55px;
  }
  .footer-book{
    color: #fff;
    margin-left: 35px;
  }
</style>
