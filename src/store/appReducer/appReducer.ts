import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const appSlice = createSlice({
  name: 'reducer',
  initialState: { ...initialState },
  reducers: {},
});

export default appSlice.reducer;
