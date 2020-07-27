<template>
  <div class="cart">
    <transition-group
      name="list"
      appear
      tag="div"
      class="w-100"
    >
      <div
        v-for="cart in cartList"
        :key="cart.product.id"
        class="cart-item"
      >
        <div class="row w-100">
          <div class="col-md-8">
            <div class="cart-detail">
              <div class="cart-pic">
                <img :src="cart.product.imageUrl">
              </div>
              <div class="cart-prduct">
                <h2 class="mb-3">
                  {{ cart.product.title }}
                </h2>
                <span>{{ cart.product.category }}</span>
                <div class="count d-flex my-3">
                  <InputNumber
                    :quantity="cart.quantity"
                    :data="cart.product"
                    @calculation="calculation"
                    @changeValue="changeValue"
                  />
                  <div class="cart-price">
                    <span> x {{ cart.product.price | filter }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="cart-function">
              <div class="cart-price-total">
                {{ cart.quantity * cart.product.price | filter }}
              </div>
              <div class="cart-delete">
                <button
                  class="btn"
                  type="button"
                  @click="cartDelete(cart.product.id)"
                >
                  <i class="far fa-trash-alt" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition-group>
    <CartFooter
      v-if="cartList.length !== 0"
      :cart-list="cartList"
      @clearCart="clearCart"
    />
  </div>
</template>

<script>
import InputNumber from '@/components/InputNumber';
import CartFooter from './CartFooter';

export default {
  name: 'CartList',
  components: {
    InputNumber,
    CartFooter,
  },
  props: {
    cartList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    cartDelete(id) {
      this.cartList.forEach((item, index) => {
        if (item.product.id === id) {
          this.cartList.splice(index, 1);
        }
      });
      localStorage.setItem('cart', JSON.stringify(this.cartList));
    },
    calculation(data) {
      this.cartList.forEach((item, index) => {
        if (item.product.id === data.product.id) {
          const product = item;
          product.quantity = data.quantity;
          this.cartList.splice(index, 1, item);
        }
      });
      localStorage.setItem('cart', JSON.stringify(this.cartList));
    },
    changeValue(data) {
      this.cartList.forEach((item, index) => {
        if (item.product.id === data.product.id) {
          const product = item;
          product.quantity = Number(data.quantity.target.value);
          this.cartList.splice(index, 1, item);
        }
      });
      localStorage.setItem('cart', JSON.stringify(this.cartList));
    },
    clearCart() {
      this.$emit('clearCart');
    },
  },
};
</script>
