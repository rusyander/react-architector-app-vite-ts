import React from 'react';
import followingReduser, { followingFetch } from '../store/followingSlice';
import { FollowingType } from '../store/followingSlice';

const initialState: FollowingType = {
  loading: false,
  error: null,
  followingData: [],
  status: null,
};
describe('helperLinks', () => {
  test('pending', () => {
    const action = {
      type: followingFetch.pending.type,
      payload: undefined,
    };
    const state = followingReduser(initialState, action);

    expect(state.status).toBe('loading');
    expect(state.error).toBeNull();
  });

  test('fulfilled', () => {
    const mockValue = [
      { username: 'Wawan Purwanto', id: '1', avatar: './userIcon.svg' },
    ];
    const action = {
      type: followingFetch.fulfilled.type,
      payload: mockValue,
    };
    const state = followingReduser(initialState, action);

    expect(state).toEqual({
      followingData: mockValue,
      status: 'resolved',
      error: null,
      loading: false,
    });
  });

  test('rejected', () => {
    const action = {
      type: followingFetch.rejected.type,
      payload: 'Server Error!',
    };
    const state = followingReduser(initialState, action);

    expect(state).toEqual({
      followingData: [],
      status: 'rejected',
      error: 'Server Error!',
      loading: false,
    });
  });
});
