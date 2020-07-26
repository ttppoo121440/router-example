<template>
  <section>
    <Loading :active.sync="isLoading" />
    <h1 class="text-center my-5 text-primary">
      產品列表
    </h1>
    <ProductsList
      :data="productsList"
      @goProductPage="goProductPage"
    />
  </section>
</template>

<script>
import { getProducts } from '@/utils/api';
import ProductsList from './components/ProductsList';

export default {
  name: 'Products',
  components: {
    ProductsList,
  },
  data() {
    return {
      productsList: [],
      isLoading: false,
    };
  },
  mounted() {
    this.getProductsList();
  },
  methods: {
    getProductsList() {
      this.isLoading = true;
      getProducts().then((res) => {
        this.productsList = Object.freeze(res.data);
        this.isLoading = false;
      });
    },
    goProductPage(id) {
      this.$router.push(`/Product/${id}`);
    },
  },
};
</script>
