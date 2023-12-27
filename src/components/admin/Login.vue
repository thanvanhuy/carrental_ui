<template>
    <div class="container-fluid" id="login">
      <div class="row no-gutter">
        <div class="col-md-6 d-none d-md-flex bg-image"></div>
        <div class="col-md-6 bg-light">
          <div class="login d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-lg-10 col-xl-7 mx-auto">
                  <form @submit.prevent="handleSubmit">
                    <div class="mb-3">
                      <input v-model="username" type="text" placeholder="Tên đăng nhập" required autofocus
                        class="form-control rounded-pill border-0 shadow-sm px-4" />
                    </div>
                    <div class="mb-3">
                      <input v-model="password" type="password" placeholder="Mật khẩu" required
                        class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                    </div>
                    <div class="d-grid gap-2 mt-2">
                      <button type="submit"
                        class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Đăng nhập</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import {login} from '@/js/login.js'
export default {
    data() {
    return {
      username: '',
      password: ''
    };
},

methods: {
   async handleSubmit() {
      await login(this.username,this.password)
    },
  }
}
</script>
<style>
.login,
.image {
    min-height: 100vh;
}

.bg-image {
    background-image: url('@/assets/login.jpg');
    background-size: cover;
    background-position: center center;
}
</style>