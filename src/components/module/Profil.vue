<template>
  <div class="myprofil hide">
    <div class="profil row d-flex flex-wrap">
      <div class="col-md-4">
        <div class="card mt-3 mb-5">
          <div class="card-body">
            <div class="image mb-2">
              <img src="../../assets/image/img/home/profil-sulfikardi.jpg" alt="" width="190">
            </div>
            <div class="upload-btn-wrapper col-md-12">
              <button class="btn col-md-12 tombol">Upload a file</button>
              <input type="file" ref="file" name="myfile"/>
            </div>
          </div>
        </div>
        <div class="change-password col-md-12">
          <button class="btn btn-outline-success col-md-12 tombol">Ubah Password</button>
        </div>
      </div>
      <div class="col-md-8">
        <h5 class="mt-3 mb-4">Personal Profil</h5>
        <form @submit="editProfil">
          <div class="form-group row">
            <label for="fullname" class="col-sm-2 col-form-label">Fullname</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="fullname" v-model="isLogin.fullname" @keyup="openDisable">
            </div>
          </div>
          <div class="form-group row">
            <label for="username" class="col-sm-2 col-form-label">Username</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="username" v-model="isLogin.username" @keyup="openDisable">
            </div>
          </div>
          <div class="form-group row">
            <label for="email" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="email" v-model="isLogin.email" @keyup="openDisable">
            </div>
          </div>
          <div class="form-group row">
            <label for="address" class="col-sm-2 col-form-label">Address</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="address" v-model="isLogin.address" @keyup="openDisable">
            </div>
          </div>
          <div class="form-group row">
            <label for="phone" class="col-sm-2 col-form-label">Phone</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="phone" v-model="isLogin.phone_number" @keyup="openDisable">
            </div>
          </div>
          <div class="form-group">
            <div class="d-flex justify-content-end mr-5">
              <button class="btn btn-danger mr-2" @click="cancelUpdate">Close</button>
              <button class="pUpdate btn btn-success" type="submit" disabled>Update Profil</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Profil',
  methods: {
    openDisable () {
      const updateUser = document.querySelector('.pUpdate')
      updateUser.removeAttribute('disabled', '')
    },
    cancelUpdate (e) {
      e.preventDefault()
      const carousel = document.querySelector('.mycarousel')
      const profil = document.querySelector('.myprofil')
      carousel.classList.remove('hide')
      profil.classList.add('hide')
    },
    editProfil (e, data) {
      e.preventDefault()
      this.$store.dispatch('user/editUser', {
        fullname: this.isLogin.fullname,
        email: this.isLogin.email,
        phone_number: this.isLogin.phone_number,
        address: this.isLogin.address,
        username: this.isLogin.username
      })
        .then(res => {
          this.$swal({
            icon: 'success',
            html: 'Profil Berhasil Di Update!',
            showConfirmButton: false,
            timer: 3000
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  computed: {
    ...mapState('user', ['isLogin'])
  }
}
</script>

<style scoped>
  .profil{
    width: 800px;
    height: 480px;
    margin: 100px  auto 0 auto;
    border: 1px solid rgba(0,0,0,.54);
  }
  .upload-btn-wrapper {
    position: relative;
    overflow: hidden;
    display: inline-block;
    cursor: pointer;
  }
  .form-group{
    margin-bottom: 30px;
  }
  .tombol {
    border: 2px solid rgba(0,0,0,.54);
    color: rgba(0,0,0,.54);
    border-radius: 8px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    margin-left: -5px;
  }
  .upload-btn-wrapper input[type=file] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
  }
  .hide{
    display: none;
  }
</style>
