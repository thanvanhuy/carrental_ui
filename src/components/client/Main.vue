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
    <div class="align-items-center" style="padding-top: 2px;">
      <form @submit.prevent="handleFormSubmit()" class="request-form ftco-animate bg-primary fadeInUp ftco-animated">
        <div class="text-center">
          <a href="tel:0913343419">
            <h2 class="bg-danger text-white p-2 rounded">HOTLINE: 0913343419</h2>
          </a>
        </div>

        <div class="d-flex">
          <div class="form-group mr-2">
            <label for="pickup" class="label">Điểm đón</label>
            <input v-model="dataform.pick" type="text" id="pickup" class="form-control"
              placeholder="Sài Gòn, Khánh Hòa, Vũng Tàu...">
          </div>
          <div class="form-group ml-2">
            <label for="destination" class="label">Điểm đến</label>
            <input v-model="dataform.destination" type="text" id="destination" class="form-control"
              placeholder="Sài Gòn, Khánh Hòa, Vũng Tàu...">
          </div>
        </div>
        <div class="d-flex">
          <div class="form-group ml-2">
            <label for="direction" class="label">1 chiều-2 chiều</label>
            <select v-model="dataform.direction" id="direction" class="form-select">
              <option value="1">1 chiều</option>
              <option value="2">2 chiều</option>
            </select>
          </div>
          <div class="form-group ml-2">
            <label for="typevehicle" class="label">Loại xe 4-7-16 chỗ</label>
            <select v-model="dataform.typevehicle" id="typevehicle" class="form-select">
              <option value="4">Xe 4 chỗ</option>
              <option value="7">Xe 7 chỗ</option>
              <option value="16">Xe 16 chỗ</option>
            </select>
          </div>

        </div>

        <div class="d-flex">
          <div class="form-group mr-2">
            <label for="datetimehire" class="label">Thời gian nhận xe</label>
            <input v-model="dataform.datetimehire" type="datetime-local" class="form-control" id="datetimehire">
          </div>
        </div>
        <div class="d-flex">
          <div class="form-group mr-2">
            <label for="fullname" class="label">Họ tên</label>
            <input v-model="dataform.fullname" type="text" id="fullname" class="form-control"
              placeholder="Họ và tên đầy đủ">
          </div>
          <div class="form-group ml-2">
            <label for="phone" class="label">Số điện thoại</label>
            <input v-model="dataform.phone" type="tel" id="phone" name="phone" class="form-control"
              placeholder="Số điện thoại">
          </div>
        </div>
        <div class="form-group">
          <input type="submit" value="Đặt xe" class="btn btn-secondary py-3 px-4">
        </div>

      </form>
    </div>
    <div>
      <h2 style="text-align: center;color: blue;">Bảng giá xe cho thuê</h2>
    </div>
    <div class="tb">
      <table>
        <thead>
          <tr>
            <th>Thuê Xe Đi Tỉnh</th>
            <th>Số KM</th>
            <th>4 Chỗ</th>
            <th>7 Chỗ</th>
            <th>16 Chỗ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in datacar" :key="row.id_price">
            <td>{{ row.addr }}</td>
            <td>{{ row.km }} KM</td>
            <td>{{ row.type4 }} triệu</td>
            <td>{{ row.type7 }} triệu</td>
            <td>{{ row.type16 }} triệu</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>

document.querySelectorAll('.form-control').forEach(input => {
  input.addEventListener('focus', function () {
    this.classList.add('focus');
  });

  input.addEventListener('blur', function () {
    this.classList.remove('focus');
  });
});

import { handleSubmit, getTableData } from '@/js/main.js';

export default {
  data() {
    return {
      datacar: [],
      dataform: [],
      backgroundImages: [
        './images/slide1.jpg',
      ],
      loading: false,
    };
  },

  methods: {
    async handleFormSubmit() {
      this.loading = true;
      try {
        console.log(this.dataform.datetimehire)
        await handleSubmit(this.dataform);
        this.dataform = [];
        this.loading = false;
      } catch (error) {
        this.loading = false;
      }
    },
    async loadData() {
      this.datacar = await getTableData();
    },
  },

  created() {
    this.loadData();
  },
};
</script>

<style scoped>
.request-form {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
  border-spacing: 0;
}

.form-select{
  background: #3498db;
}
.hero-wrap {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
}

.tb {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
  border-spacing: 0;
}

table {
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

th {
  text-align: center;
  font-weight: bold;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

td {
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

@media (max-width: 768px) {
  .hero-wrap.ftco-degree {
  height: 93vh;
  display: flex;
  align-items: center;
  font-size: small;
  background-size: cover;
  background-position: center;
  height: 350px;
}
  .request-form{
    width: 100%;
  }
  .tb {
    width: 100%;
  }

  table {
    width: 100%;
  }

  th,
  td {
    font-size: 12px;
  }
}
.form-control {
  background-color: red;
}

.form-control.focus {
  background-color: yellow;
}

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
