<template>
    <div>
        <div v-if="loading" class="loading-screen">
            <div class="loader"></div>
        </div>
        <section class="ftco-section contact-section">
            <div class="container">
                <div class="row d-flex mb-5 contact-info">
                    <div class="col-md-4">
                        <div class="row mb-5">
                            <div class="col-md-12">
                                <div class="border w-100 p-4 rounded mb-2 d-flex">
                                    <div class="icon mr-3">
                                        <span class="icon-map-o"></span>
                                    </div>
                                    <p><span>Địa chỉ:</span> 38 Chế lan viên</p>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="border w-100 p-4 rounded mb-2 d-flex">
                                    <div class="icon mr-3">
                                        <span class="icon-mobile-phone"></span>
                                    </div>
                                    <p><span>Điện thoại:</span> <a href="tel:0913343419">0913343419</a></p>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="border w-100 p-4 rounded mb-2 d-flex">
                                    <div class="icon mr-3">
                                        <span class="icon-envelope-o"></span>
                                    </div>
                                    <p><span>Email:</span> <a href="mailto:tranvantumm1611@gmail.com">tranvantumm1611@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="border w-100 p-4 rounded mb-2 d-flex">
                                    <div class="icon mr-3">
                                        <span class="icon-facebook"></span>
                                    </div>
                                    <p><span>Facebook:</span> <a href="https://www.facebook.com/profile.php?id=100009122579495">Thanh Phương</a></p>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="border w-100 p-4 rounded mb-2 d-flex">
                                    <div class="icon mr-3">
                                        <span class="icon-facebook"></span>
                                    </div>
                                    <p><span>Zalo:</span> <a href="https://zalo.me/0913343419">Thanh Phương</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Contact Form -->
                    <div class="col-md-8">
                        <form @submit.prevent="formsubmit()" class="bg-light p-5 contact-form">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input v-model="dataform1.username" type="text" class="form-control"
                                            placeholder="Họ và tên">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input v-model="dataform1.phone" type="text" class="form-control"
                                            placeholder="Số điện thoại">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input v-model="dataform1.servicesname" type="text" class="form-control"
                                            placeholder="Chủ đề">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea v-model="dataform1.note" cols="30" rows="7" class="form-control"
                                            placeholder="Nội dung"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="submit" value="Gửi tin nhắn" class="btn btn-primary py-3 px-5">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>
<script>

import { handleSubmit1 } from '@/js/contac.js'
export default {
    data() {
        return {
            dataform1: [],
            loading: false,
        };
    },

    methods: {
        async formsubmit() {
            this.loading = true;
            try {
                await handleSubmit1(this.dataform1);
                this.dataform = [];
                this.loading = false;
            } catch (error) {
                console.error('Lỗi khi gửi form:', error);
                this.loading = false;
            }

        }
    }
}
</script>
<style>
.hero-wrap {
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;

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
}</style>