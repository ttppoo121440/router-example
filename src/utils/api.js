import { get, post } from '@/plugins/Axios';

const uuid = process.env.VUE_APP_UUID;

/**
 * 驗證登入
 */

const checkLogin = (data) => post('api/auth/check', { api_token: data });

const login = (data) => post('api/auth/login', data);

const logout = (data) => post('api/auth/logout', { api_token: data });

/**
 * 產品
 */

const getProducts = (page) => get(`api/${uuid}/ec/products?page=${page}`);

const getSingleProducts = (id) => get(`api/${uuid}/ec/product/${id}`);

/**
 * 購物車
 */
const getCart = () => get(`api/${uuid}/ec/shopping`);

export {
  getProducts,
  getSingleProducts,
  checkLogin,
  login,
  logout,
  getCart,
};
