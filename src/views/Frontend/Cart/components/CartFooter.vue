<template>
  <div class="cart-footer">
    <div class="row">
      <div class="col-lg-8" />
      <div class="col-lg-4">
        <div class="cart-footer-total">
          <div class="cart-footer-pricetotal">
            總數：{{ cartItemTotal }}<br>
            總金額：{{ cartPriceTotal | filter }}
          </div>
          <div>
            <button
              class="btn btn-outline-danger"
              type="button"
              @click="clearCart"
            >
              清空
              <i class="far fa-trash-alt" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartFooter',
  props: {
    cartList: {
      type: Array,
      required: true,
    },
  },
  computed: {
    cartPriceTotal() {
      return this.cartList.reduce(
        (acc, current) => acc + current.product.price * current.quantity,
        0,
      );
    },
    cartItemTotal() {
      return this.cartList.reduce((acc, current) => acc + current.quantity, 0);
    },
  },
  methods: {
    clearCart() {
      localStorage.removeItem('cart');
      this.$emit('clearCart');
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/_functions.scss";
@import "~@/assets/scss/_variables.scss";
@import "~@/assets/scss/mixins/_breakpoints.scss";

 .cart-footer {
    padding: 50px 0;
    border-top: 1px solid $primary;
    font-size: 1.5rem;

    &-total {
      display: flex;
      @include media-down(md) {
        flex-direction: row-reverse;
      }
    }
    &-pricetotal {
      margin-right: auto;
      @include media-down(md) {
        margin-right: 0;
        margin-left: auto;
      }
    }
  }
</style>
