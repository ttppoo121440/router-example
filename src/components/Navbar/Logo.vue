<template>
  <div class="logo pl-3">
    <a href="#">
      <img
        src="~@/assets/logo.png"
        alt="logo"
        height="100"
      >
    </a>
  </div>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style>
.logo {
  opacity: 0;
  animation: fadeInLeft 0.5s linear forwards;
  animation-delay: 1s;
  vertical-align: middle;
}
</style>
