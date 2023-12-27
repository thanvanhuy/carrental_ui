<template>
  <div class="chat-layout">
    <div class="left-panel">
      <nav class="navbar navbar-dark bg-dark">
        <div>
          <h1 id="textadmin">Administrator</h1>
        </div>
        <div class="navbar-nav">
          <li class="nav-link" @click="showTable('car')" active-class="active">Bảng Car</li>
          <li class="nav-link" @click="showTable('contact')" active-class="active">Bảng Contact</li>
          <li class="nav-link" @click="showTable('rentalcar')" active-class="active">Bảng Rental Car</li>
          <li class="nav-link" @click="showTable('price')" active-class="active">Bảng Price</li>
          <li class="nav-link" @click="logout()" active-class="active">Đăng xuất</li>
        </div>
      </nav>
    </div>
    <div class="right-panel">
      <h2 style="text-align: center;">{{ this.headertext }}</h2>
      <button @click="showmodal()" class="add-car-button">Thêm xe</button>
      <button @click="showmodalprice()" class="add-price-table-button">Thêm bảng giá</button>

      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th v-for="(header, index) in tableHeaders" :key="index">{{ header }}</th>
            </tr>
          </thead>
          <tbody v-if="selectedTable === 'car'">
            <tr v-for="(item, index) in carData" :key="item.idcar">
              <td>{{ index }}</td>
              <td>{{ item.namecar }}</td>
              <td>{{ item.brandcar }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.imagecar }}</td>
              <td>{{ item.statuscar }}</td>
              <td>{{ item.cartype }}</td>
              <td>{{ item.adddate }}</td>
              <td>
                <form>
                  <div class="btn-group">
                    <button type="button" class="btn btn-default btn-lg" @click="showmodal(item)">
                      <i class="icon-edit"></i> Sửa
                    </button>
                    <button type="button" class="btn btn-default btn-lg" @click="Deletecar(item.idcar)">
                      <i class="icon-trash"></i> Xóa
                    </button>
                  </div>
                </form>
              </td>
            </tr>
          </tbody>
          <tbody v-else-if="selectedTable === 'contact'">
            <tr v-for="(item, index) in contactData" :key="item.id_contact">
              <td>{{ index }}</td>
              <td>{{ item.username }}</td>
              <td>{{ item.phone }}</td>
              <td>{{ item.servicesname }}</td>
              <td>{{ item.note }}</td>
              <td>{{ item.timecontact }}</td>
              <td>
                <form>
                  <div class="btn-group">
                    <button type="button" class="btn btn-default btn-lg" @click="Updatecontact(item.id_contact)">
                      <i class="icon-edit"></i> Sửa
                    </button>
                    <button type="button" class="btn btn-default btn-lg" @click="Deletecontact(item.id_contact)">
                      <i class="icon-trash"></i> Xóa
                    </button>
                  </div>
                </form>
              </td>
            </tr>
          </tbody>

          <tbody v-else-if="selectedTable === 'price'">
            <tr v-for="(item, index) in pricecarData" :key="item.id_price">
              <td>{{ index }}</td>
              <td>{{ item.addr }}</td>
              <td>{{ item.km }}</td>
              <td>{{ item.type4 }}</td>
              <td>{{ item.type7 }}</td>
              <td>{{ item.type16 }}</td>
              <td>
                <form>
                  <div class="btn-group">
                    <button type="button" class="btn btn-default btn-lg" @click="showmodalprice(item)">
                      <i class="icon-edit"></i> Sửa
                    </button>
                    <button type="button" class="btn btn-default btn-lg" @click="Deleteprice(item.id_price)">
                      <i class="icon-trash"></i> Xóa
                    </button>
                  </div>
                </form>
              </td>
            </tr>
          </tbody>
          <tbody v-else-if="selectedTable === 'rentalcar'">
            <tr v-for="(item, index) in rentalcarData" :key="item.id_rentalcar">
              <td>{{ index }}</td>
              <td>{{ item.pick }}</td>
              <td>{{ item.destination }}</td>
              <td>{{ item.direction }}</td>
              <td>{{ item.typevehicle }}</td>
              <td>{{ item.datetimehire }}</td>
              <td>{{ item.fullname }}</td>
              <td>{{ item.phone }}</td>
              <td>{{ item.adddate }}</td>
              <td>
                <form>
                  <div class="btn-group">
                    <button type="button" class="btn btn-default btn-lg">
                      <i class="icon-edit"></i> Sửa
                    </button>
                    <button type="button" class="btn btn-default btn-lg">
                      <i class="icon-trash"></i> Xóa
                    </button>
                  </div>
                </form>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- car -->
        <div class="modal fade" ref="Modal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Sửa-thêm thông tin xe</h5>
                <button type="button" class="btn-close" @click="closemodal()" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="submitForm">
                  <div class="mb-3 row">
                    <label for="namecar" class="col-sm-3 col-form-label">Tên xe</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="namecar" placeholder="Tên xe"
                        v-model="editedCar.namecar">
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="brandcar" class="col-sm-3 col-form-label">Hãng xe</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="brandcar" placeholder="Hãng xe"
                        v-model="editedCar.brandcar">
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="price" class="col-sm-3 col-form-label">Giá thuê xe</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="price" placeholder="Giá thuê xe"
                        v-model="editedCar.price">
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="imagecar" class="col-sm-3 col-form-label">Hình ảnh xe</label>
                    <div class="col-sm-9">
                      <input type="file" class="form-control" id="imagecar" accept=".png, .jpg, .jpeg"
                        @change="handleFileChange">
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="statuscar" class="col-sm-3 col-form-label">Trạng thái xe</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="statuscar" placeholder="Trạng thái xe"
                        v-model="editedCar.statuscar">
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="cartype" class="col-sm-3 col-form-label">Loại xe</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="cartype" placeholder="Loại xe"
                        v-model="editedCar.cartype">
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="closemodal()">Hủy</button>
                <button type="button" class="btn btn-primary" @click="Updatecar()">Sửa thông tin xe</button>
              </div>
            </div>
          </div>
        </div>


        <!-- price -->
        <div class="modal fade" ref="Modalprice" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Sửa-thêm bảng giá</h5>
                <button type="button" class="btn-close" @click="closemodalprice()" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="submitForm">
                  <div class="mb-3 row">
                    <label for="addr" class="col-sm-3 col-form-label">Điểm đến</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="addr" placeholder="Điểm đến" v-model="editedPrice.addr">
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="km" class="col-sm-3 col-form-label">Số KM</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="km" placeholder="Số KM" v-model="editedPrice.km">
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="type4" class="col-sm-3 col-form-label">4 chỗ</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="type4" placeholder="Giá xe 4 chỗ"
                        v-model="editedPrice.type4">
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="type7" class="col-sm-3 col-form-label">7 chỗ</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="type7" placeholder="Giá xe 7 chỗ"
                        v-model="editedPrice.type7">
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="type16" class="col-sm-3 col-form-label">16 chỗ</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="type16" placeholder="Giá xe 16 chỗ"
                        v-model="editedPrice.type16">
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="closemodalprice()">Hủy</button>
                <button type="button" class="btn btn-primary" @click="Updateprice()">Sửa thông tin xe</button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>
  
<script>
import { dangxuat } from '@/js/logout.js'
import admin from '@/js/admin.js'
import { uploadImage } from '@/js/image.js'
import { Modal } from 'bootstrap'
export default {
  data() {
    return {
      item1: null,
      selectedTable: null,
      headertext: null,
      tableHeaders: [],
      carData: [],
      editedCar: {
        idcar: null,
        namecar: '',
        brandcar: '',
        price: '',
        imagecar: '',
        statuscar: '',
        cartype: '',
      },
      modalcar: null,
      contactData: [],
      pricecarData: [],
      modalprice: null,
      editedPrice: {
        id_price: null,
        addr: '',
        km: '',
        type4: '',
        type7: '',
        type16: '',
      },

      rentalcarData: [],
    };
  },

  methods: {
    showTable(tableName) {
      this.selectedTable = tableName;
      this.loadData(tableName);
    },
    logout() {
      if (confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
        dangxuat();
      }
    },

    //contact
    async Updatecontact(id_contact) {
      await admin.Updatecontact(id_contact)
    },
    async Deletecontact(id_contact) {
      if (confirm("Bạn có chắc chắn muốn xóa không?")) {
        await admin.Deletecontact(id_contact);
        alert("Xóa thành công!");
      }
    },
    // car
    async Deletecar(id_car) {
      if (confirm("Bạn có chắc chắn muốn xóa không?")) {
        await admin.Deletecar(id_car);
        alert("Xóa thành công!");
      }
    },
    async Deleteprice(id_price) {
      if (confirm("Bạn có chắc chắn muốn xóa không?")) {
        await admin.deleteprice(id_price);
        alert("Xóa thành công!");
      }
    },
    async Updatecar() {
      if (this.item1 != "OKE") {
        const namecarValue = document.getElementById('namecar').value;
        const brandcarValue = document.getElementById('brandcar').value;
        const priceValue = document.getElementById('price').value;
        const imagecarInput = document.getElementById('imagecar');
        const imagecarValue = imagecarInput.files[0];
        const imagecarValue1 = imagecarInput.files[0].name;
        const statuscarValue = document.getElementById('statuscar').value;
        const cartypeValue = document.getElementById('cartype').value;
        const editedCarValues = {
          namecar: namecarValue,
          brandcar: brandcarValue,
          price: priceValue,
          imagecar: imagecarValue1,
          statuscar: statuscarValue,
          cartype: cartypeValue
        };
        await uploadImage(imagecarValue);
        await admin.insertcar(editedCarValues)
        alert("Thêm thành công");
        this.closemodal();
        return;
      }
      if (confirm("Bạn có chắc chắn muốn xóa không?")) {
        var selected = document.getElementById("imagecar").files.length > 0;
        if (selected) {
          await uploadImage(this.editedCar.selectedImage);
          // console.log("có hình được chọn")
        }
        await admin.Updatecar(this.editedCar)
        alert("Cập nhật thành công");
        this.closemodal();
      }
    },
    // price
    async Updateprice() {

      if (this.item1 != "OKE") {
        const addrValue = document.getElementById('addr').value;
        const kmValue = document.getElementById('km').value;
        const type4Value = document.getElementById('type4').value;
        const type7Value = document.getElementById('type7').value;
        const type16Value = document.getElementById('type16').value;

        const editedPriceValues = {
          addr: addrValue,
          km: kmValue,
          type4: type4Value,
          type7: type7Value,
          type16: type16Value
        };

        await admin.insertprice(editedPriceValues)
        alert("Thêm thành công");
        this.closemodalprice();
        return;

      }
      if (confirm("Bạn có chắc chắn muốn xóa không?")) {
        await admin.updateprice(this.editedPrice)
        alert("Cập nhật thành công");
        this.closemodalprice();
      }
    },
    handleFileChange(event) {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        this.editedCar.selectedImage = selectedFile;
        this.editedCar.imagecar = selectedFile.name;
      }
      else {
        this.editedCar.selectedImage = null;
      }
    },
    showmodal(item) {
      if (!item) {
        this.item1 = null;
        this.modalcar.show();
        this.editedCar = {};
      } else {
        this.item1 = "OKE";
        this.modalcar.show();
        this.editedCar = { ...item };
      }
    },
    showmodalprice(item) {

      if (!item) {
        this.item1 = null;
        this.modalprice.show();
        this.editedPrice = [];
      } else {
        this.item1 = "OKE";
        this.modalprice.show();
        this.editedPrice = { ...item };
      }
    },
    closemodalprice() {
      this.modalprice.hide();
      this.editedPrice = {}
    },
    closemodal() {
      this.modalcar.hide();
      this.editedCar = {}
    },
    //load table
    async loadData(tableName) {
      if (tableName === 'car') {
        this.headertext = "Danh sách xe",
          this.tableHeaders = ['STT', 'Tên xe', 'Hãng', 'Giá', 'Hình ảnh', 'Trạng thái thuê', 'Loại xe', 'Ngày thêm xe', 'Hoạt động'];
        this.carData = await admin.getallcar();
        this.carData.forEach(item => {
          item.adddate = item.adddate.replace('T', ' ').replace('Z', '')
          const date = new Date(item.adddate);
          const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
          item.adddate = formattedDate;
        });

      }
      else if (tableName === 'contact') {
        this.headertext = "Danh liên hệ",
          this.tableHeaders = ['STT', 'Tên', 'Số điện thoại', 'Dịch vụ xe', 'Ghi chú', 'Thời gian gữi liên hệ', 'Hoạt động'];
        this.contactData = await admin.getallcontact();
        this.contactData.forEach(item => {
          if (item.timecontact != null) {
            item.timecontact = item.timecontact.replace('T', ' ').replace('Z', '');
            const date = new Date(item.timecontact);
            const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
            item.timecontact = formattedDate;
          }
        });
      }
      else if (tableName === 'price') {
        this.headertext = "Danh sách bảng giá xe cho thuê",
          this.tableHeaders = ['STT', 'Điểm đên', 'Số km', '4 chỗ', '7 chỗ', '16 chỗ', 'Hoạt động'];
        this.pricecarData = await admin.getallprice();
      }
      else if (tableName === 'rentalcar') {
        this.headertext = "Danh sách khách đặt xe",
          this.tableHeaders = ['STT', 'Điểm đón', 'Điểm đến', 'Chiều đi-về', 'Loại xe lựa chọn', 'Thời gian nhận xe', 'Tên', 'Điện thoại', 'Thời gian gữi liên hệ', 'Hoạt động'];
        this.rentalcarData = await admin.getallrentalcar();
        this.rentalcarData.forEach(item => {
          if (item.datetimehire != null) {
            item.datetimehire = item.datetimehire.replace('T', ' ').replace('Z', '');
            const date = new Date(item.datetimehire);
            const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
            item.datetimehire = formattedDate;
          }
          if (item.adddate != null) {
            item.adddate = item.adddate.replace('T', ' ').replace('Z', '');
            const date = new Date(item.adddate);
            const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
            item.adddate = formattedDate;
          }
        });
      }
    },
  },
  created() {
    this.showTable('car')
  },
  mounted() {
    this.modalcar = new Modal(this.$refs.Modal)
    this.modalprice = new Modal(this.$refs.Modalprice)
  }
};
</script>

<style>
@import url(@/assets/css/admin.css);
</style>
