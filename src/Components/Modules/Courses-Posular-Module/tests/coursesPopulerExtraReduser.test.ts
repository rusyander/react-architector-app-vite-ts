import React from 'react';
import coursesPopulerReduser, {
  coursesPopularFetch,
} from '../store/coursesPopulerSlice';
import { CoursesPopulerType } from '../store/coursesPopulerSlice';

const initialState: CoursesPopulerType = {
  loading: false,
  error: null,
  coursesPopulerData: [],
  status: null,
};
describe('helperLinks', () => {
  test('pending', () => {
    const action = {
      type: coursesPopularFetch.pending.type,
      payload: undefined,
    };
    const state = coursesPopulerReduser(initialState, action);

    expect(state.status).toBe('loading');
    expect(state.error).toBeNull();
  });

  test('fulfilled', () => {
    const mockValue = [
      { username: 'Wawan Purwanto', id: '1', avatar: './userIcon.svg' },
    ];
    const action = {
      type: coursesPopularFetch.fulfilled.type,
      payload: mockValue,
    };
    const state = coursesPopulerReduser(initialState, action);

    expect(state).toEqual({
      coursesPopulerData: mockValue,
      status: 'resolved',
      error: null,
      loading: false,
    });
  });

  test('rejected', () => {
    const action = {
      type: coursesPopularFetch.rejected.type,
      payload: 'Server Error!',
    };
    const state = coursesPopulerReduser(initialState, action);

    expect(state).toEqual({
      coursesPopulerData: [],
      status: 'rejected',
      error: 'Server Error!',
      loading: false,
    });
  });
});
