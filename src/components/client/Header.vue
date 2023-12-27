<template>
  <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div class="container">
      <router-link to="/">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="oi oi-menu"></span> Menu
      </button>
      <div class="collapse navbar-collapse" id="ftco-nav"  @click="toggleCollapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" ><router-link to="/"  class="nav-link text-uppercase font-weight-bold text-lg">TRANG CHỦ</router-link></li>
          <li class="nav-item" ><router-link to="/xe4cho"  class="nav-link text-uppercase font-weight-bold text-lg">XE 4 CHỖ</router-link></li>
          <li class="nav-item" ><router-link to="/xe7cho"  class="nav-link text-uppercase font-weight-bold text-lg">XE 7 CHỖ</router-link></li>
          <li class="nav-item" ><router-link to="/xe16cho"  class="nav-link text-uppercase font-weight-bold text-lg">XE 16 CHỖ</router-link></li>
          <li class="nav-item"><router-link to="/gioithieu"  class="nav-link text-uppercase font-weight-bold text-lg">GIỚI THIỆU</router-link></li>
          <li class="nav-item" ><router-link to="/lienhe"  class="nav-link text-uppercase font-weight-bold text-lg">LIÊN HỆ</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  methods:{
    toggleCollapse() {
      const ftcoNav = document.querySelector('#ftco-nav');
      if (window.getComputedStyle(ftcoNav).display !== 'none') {
        ftcoNav.classList.remove('show');
      }
    }
  }
}

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#ftco-nav .navbar-nav .nav-link {
  color: green !important; 
  font-size: 20px !important;
}

</style>
