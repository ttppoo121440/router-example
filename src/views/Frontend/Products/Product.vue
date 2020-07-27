<template>
  <section class="container product-details">
    <Loading :active.sync="isLoading" />
    <transition-group
      v-if="!isLoading"
      name="page"
      appear
      tag="div"
      class="row"
    >
      <div
        :key="$route.name"
        class="col-md-6"
      >
        <div class="product-details-pic">
          <img
            :src="product.imageUrl"
            alt=""
            class="w-100 h-100"
          >
        </div>
      </div>
      <ProductDetails
        :key="$route.fullPath"
        :data="product"
        :quantity.sync="quantity"
        :cart="cart"
        @addCart="addCartHandler"
        @calculation="calculation"
      />
    </transition-group>
  </section>
</template>

<script>
import { getSingleProducts } from '@/utils/api.js';
import ProductDetails from './components/ProductDetails';

export default {
  name: 'Product',
  components: {
    ProductDetails,
  },
  data() {
    return {
      product: {},
      isLoading: false,
      quantity: 1,
      cart: [],
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    calculation(data) {
      this.cart.forEach((item, index) => {
        if (item.product.id === data.product.id) {
          const product = item;
          product.quantity = data.quantity;
          this.quantity = data.quantity;
          this.cart.splice(index, 1, item);
          localStorage.setItem('cart', JSON.stringify(this.cart));
        }
      });
      const list = this.cart.find((item) => item.product.id === data.product.id);
      if (!list) {
        this.addCart(data.product);
      }
    },
    addCart(product) {
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
        quantity: 2,
      });
      this.quantity = 2;
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    existedCart(product, quantity) {
      this.cart.forEach((item, index) => {
        if (item.product.id === product.id) {
          const tempProduct = item;
          tempProduct.quantity = quantity + 1;
          this.quantity += 1;
          this.cart.splice(index, 1, tempProduct);
        }
      });
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    addCartHandler(product, quantity) {
      const list = this.cart.find((item) => item.product.id === product.id);
      if (!list) {
        this.addCart(product);
      } else {
        this.existedCart(product, quantity);
      }
    },
    getCartId() {
      const list = this.cart.find((item) => item.product.id === this.product.id);
      if (!list) {
        this.quantity = 1;
      } else {
        this.quantity = list.quantity;
      }
    },
    getProduct() {
      this.cart = JSON.parse(localStorage.getItem('cart')) || [];
      this.isLoading = true;
      getSingleProducts(this.$route.params.id).then((res) => {
        this.product = Object.freeze(res.data);
        this.isLoading = false;
        this.getCartId();
      });
    },
  },
};
</script>
