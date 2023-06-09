/* eslint-disable no-param-reassign */
import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  AnyAction,
} from '@reduxjs/toolkit';

import { CarouselModel } from '../model/carouselModel';

export type CarouselType = {
  loading: boolean;
  error: string | null;
  carouselData: CarouselModel[];
  status: string | null;
};

const initialState: CarouselType = {
  loading: false,
  error: null,
  carouselData: [],
  status: null,
};

export const carouselFetch = createAsyncThunk<
  CarouselModel[],
  undefined,
  { rejectValue: string }
  // eslint-disable-next-line consistent-return
>('carousel/carouselFetch', async function (_, { rejectWithValue }) {
  try {
    const response = await fetch('http://localhost:9988/users');
    if (!response.ok) {
      throw new Error('Server Error!');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});

function asError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

const carouselSlise = createSlice({
  name: 'carousel',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(carouselFetch.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = 'pending';
      })
      .addCase(carouselFetch.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.loading = false;
        state.carouselData = action.payload;
      })
      .addMatcher(asError, (state, action: PayloadAction<string>) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default carouselSlise.reducer;
