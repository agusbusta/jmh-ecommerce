import { createSlice } from '@reduxjs/toolkit';
import { API_ROUTES, fetchApi } from '../config/api';

const ADMIN_CREDENTIALS = {
  email: 'damianadmin@jmh.com',
  password: 'DamianAdmin123',
  role: 'admin',
  name: 'Damian Admin'
};

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    }
  }
});

// Thunk para simular el proceso de login (preparado para API real)
export const attemptLogin = (credentials) => async (dispatch) => {
  dispatch(loginStart());
  
  try {
    // Verifica si son las credenciales de admin (esto podría moverse al backend)
    if (credentials.email === ADMIN_CREDENTIALS.email && 
        credentials.password === ADMIN_CREDENTIALS.password) {
      dispatch(loginSuccess(ADMIN_CREDENTIALS));
      return true;
    }

    const data = await fetchApi(API_ROUTES.LOGIN, {
      method: 'POST',
      body: JSON.stringify(credentials)
    });

    dispatch(loginSuccess(data.user));
    localStorage.setItem('authToken', data.token);
    return true;
  } catch (error) {
    dispatch(loginFailure(error.message));
    return false;
  }
};

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer; 