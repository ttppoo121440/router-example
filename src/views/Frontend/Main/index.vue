<template>
  <div>
    <Navbar :data="navList" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
  data() {
    return {
      navList: [
        { name: '首頁', router: '/' },
        { name: '產品列表', router: '/products' },
        { name: '購物車', router: '/cart' },
        { name: '關於我們', router: '/about' },
        { name: '結帳', router: '/checkout' },
        { name: '結帳完成', router: '/complete' },
        { name: '後台首頁', router: '/dashboard/home' }],
    };
  },
};
</script>
