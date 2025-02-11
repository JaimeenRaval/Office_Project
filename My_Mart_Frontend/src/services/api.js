import axios from "axios";

const API_BASE = "http://localhost:5000";

export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE}/products`);
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_BASE}/products/${id}`);
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_BASE}/auth/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_BASE}/auth/login`, userData);
  return response.data;
};
