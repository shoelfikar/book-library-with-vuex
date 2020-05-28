<template>
  <div>
    <div class="form-regis">
      <div class="logo-book d-flex justify-content-end flex-wrap">
        <img src="../../assets/image/img/login/bookshelf.png" alt="" width="80" class="mr-2">
      </div>
      <div class="title-form">
        <h2>Login</h2>
        <p>Welcome Back, Please Login to your account</p>
      </div>
      <div class="form-register">
        <form class="ml-4" @submit="login">
          <div class="form-group col-md-11 mb-1">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
          </div>
          <div class="form-group col-md-11 mb-1">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
          </div>
          <div class="form-group regis-btn">
            <button type="submit" class="btn btn-outline-dark">Login</button>
            <router-link to="/register" class="btn btn-outline-dark">Sign Up</router-link>
          </div>
        </form>
      </div>
      <div class="footer-form">
        <p><span class="footer-book">By signing up, you agree to Book’s</span> Terms and Conditions <span class="dan">& </span> Privacy Policy</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormLogin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login (e, data) {
      e.preventDefault()
      this.$store.dispatch('user/handleLogin', {
        email: this.email,
        password: this.password
      })
        .then((res) => {
          this.$swal({
            icon: 'success',
            html: 'Login Success!',
            showConfirmButton: false,
            timer: 3000
          })
          this.$router.push('/dashbord')
        })
    }
  } 
}
</script>

<style scoped>
  .form-regis{
    width: 35vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
  }
  .title-form{
    margin-left: 40px;
  }
  .title-form h2{
    font-size: 64px;
  }
  .title-form p{
    width: 250px;
  }
  .form-register{
    width: 35vw;
    margin: auto;
    margin-top: 20px;
  }
  .footer-form{
    width: 280px;
    margin-left: 40px;
  }
  .footer-form p{
    font-size: 15px;
  }
  .footer-book{
    color: #D0CCCC;
  }
  .dan{
    color: #D0CCCC;
  }
  .btn{
    width: 100px;
    height: 36px;
    margin-right: 10px;
  }
  .regis-btn{
    margin-left: 16px;
    margin-top: 15px;
  }
</style>
