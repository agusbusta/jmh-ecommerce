import { createSlice } from '@reduxjs/toolkit';
import { API_ROUTES, fetchApi } from '../config/api';

const initialState = {
  orders: [],
  loading: false,
  error: null
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    createOrderStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    createOrderSuccess: (state, action) => {
      state.orders.push(action.payload);
      state.loading = false;
    },
    createOrderFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    updateOrder: (state, action) => {
      const index = state.orders.findIndex(order => order.id === action.payload.id);
      if (index !== -1) {
        state.orders[index] = action.payload;
      }
    }
  }
});

export const createOrder = (orderData) => async (dispatch) => {
  dispatch(createOrderStart());
  try {
    const data = await fetchApi(API_ROUTES.ORDERS, {
      method: 'POST',
      body: JSON.stringify(orderData)
    });
    dispatch(createOrderSuccess(data));
    return { success: true, order: data };
  } catch (error) {
    dispatch(createOrderFailure(error.message));
    return { success: false, error: error.message };
  }
};

export const fetchOrders = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const data = await fetchApi(API_ROUTES.ORDERS);
    dispatch(setOrders(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const updateOrderStatus = (orderId, status) => async (dispatch) => {
  try {
    const data = await fetchApi(API_ROUTES.ORDER_BY_ID(orderId), {
      method: 'PATCH',
      body: JSON.stringify({ status })
    });
    dispatch(updateOrder(data));
    return { success: true, order: data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

const generateWhatsAppMessage = (order) => {
  const items = order.items.map(item => 
    `• ${item.name} - $${item.price.toFixed(2)}`
  ).join('\n');

  return `
¡Hola! Quiero realizar la siguiente compra:

*Orden #${order.id}*
${items}

Total: $${order.total.toFixed(2)}

Datos del comprador:
Nombre: ${order.user.name}
Email: ${order.user.email}
`;
};

export const { createOrderStart, createOrderSuccess, createOrderFailure, setOrders, setLoading, setError, updateOrder } = ordersSlice.actions;
export default ordersSlice.reducer; 