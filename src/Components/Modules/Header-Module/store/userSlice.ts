/* eslint-disable no-param-reassign */
import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AnyAction,
} from '@reduxjs/toolkit';

import { UserState } from '../model/UserModel';

export const fetchUser = createAsyncThunk<
  UserState[],
  undefined,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  { rejectedValue: string }
  // eslint-disable-next-line consistent-return
>('user/fetchUser', async function (_, { rejectWithValue }) {
  try {
    const response = await fetch('http://localhost:9988/user');

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

export type UserType = {
  user: UserState[];
  loading: boolean;
  error: string | null;
  status: string | null;
};

const initialState: UserType = {
  user: [],
  loading: false,
  error: null,
  status: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.status = 'resolved';
      })
      .addMatcher(asError, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
        state.status = 'rejected';
      });
  },
});

export default userSlice.reducer;
