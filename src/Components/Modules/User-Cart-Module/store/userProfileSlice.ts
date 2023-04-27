/* eslint-disable no-param-reassign */
import {
  createSlice,
  AnyAction,
  createAsyncThunk,
  PayloadAction,
} from '@reduxjs/toolkit';

import { UserProfileModel } from '../model/userProfileModel';

export type UserProfileState = {
  userProfile: UserProfileModel[];
  loading: boolean;
  error: string | null;
  status: string | null;
};

const initialState: UserProfileState = {
  loading: false,
  error: null,
  status: null,
  userProfile: [],
};

export const fetchUserProfile = createAsyncThunk<
  UserProfileModel[],
  undefined,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  { rejectWithValue: string }
  // eslint-disable-next-line consistent-return
>('userProfile/fetchUserProfile', async function (_, { rejectWithValue }) {
  try {
    const response = await fetch('http://localhost:9988/userProfile');

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

function asError(payload: AnyAction) {
  return payload.type.endsWith('rejected');
}

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.loading = false;
        state.userProfile = action.payload;
      })
      .addMatcher(asError, (state, action: PayloadAction<string>) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default userProfileSlice.reducer;
