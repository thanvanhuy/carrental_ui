<template>
    <div>
        <Header v-if="show"></Header>
        <div class="main-content">
            <router-view />
        </div>
        <Footer v-if="show"></Footer>
        <Phone v-if="show"></Phone>
    </div>
</template>
  
<script>
import Footer from './components/client/Footer.vue';
import Header from './components/client/Header.vue';
import Phone from './components/client/Phone_zalo.vue';

export default {
    data() {
        return {
            show: true
        };
    },
    name: 'App',
    components: {
        Header,
        Footer,
        Phone
    },
    methods: {

        update(Value) {
            this.show = Value;
        }
    },
    watch: {
        '$route'(to, from) {
            if (to.path === '/login' || to.path === '/admin') {
                this.update(false);
            } else {
                this.update(true);
            }
        }
    },
    mounted() {
        if (this.$route.path === '/login' || this.$route.path === '/admin') {
            this.update(false);
        } else {
            this.update(true);
        }
    }

}
</script>
  