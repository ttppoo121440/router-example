import Vue from 'vue';

Vue.filter('filter', (num) => {
  const str = num.toString();
  const reg = str.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
  return `$${str.replace(reg, '$1,')}`;
});
