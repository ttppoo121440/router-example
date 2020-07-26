<template>
  <main>
    <nav class="nav">
      <Logo />
      <div class="d-flex ml-auto">
        <button
          class="nav-menu-icon btn-icon"
          :class="{ active: active === true }"
          @click="activeHandler"
        >
          <span />
        </button>
      </div>
      <Menu
        :data="data"
        :active.sync="active"
        :menu-height="menuHeight"
        @activeHandler="activeHandler"
      />
    </nav>
    <transition
      name="page"
      appear
    >
      <router-view
        :key="$route.fullPath"
        :token="token"
      />
    </transition>
  </main>
</template>

<script>
import Logo from './Logo';
import Menu from './Menu';

export default {
  name: 'Navbar',
  components: {
    Menu,
    Logo,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    token: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      active: false,
      menuHeight: '',
      navbarMenu: '',
      MenuLength: 0,
      navbarMenuItemHeight: 0,
    };
  },
  mounted() {
    this.screenWidth();
    window.addEventListener('resize', this.screenWidth);
    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('resize', this.screenWidth);
    });
  },
  methods: {
    screenWidth() {
      window.screenWidth = document.body.clientWidth;
      if (window.screenWidth > 992) {
        this.active = false;
        this.menuHeight = '';
      } else {
        this.active = false;
        this.menuHeight = '0px';
      }
    },
    activeHandler() {
      this.active = !this.active;
      const { navbarMenu } = this.$children[1].$refs;
      this.MenuLength = navbarMenu.getElementsByTagName('li')
        .length;
      this.navbarMenuItemHeight = navbarMenu.getElementsByTagName(
        'li',
      )[0].offsetHeight;
      if (this.active && window.screenWidth < 992) {
        this.menuHeight = `${this.MenuLength * this.navbarMenuItemHeight}px`;
      } else if (window.screenWidth < 992) {
        this.menuHeight = '0px';
      }
    },
  },
};
</script>
