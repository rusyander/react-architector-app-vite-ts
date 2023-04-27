import React from 'react';
import helperLinksReduser, { helperLinkfetch } from '../store/helperLinksSlice';
import { HelperLinkType } from '../store/helperLinksSlice';

const initialState: HelperLinkType = {
  loading: false,
  error: null,
  helperLinkData: [],
  status: null,
};

describe('helperLinks', () => {
  test('pending', () => {
    const action = {
      type: helperLinkfetch.pending.type,
      payload: undefined,
    };
    const state = helperLinksReduser(initialState, action);

    expect(state.status).toBe('loading');
    expect(state.error).toBeNull();
  });

  test('fulfilled', () => {
    const mockValue = [{ hashtag: '#UIDesign', id: '1' }];
    const action = {
      type: helperLinkfetch.fulfilled.type,
      payload: mockValue,
    };
    const state = helperLinksReduser(initialState, action);

    expect(state).toEqual({
      helperLinkData: mockValue,
      status: 'resolved',
      error: null,
      loading: false,
    });
  });

  test('rejected', () => {
    const action = {
      type: helperLinkfetch.rejected.type,
      payload: 'Server Error!',
    };
    const state = helperLinksReduser(initialState, action);

    expect(state).toEqual({
      helperLinkData: [],
      status: 'rejected',
      error: 'Server Error!',
      loading: false,
    });
  });
});
