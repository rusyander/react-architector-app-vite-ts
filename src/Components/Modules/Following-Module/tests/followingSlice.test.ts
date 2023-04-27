import { vi } from 'vitest';
import { followingFetch } from '../store/followingSlice';

global.fetch = vi.fn();

describe('followingFetch', () => {
  test('return succes result', async () => {
    const mockValue = [
      {
        userImage: './userIcon.svg',
        userName: 'Jhon Robert',
        proffesion: 'Product Designer at dsgn.id',
        id: '1',
      },
    ];

    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockValue),
    });

    const dispatch = vi.fn();
    const thunk = followingFetch();

    await thunk(dispatch, () => {}, undefined);

    const { calls } = dispatch.mock;
    const [start, end] = calls;

    expect(start[0].type).toBe(followingFetch.pending.type);
    expect(end[0].type).toBe(followingFetch.fulfilled.type);
    expect(end[0].payload).toEqual(mockValue);
  });

  test('return error result', async () => {
    fetch.mockReturnValue({
      ok: false,
    });

    const dispatch = vi.fn();
    const thunk = followingFetch();

    await thunk(dispatch, () => {}, undefined);

    const { calls } = dispatch.mock;
    const [start, end] = calls;

    expect(start[0].type).toBe(followingFetch.pending.type);
    expect(end[0].type).toBe(followingFetch.rejected.type);
    expect(end[0].payload).toEqual('Server Error!');
  });
});
