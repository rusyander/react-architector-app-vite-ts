/* eslint-disable no-param-reassign */
import {
  createSlice,
  PayloadAction,
  AnyAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';

import { IHelperLinkModel } from '../model/helperLinkModel';

export type HelperLinkType = {
  loading: boolean;
  error: string | null;
  helperLinkData: IHelperLinkModel[];
  status: string | null;
};

const initialState: HelperLinkType = {
  loading: false,
  error: null,
  helperLinkData: [],
  status: null,
};

export const helperLinkfetch = createAsyncThunk<
  IHelperLinkModel[],
  undefined,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  { rejectWithValue: string }
  // eslint-disable-next-line consistent-return
>('helperLinks/helperLinkfetch', async function (_, { rejectWithValue }) {
  try {
    const response = await fetch('http://localhost:9988/groupEventHashtag');
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

const helperLinksSlice = createSlice({
  name: 'helperLinks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(helperLinkfetch.pending, (state) => {
        state.loading = true;
        state.status = 'loading';
      })
      .addCase(helperLinkfetch.fulfilled, (state, action) => {
        state.loading = false;
        state.helperLinkData = action.payload;
        state.status = 'resolved';
      })
      .addMatcher(asError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.status = 'rejected';
      });
  },
});

export default helperLinksSlice.reducer;
