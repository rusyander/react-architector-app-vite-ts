/* eslint-disable no-param-reassign */
import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  AnyAction,
} from '@reduxjs/toolkit';

import { CoursesPopularModule } from '../model/coursesPopulerModule';

type CoursesPopulerType = {
  loading: boolean;
  error: null | string;
  coursesPopulerData: CoursesPopularModule[];
};

const initialState: CoursesPopulerType = {
  loading: false,
  error: null,
  coursesPopulerData: [],
};

export const coursesPopularFetch = createAsyncThunk<
  CoursesPopularModule[],
  undefined,
  { rejectValue: string }
>(
  'coursesPopuler/coursesPopularFetch',
  // eslint-disable-next-line consistent-return
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch('http://localhost:9988/coursesPopuler');
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

function asError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

const coursesPopulerSlice = createSlice({
  name: 'coursesPopuler',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(coursesPopularFetch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(coursesPopularFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.coursesPopulerData = action.payload;
      })
      .addMatcher(asError, (state, action: PayloadAction<string>) => {
        state.error = action.payload as string;
      });
  },
});

export default coursesPopulerSlice.reducer;
