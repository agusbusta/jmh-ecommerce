import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setProducts, setLoading, setError } = productsSlice.actions;
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