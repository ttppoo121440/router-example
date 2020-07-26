<template>
  <div class="nav-collapse">
    <ul
      ref="navbarMenu"
      class="nav-menu"
      :class="{ active: active === true }"
      :style="HowMenuHeight"
    >
      <li
        v-for="nav in data"
        :key="nav.name"
        :to="nav.router"
        class="nav-menu-item"
      >
        <router-link
          :to="nav.router"
          href="#"
          @click.native="activeHandler"
        >
          {{ nav.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    data: {
      type: Array,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    menuHeight: {
      type: String,
      default: '',
    },
  },
  computed: {
    HowMenuHeight() {
      return {
        height: this.menuHeight,
      };
    },
  },
  methods: {
    activeHandler() {
      this.$emit('activeHandler', false);
    },
  },
};
</script>
