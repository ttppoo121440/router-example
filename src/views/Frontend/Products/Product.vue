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
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      getSingleProducts(this.$route.params.id).then((res) => {
        this.product = Object.freeze(res.data);
        this.isLoading = false;
      });
    },
  },
};
</script>
