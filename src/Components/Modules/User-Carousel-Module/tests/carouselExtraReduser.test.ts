import React from 'react';
import carouselReduser, { carouselFetch } from '../store/carouselSlice';
import { CarouselType } from '../store/carouselSlice';

const initialState: CarouselType = {
  loading: false,
  error: null,
  carouselData: [],
  status: null,
};

describe('carousel', () => {
  test('pending', () => {
    const action = {
      type: carouselFetch.pending.type,
      payload: undefined,
    };
    const state = carouselReduser(initialState, action);

    expect(state.status).toBe('pending');
    expect(state.error).toBeNull();
  });

  test('fulfilled', () => {
    const mockValue = [
      {
        userImage: './userIcon.svg',
        id: '10',
        name: 'Dwight',
      },
    ];
    const action = {
      type: carouselFetch.fulfilled.type,
      payload: mockValue,
    };
    const state = carouselReduser(initialState, action);

    expect(state).toEqual({
      carouselData: mockValue,
      status: 'resolved',
      error: null,
      loading: false,
    });
  });

  test('rejected', () => {
    const action = {
      type: carouselFetch.rejected.type,
      payload: 'Server Error!',
    };
    const state = carouselReduser(initialState, action);

    expect(state).toEqual({
      carouselData: [],
      status: 'rejected',
      error: 'Server Error!',
      loading: false,
    });
  });
});
