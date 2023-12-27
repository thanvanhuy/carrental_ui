<template>
  <div>
    <div v-if="loading" class="loading-screen">
      <div class="loader"></div>
    </div>
    <div class="hero-wrap ftco-degree" :style="'background-image: url(' + backgroundImages + ');'">
      <div class="container">
        <div class="row no-gutters slider-text justify-content-start align-items-center justify-content-center">
          <div class="col-lg-8 ftco-animate fadeInUp ftco-animated">
            <div class="text w-100 text-center mb-md-5 pb-md-5">
              <h1 class="mb-4">DỊCH VỤ THUÊ XE ĐI TỈNH CÓ TÀI XẾ BAO UY TÍN</h1>
              <p style="font-size: 18px;">CHO THUÊ XE 4-7-16 CHỖ KÍNH CHÀO QUÝ KHÁCH HÀNG</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="ftco-section bg-light">
      <div class="container">
        <div class="text-center">
          <h2 class="bg-danger text-white p-2 rounded">CHỌN XE NÀO...</h2>
        </div>
        <div class="row">
          <div class="col-md-4" v-for="car in cars" :key="car.id">
            <div class="car-wrap rounded ftco-animate fadeInUp ftco-animated">
              <div class="img rounded d-flex align-items-end"
                :style="'background-image: url(data:image/png;base64,' + car.imagecar + ');'">
              </div>
              <div class="text">
                <router-link :to="'/car/' + car.id_car">{{ car.namecar }}</router-link>
                <div class="d-flex mb-3">
                  <span class="cat">{{ car.brandcar }}</span>
                  <p class="price ml-auto">{{ car.price }} <span>/ngày</span></p>
                </div>
                <p class="d-flex mb-0 d-block">
                  <a class="btn btn-primary py-2 mr-1" @click="showmodal()">Đặt ngay</a>
                  <a class="btn btn-secondary py-2 ml-1">Chi tiết</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <a href="tel:0913343419">
            <h2 class="bg-danger text-white p-2 rounded">GỌI NGAY ĐỂ ĐƯỢC TƯ VẤN : 0913343419</h2>
          </a>
        </div>
      </div>
    </section>
    <div class="modal fade" ref="Modal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Đặt xe ngay</h5>
            <button type="button" class="btn-close" @click="closemodal()" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="nameInput" class="form-label">Tên</label>
                <input type="text" class="form-control" id="nameInput" v-model="dataform.username">
              </div>
              <div class="mb-3">
                <label for="phoneInput" class="form-label">Số điện thoại</label>
                <input type="text" class="form-control" id="phoneInput" v-model="dataform.phone">
              </div>

            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closemodal()">Hủy</button>
            <button type="button" class="btn btn-primary" @click="send()">Gữi liên hệ</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getallcar } from '@/js/car16.js';
import { Modal } from 'bootstrap'
import { handleSubmit1 } from '@/js/contac.js'
export default {
  data() {
    return {
      backgroundImages: [
        './images/slide1.jpg',
      ],
      cars: [],
      dataform: [],
      modal: null,
      loading: false,
    };
  },
  methods: {
    async send() {
      this.loading = true;
      this.dataform.servicesname = "Xe 16 chỗ";
      this.dataform.note = "Xe 16 chỗ";
      try {
        await handleSubmit1(this.dataform);
        this.dataform = [];
        this.loading = false;
      }
      catch (error) {
        this.loading = false;
      }
    },
    async loadcar() {
      this.cars = await getallcar();
    },
    showmodal() {
      this.modal.show();

    },
    closemodal() {
      this.modal.hide();
    },
  },
  created() {
    this.loadcar()
  },
  mounted() {
    this.modal = new Modal(this.$refs.Modal)
  }
};



</script>

<style scoped>
.hero-wrap {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
}
.text {
  font-size: 16px;
  color: #333;
}

.btn {
  font-size: 14px;
}

@media (max-width: 768px) {
  .hero-wrap.ftco-degree{
  height: 93vh;
  display: flex;
  align-items: center;
  font-size: small;
  background-size: cover;
  background-position: center;
  height: 400px;
}}
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader {
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
