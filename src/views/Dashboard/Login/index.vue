<template>
  <div class="contain">
    <div class="login">
      <div class="header">
        Login
      </div>
      <LoginForm @Login="LoginHandler" />
    </div>
  </div>
</template>

<script>
import { login } from '@/utils/api';
import LoginForm from './components/LoginForm';

export default {
  name: 'Login',
  components: {
    LoginForm,
  },
  methods: {
    LoginHandler(from) {
      document.cookie = 'token=;expires=;';
      login(from).then((res) => {
        const { token } = res;
        const { expired } = res;
        document.cookie = `token=${token};expires=${new Date(
          expired * 1000,
        )};`;
        this.$router.push('/dashboard/home');
      });
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/_functions.scss";
@import "~@/assets/scss/_variables.scss";

.contain {
  height: 100vh;
  background-image: linear-gradient(145deg,$primary, $white);
}
</style>
