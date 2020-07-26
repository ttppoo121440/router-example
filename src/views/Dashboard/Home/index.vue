<template>
  <div class="text-center">
    <Loading :active.sync="isLoading" />
    <h1>後台首頁</h1>
    <button
      class="btn mt-5 px-5 py-2"
      @click="Logout"
    >
      登出
    </button>
  </div>
</template>

<script>
import { logout } from '@/utils/api';

export default {
  name: 'DashboardHome',
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    Logout() {
      this.isLoading = true;
      logout(this.token).then(() => {
        this.isLoading = false;
        this.$router.push('/');
        document.cookie = 'token=;expires=;';
      }).catch((error) => {
        if (error === 422) {
          this.isLoading = false;
          this.$router.push('/');
          document.cookie = 'token=;expires=;';
        }
      });
    },
  },
};
</script>
