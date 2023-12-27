import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'


import './assets/js/jquery.min.js';
import './assets/js/jquery-migrate-3.0.1.min.js';
import './assets/js/bootstrap.min.js';
import './assets/js/jquery.waypoints.min.js';
import './assets/js/jquery.stellar.min.js';
import './assets/js/owl.carousel.min.js';
import './assets/js/jquery.magnific-popup.min.js';
import './assets/js/bootstrap-datepicker.js';
import './assets/js/jquery.timepicker.min.js';
import './assets/js/scrollax.min.js';
import './assets/js/main.js';

import './assets/css/styleadmin.css';
import './assets/css/style.css';
import './assets/css/animate.css';



Vue.config.productionTip = false




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
