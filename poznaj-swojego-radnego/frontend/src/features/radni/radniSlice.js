import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../../supabaseClient';

export const fetchRadni = createAsyncThunk('radni/fetchRadni', async () => {
  const { data, error } = await supabase
    .from('radni')
    .select('*');

  if (error) {
    throw error;
  }
  
  return data;
});

const radniSlice = createSlice({
  name: 'radni',
  initialState: {
    radni: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRadni.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRadni.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.radni = action.payload;
      })
      .addCase(fetchRadni.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default radniSlice.reducer;

