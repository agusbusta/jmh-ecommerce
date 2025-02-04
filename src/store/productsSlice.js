import { createSlice } from '@reduxjs/toolkit';
import termometroImage from '../assets/images/termometro.jpg';

const initialState = {
  items: [
    {
      id: 1,
      name: "Termómetro bimetálico",
      price: 27721.00,
      image: termometroImage,
      stock: 25,
      description: "Termómetro bimetálico marca CENI - Construido totalmente en acero inoxidable"
    },
    // Duplicamos el producto para tener más items
    {
      id: 2,
      name: "Termómetro bimetálico",
      price: 27721.00,
      image: termometroImage,
      stock: 25,
      description: "Termómetro bimetálico marca CENI - Construido totalmente en acero inoxidable"
    },
    {
      id: 3,
      name: "Termómetro bimetálico",
      price: 27721.00,
      image: termometroImage,
      stock: 25,
      description: "Termómetro bimetálico marca CENI - Construido totalmente en acero inoxidable"
    }
  ],
  loading: false,
  error: null
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setLoading, setProducts, setError } = productsSlice.actions;
export default productsSlice.reducer;

// Thunks
export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    // Aquí iría la llamada a tu API
    const response = await fetch('/api/products');
    const data = await response.json();
    dispatch(setProducts(data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
}; 