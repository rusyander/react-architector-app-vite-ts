import { vi } from 'vitest';
import { fetchUserProfile } from '../store/userProfileSlice';

global.fetch = vi.fn();

describe('fetchUserProfile', () => {
  test('return succes result', async () => {
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

    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockValue),
    });

    const dispatch = vi.fn();
    const thunk = fetchUserProfile();

    await thunk(dispatch, () => {}, undefined);

    const { calls } = dispatch.mock;
    const [start, end] = calls;

    expect(start[0].type).toBe(fetchUserProfile.pending.type);
    expect(end[0].type).toBe(fetchUserProfile.fulfilled.type);
    expect(end[0].payload).toEqual(mockValue);
  });

  test('return error result', async () => {
    fetch.mockReturnValue({
      ok: false,
    });

    const dispatch = vi.fn();
    const thunk = fetchUserProfile();

    await thunk(dispatch, () => {}, undefined);

    const { calls } = dispatch.mock;
    const [start, end] = calls;

    expect(start[0].type).toBe(fetchUserProfile.pending.type);
    expect(end[0].type).toBe(fetchUserProfile.rejected.type);
    expect(end[0].payload).toEqual('Server Error!');
  });
});
