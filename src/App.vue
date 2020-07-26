<template>
  <div
    id="app"
    v-text="text"
  >
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      text: '123',
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

</style>
