import { setProducts } from './productSlice';
import { store } from './store';

// Mock Product Data
const mockProducts = [
  { id: '1', name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
  { id: '2', name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150' },
];

// Function to load mock data into the Redux store
export const loadMockProducts = () => {
  store.dispatch(setProducts(mockProducts));
};
