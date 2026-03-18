import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductsApi } from '../api/productApi';

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async (page, { rejectWithValue }) => {
    try {
      return await fetchProductsApi(page);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const slice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    loading: false,
    error: null,
    page: 1,
    hasMore: true,
  },
  reducers: {
    setProducts: (state, action) => {
      state.list = action.payload;
    },
    reset: (state) => {
      state.list = [];
      state.page = 1;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (s) => {
        s.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (s, a) => {
        s.loading = false;

        if (a.payload.products.length === 0) {
          s.hasMore = false;
        } else {
          s.list = [...s.list, ...a.payload.products];
          s.page += 1;
        }
      })
      .addCase(fetchProducts.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload;
      });
  },
});

export const { setProducts, reset } = slice.actions;
export default slice.reducer;