import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './operations.js';

const nannySlice = createSlice({
  name: 'nanny',
  initialState: {
    nanny: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.nanny = payload;
      })
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { setData, setLoading, setError } = nannySlice.actions;

export const nannyReducer = nannySlice.reducer;
