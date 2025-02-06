import { createSlice } from '@reduxjs/toolkit';
import { API_ROUTES, fetchApi } from '../config/api';

const initialState = {
  customers: [],
  loading: false,
  error: null
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setCustomers: (state, action) => {
      state.customers = action.payload;
      state.loading = false;
    }
  }
});

export const fetchCustomers = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const data = await fetchApi(API_ROUTES.CUSTOMERS);
    dispatch(setCustomers(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const { setLoading, setError, setCustomers } = customersSlice.actions;
export default customersSlice.reducer; 