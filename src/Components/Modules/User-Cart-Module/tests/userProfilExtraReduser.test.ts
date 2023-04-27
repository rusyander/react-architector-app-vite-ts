import React from 'react';
import userProfileReduser, {
  fetchUserProfile,
} from '../store/userProfileSlice';
import { UserProfileState } from '../store/userProfileSlice';

const initialState: UserProfileState = {
  loading: false,
  error: null,
  userProfile: [],
  status: null,
};

describe('userProfile', () => {
  test('check panding', () => {
    const action = {
      type: fetchUserProfile.pending.type,
      payload: undefined,
    };

    const state = userProfileReduser(initialState, action);
    expect(state.status).toBe('loading');
    expect(state.error).toBeNull();
  });

  test('check fulfilled', () => {
    const mockValue = [
      {
        userImage: './userIcon.svg',
        userName: 'Wawan Purwanto',
        proffesion: 'I have experince 1 year UI/UX Design',
        profileViews: '14',
        profilePost: '240',
        id: '1',
      },
    ];
    const action = {
      type: fetchUserProfile.fulfilled.type,
      payload: mockValue,
    };

    const state = userProfileReduser(initialState, action);

    expect(state).toEqual({
      userProfile: mockValue,
      status: 'resolved',
      error: null,
      loading: false,
    });
  });

  test('check rejected', () => {
    const action = {
      type: fetchUserProfile.rejected.type,
      payload: 'Server Error!',
    };
    const state = userProfileReduser(initialState, action);

    expect(state).toEqual({
      userProfile: [],
      status: 'rejected',
      error: 'Server Error!',
      loading: false,
    });
  });
});
