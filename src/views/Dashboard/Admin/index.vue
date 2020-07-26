<template>
  <div class="text-center">
    <Loading :active.sync="isLoading" />
    <Navbar
      v-if="!isLoading"
      :data="navList"
      :token="token"
    />
  </div>
</template>

<script>
import { checkLogin } from '@/utils/api';
import Navbar from '@/components/Navbar';

export default {
  name: 'DashboardHome',
  components: {
    Navbar,
  },
  data() {
    return {
      navList: [
        { name: '後台首頁', router: '/dashboard/home' },
        { name: '產品列表', router: '/dashboard/products' },
        { name: '優惠券列表', router: '/dashboard/coupon' },
        { name: '訂單列表', router: '/dashboard/orders' },
        { name: '圖片儲存列表', router: '/dashboard/Images' },
        { name: '前台首頁', router: '/' }],
      token: '',
      isLoading: false,
    };
  },
  mounted() {
    const cookieToken = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    this.token = cookieToken;
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      this.isLoading = true;
      checkLogin(this.token).then(() => {
        this.isLoading = false;
      }).catch((error) => {
        if (error === 422) {
          this.isLoading = false;
          this.$router.push('/login');
        }
      });
    },
  },
};
</script>
