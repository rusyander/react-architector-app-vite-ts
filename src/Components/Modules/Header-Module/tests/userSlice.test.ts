import { vi } from 'vitest';
import { fetchUser } from '../store/userSlice';

global.fetch = vi.fn();

describe('fetchUser', () => {
  test('return succes result', async () => {
    const mockValue = [
      {
        username: 'Wawan Purwanto',
        id: '1',
        avatar: './userIcon.svg',
      },
    ];

    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockValue),
    });

    const dispatch = vi.fn();
    const thunk = fetchUser();

    await thunk(dispatch, () => {}, undefined);

    const { calls } = dispatch.mock;
    const [start, end] = calls;

    expect(start[0].type).toBe(fetchUser.pending.type);
    expect(end[0].type).toBe(fetchUser.fulfilled.type);
    expect(end[0].payload).toEqual(mockValue);
  });

  test('return error result', async () => {
    fetch.mockReturnValue({
      ok: false,
    });

    const dispatch = vi.fn();
    const thunk = fetchUser();

    await thunk(dispatch, () => {}, undefined);

    const { calls } = dispatch.mock;
    const [start, end] = calls;

    expect(start[0].type).toBe(fetchUser.pending.type);
    expect(end[0].type).toBe(fetchUser.rejected.type);
    expect(end[0].payload).toEqual('Server Error!');
  });
});
