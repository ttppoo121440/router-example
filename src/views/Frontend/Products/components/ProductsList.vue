<template>
  <div class="container">
    <transition-group
      name="page"
      appear
      tag="div"
      class="row mx-0 list"
    >
      <div
        v-for="product in data"
        :key="product.id"
        class="col-md-6 col-xl-4 col-lg-6 my-3"
      >
        <div class="list-item">
          <div class="list-pic mb-2">
            <img
              :src="product.imageUrl"
              alt="list1"
              class="w-100 h-100"
            >
          </div>
          <div class="list-content">
            <h3>
              {{ product.title }}
            </h3>
            <p>售價：{{ product.price | filter }}</p>
            <div class="list-btns">
              <button
                class="btn mr-2"
                @click="$emit('goProductPage',product.id)"
              >
                觀看更多
              </button>
              <button
                class="btn mr-2"
                @click="$emit('addCart',product)"
              >
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'ProductsList',
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/_functions.scss";
@import "~@/assets/scss/_variables.scss";
@import "~@/assets/scss/mixins/_breakpoints.scss";

.list {
  .col-xl-4 {
    padding-right: 30px;
    &:not(:last-child) {
      @include media-down(lg) {
        padding: 15px;
      }
    }
    @include media-down(lg) {
      padding: 15px;
    }
  }
  &-item {
    width: 100%;
    background: $white;
    box-shadow: 1px 2px 5px 2px rgba(0, 0, 0, 0.15);
    text-align: left;
    .list-pic {
      padding: 20px;
    }
  }
  &-pic {
    height: 320px;
  }
  &-content {
    padding: 0 20px 20px 20px;
    color: $primary;
    font-weight: 700;
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 18px;
    }
  }
}
</style>
