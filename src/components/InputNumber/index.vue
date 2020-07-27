<template>
  <div class="product-details-count">
    <button
      class="btn btn-right"
      :class="{disabled:quantity===1}"
      @click="calculation(data, quantity - 1)"
    >
      -
    </button>
    <input
      :value="quantity"
      type="text"
      class="text-center btn-input"
      maxlength="3"
      @change="changeValue"
    >
    <button
      class="btn btn-left"
      :class="{disabled:quantity===999}"
      @click="calculation(data, quantity + 1)"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  name: 'InputNumber',
  props: {
    quantity: {
      type: Number,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    calculation(product, quantity) {
      this.$emit('calculation', { product, quantity });
    },
    changeValue(quantity) {
      this.$emit('changeValue', { quantity, product: this.data });
    },
  },
};
</script>
