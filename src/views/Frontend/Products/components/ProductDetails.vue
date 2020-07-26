<template>
  <div
    class="col-md-6"
  >
    <div class="product-details-content">
      <span class="py-3 text-primary">產品專區/{{ data.category }}</span>
      <h1 class="py-3">
        {{ data.title }}
      </h1>
      <p>{{ data.description }}</p>
    </div>
    <div class="product-details-function mb-5">
      <div class="product-details-price mt-3">
        <span class="mr-5">售價： ${{ data.price }} </span> <div class="product-details-count">
          <button
            class="btn btn-right"
          >
            -
          </button>
          <input
            type="text"
            class="text-center btn-input"
            placeholder="1"
            maxlength="3"
          >
          <button
            class="btn btn-left"
          >
            +
          </button>
        </div>
      </div>
      <div class="product-details-cart text-left mt-3">
        <button
          class="btn mr-2"
        >
          加到購物車
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/_functions.scss";
@import "~@/assets/scss/_variables.scss";

.product-details{
  &-pic{
    height: 500px;
  }

  &-price{
    display: flex;
    span{
      line-height: 30px;
    }
  }
  &-count{
    display: flex;
    width: 20%;
  }

  &-content{
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid $primary;
    h1{
      font-size: 48px;
    }
  }
}
</style>
