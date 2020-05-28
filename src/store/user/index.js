import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    msg: '',
    isLogin: []
  },
  mutations: {
    getMsg (state, error) {
      state.msg = error
    },
    userLogin (state, data) {
      state.isLogin = data
    }
  },
  actions: {
    handleLogin (context, data) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + 'user/login', data)
          .then((res) => {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('idUser', res.data.result.id_user)
            resolve(res)
          })
          .catch((error) => {
            context.commit('getMsg', error.response.data.err)
          })
      })
    },
    handleRegister (context, data) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + 'user/register', data)
          .then((res) => {
            resolve(res)
          })
          .catch((error) => {
            context.commit('getMsg', error.response.data.err)
          })
      })
    },
    getLogin (context, userId) {
      axios.get(process.env.VUE_APP_BASE_URL + `user/${userId}`)
        .then(res => {
          context.commit('userLogin', res.data.result[0])
        })
    },
    editUser (context, data) {
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_BASE_URL + `user/${localStorage.idUser}`, data)
          .then(res => {
            resolve(res)
            console.log(res.data)
          })
          .catch(error => {
            context.commit('getMsg', error.response.data.err)
            reject(error)
          })
      })
    }
  }
})
