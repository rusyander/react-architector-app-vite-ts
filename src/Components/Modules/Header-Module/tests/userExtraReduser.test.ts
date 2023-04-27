import React from 'react';
import userReduser, { fetchUser } from '../store/userSlice';
import { UserType } from '../store/userSlice';

const initialState: UserType = {
  user: [],
  loading: false,
  error: null,
  status: null,
};

describe('helperLinks', () => {
  test('pending', () => {
    const action = {
      type: fetchUser.pending.type,
      payload: undefined,
    };
    const state = userReduser(initialState, action);

    expect(state.status).toBe('loading');
    expect(state.error).toBeNull();
  });

  test('fulfilled', () => {
    const mockValue = [
      { username: 'Wawan Purwanto', id: '1', avatar: './userIcon.svg' },
    ];
    const action = {
      type: fetchUser.fulfilled.type,
      payload: mockValue,
    };
    const state = userReduser(initialState, action);

    expect(state).toEqual({
      user: mockValue,
      status: 'resolved',
      error: null,
      loading: false,
    });
  });

  test('rejected', () => {
    const action = {
      type: fetchUser.rejected.type,
      payload: 'Server Error!',
    };
    const state = userReduser(initialState, action);

    expect(state).toEqual({
      user: [],
      status: 'rejected',
      error: 'Server Error!',
      loading: false,
    });
  });
});
