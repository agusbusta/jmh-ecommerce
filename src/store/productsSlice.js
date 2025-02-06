import { createSlice } from '@reduxjs/toolkit';
import termometroImage from '../assets/images/termometro.jpg';
import { API_ROUTES, fetchApi } from '../config/api';

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
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setProducts: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
});

// Thunks para operaciones asíncronas
export const fetchProducts = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const data = await fetchApi(API_ROUTES.PRODUCTS);
    dispatch(setProducts(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const createProduct = (productData) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const data = await fetchApi(API_ROUTES.PRODUCTS, {
      method: 'POST',
      body: JSON.stringify(productData)
    });
    dispatch(addProduct(data));
    return { success: true, product: data };
  } catch (error) {
    dispatch(setError(error.message));
    return { success: false, error: error.message };
  }
};

export const updateProductById = (id, productData) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const data = await fetchApi(API_ROUTES.PRODUCT_BY_ID(id), {
      method: 'PUT',
      body: JSON.stringify(productData)
    });
    dispatch(updateProduct(data));
    return { success: true, product: data };
  } catch (error) {
    dispatch(setError(error.message));
    return { success: false, error: error.message };
  }
};

export const deleteProductById = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await fetchApi(API_ROUTES.PRODUCT_BY_ID(id), {
      method: 'DELETE'
    });
    dispatch(deleteProduct(id));
    return { success: true };
  } catch (error) {
    dispatch(setError(error.message));
    return { success: false, error: error.message };
  }
};

export const { 
  setLoading, 
  setError, 
  setProducts, 
  addProduct, 
  updateProduct, 
  deleteProduct 
} = productsSlice.actions;

export default productsSlice.reducer; 