import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  return fetch("https://covidnigeria.herokuapp.com/api").then((res) =>
    res.json()
  );
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchData.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export default dataSlice.reducer;
