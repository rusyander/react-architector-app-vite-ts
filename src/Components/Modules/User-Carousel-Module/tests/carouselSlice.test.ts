import { vi } from 'vitest';
import { carouselFetch } from '../store/carouselSlice';

global.fetch = vi.fn();

describe('carouselFetch', () => {
  test('return succes result', async () => {
    const mockValue = [
      {
        userImage: './userIcon.svg',
        id: '10',
        name: 'Dwight',
      },
    ];

    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockValue),
    });

    const dispatch = vi.fn();
    const thunk = carouselFetch();

    await thunk(dispatch, () => {}, undefined);

    const { calls } = dispatch.mock;
    const [start, end] = calls;

    expect(start[0].type).toBe(carouselFetch.pending.type);
    expect(end[0].type).toBe(carouselFetch.fulfilled.type);
    expect(end[0].payload).toEqual(mockValue);
  });

  test('return error result', async () => {
    fetch.mockResolvedValue({
      ok: false,
    });

    const dispatch = vi.fn();
    const thunk = carouselFetch();

    await thunk(dispatch, () => {}, undefined);

    const { calls } = dispatch.mock;
    const [start, end] = calls;

    expect(start[0].type).toBe(carouselFetch.pending.type);
    expect(end[0].type).toBe(carouselFetch.rejected.type);
    expect(end[0].payload).toEqual('Server Error!');
  });
});
