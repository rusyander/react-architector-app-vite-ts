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
};

const initialState: HelperLinkType = {
  loading: false,
  error: null,
  helperLinkData: [],
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
      throw new Error('Something went wrong!');
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
      })
      .addCase(helperLinkfetch.fulfilled, (state, action) => {
        state.loading = false;
        state.helperLinkData = action.payload;
      })
      .addMatcher(asError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
      });
  },
});

export default helperLinksSlice.reducer;
