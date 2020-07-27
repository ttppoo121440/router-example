<template>
  <section>
    <Loading :active.sync="isLoading" />
    <h1 class="text-center my-5 text-primary">
      產品列表
    </h1>
    <ProductsList
      class="mb-5"
      :data="productsList"
      @addCart="addCart"
      @goProductPage="goProductPage"
    />
    <Pagination
      v-bind="Pagination"
      @ChangeNav="ChangeNav"
    />
  </section>
</template>

<script>
import { getProducts } from '@/utils/api';
import Pagination from '@/components/Pagination';
import ProductsList from './components/ProductsList';

export default {
  name: 'Products',
  components: {
    ProductsList,
    Pagination,
  },
  data() {
    return {
      productsList: [],
      isLoading: false,
      currentPage: 1,
      pageSize: 25,
      totalPages: 0,
      cart: [],
    };
  },
  computed: {
    Pagination() {
      return {
        'page-size': this.pageSize,
        'total-pages': this.totalPages,
        current: this.current,
      };
    },
    total() {
      return this.productsList.length;
    },
    current: {
      get() {
        return this.currentPage;
      },
      set(page) {
        if (page < 1) {
          this.currentPage = 1;
        } else if (page > this.totalPages) {
          this.currentPage = this.totalPages;
        } else {
          this.currentPage = page;
        }
      },
    },
  },
  mounted() {
    this.getProductsList();
  },
  methods: {
    addCart(product) {
      this.cart = JSON.parse(localStorage.getItem('cart')) || [];
      console.log(this.cart);
      const list = this.cart.find((item) => item.product.id === product.id);
      if (!list) {
        this.cart.push({ product, quantity: 1 });
      } else {
        list.quantity += 1;
      }
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    ChangeNav(page) {
      this.current = page;
      this.getProductsList(page);
    },
    getProductsList(page) {
      this.isLoading = true;
      getProducts(page).then((res) => {
        this.productsList = Object.freeze(res.data);
        this.totalPages = res.meta.pagination.total_pages;
        this.isLoading = false;
      });
    },
    goProductPage(id) {
      this.$router.push(`/Product/${id}`);
    },
  },
};
</script>
