import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-backend-url.com/api', // Replace with your backend URL
  timeout: 10000,
});

// Example function to get products
export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Example function to create an order
export const createOrder = async (orderData) => {
  try {
    const response = await api.post('/orders', orderData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Add more API functions as needed
