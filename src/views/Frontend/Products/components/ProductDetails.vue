<template>
  <div class="col-md-6">
    <div class="product-details-content">
      <span class="py-3 text-primary">產品專區/{{ data.category }}</span>
      <h1 class="py-3">
        {{ data.title }}
      </h1>
      <p>{{ data.description }}</p>
    </div>
    <div class="product-details-function mb-5">
      <div class="product-details-price mt-3">
        <span class="mr-5">售價： {{ data.price }} </span>
        <InputNumber
          :quantity="bindingValue"
          :data="data"
          @calculation="calculation"
          @changeValue="changeValue"
        />
      </div>
      <div class="product-details-cart text-left mt-3">
        <button
          class="btn mr-2"
          :class="{disabled:quantity===999}"
          @click="$emit('addCart', data,bindingValue)"
        >
          加到購物車
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import InputNumber from '@/components/InputNumber';

export default {
  name: 'ProductDetails',
  components: {
    InputNumber,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    cart: {
      type: Array,
      required: true,
    },
  },
  computed: {
    bindingValue: {
      get() {
        return this.quantity;
      },
      set(value) {
        this.$emit('update:quantity', value);
      },
    },
  },
  methods: {
    calculation(data) {
      this.$emit('calculation', { product: data.product, quantity: data.quantity });
    },
    addCart(product, quantity) {
      this.bindingValue = quantity;
      this.cart.push({
        product: {
          id: product.id,
          title: product.title,
          category: product.category,
          content: product.content,
          enabled: product.enabled,
          imageUrl: product.imageUrl,
          origin_price: product.origin_price,
          price: product.price,
          unit: product.unit,
        },
        quantity,
      });
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    editCart(data) {
      this.cart.forEach((item, index) => {
        if (item.product.id === data.product.id) {
          const product = item;
          product.quantity = Number(data.quantity.target.value);
          this.bindingValue = Number(data.quantity.target.value);
          this.cart.splice(index, 1, item);
        }
      });
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    changeValue(data) {
      const list = this.cart.find((item) => item.product.id === data.product.id);
      console.log(list);
      if (!list) {
        this.addCart(data.product, Number(data.quantity.target.value));
      } else {
        this.editCart(data);
      }
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/_functions.scss";
@import "~@/assets/scss/_variables.scss";

.product-details {
  &-pic {
    height: 500px;
  }

  &-price {
    display: flex;
    span {
      line-height: 30px;
    }
  }
  &-count {
    display: flex;
    width: 20%;
  }

  &-content {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 3px solid $primary;

    h1 {
      font-size: 48px;
    }
  }
}
</style>
