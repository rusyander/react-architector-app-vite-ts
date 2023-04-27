/* eslint-disable no-param-reassign */
import {
  createSlice,
  createAsyncThunk,
  AnyAction,
  PayloadAction,
} from '@reduxjs/toolkit';

import { FollowingModel } from '../model/followingsModel';

export type FollowingType = {
  loading: boolean;
  error: string | null;
  followingData: FollowingModel[];
  status: string | null;
};

const initialState: FollowingType = {
  loading: false,
  error: null,
  followingData: [],
  status: null,
};

export const followingFetch = createAsyncThunk<
  FollowingModel[],
  undefined,
  { rejectValue: string }
  // eslint-disable-next-line consistent-return
>('following/followingFetch', async function (_, { rejectWithValue }) {
  try {
    const response = await fetch('http://localhost:9988/following');

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

const followingSlice = createSlice({
  name: 'following',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(followingFetch.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = 'loading';
      })
      .addCase(followingFetch.fulfilled, (state, action) => {
        state.followingData = action.payload;
        state.loading = false;
        state.status = 'resolved';
      })
      .addMatcher(asError, (state, action: PayloadAction<string>) => {
        state.error = action.payload as string;
        state.status = 'rejected';
      });
  },
});

export default followingSlice.reducer;
