import { vi } from 'vitest';
import { coursesPopularFetch } from '../store/coursesPopulerSlice';

global.fetch = vi.fn();

describe('coursesPopularFetch', () => {
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
    const thunk = coursesPopularFetch();

    await thunk(dispatch, () => {}, undefined);

    const { calls } = dispatch.mock;
    const [start, end] = calls;

    expect(start[0].type).toBe(coursesPopularFetch.pending.type);
    expect(end[0].type).toBe(coursesPopularFetch.fulfilled.type);
    expect(end[0].payload).toEqual(mockValue);
  });

  test('return error result', async () => {
    fetch.mockReturnValue({
      ok: false,
    });

    const dispatch = vi.fn();
    const thunk = coursesPopularFetch();

    await thunk(dispatch, () => {}, undefined);

    const { calls } = dispatch.mock;
    const [start, end] = calls;

    expect(start[0].type).toBe(coursesPopularFetch.pending.type);
    expect(end[0].type).toBe(coursesPopularFetch.rejected.type);
    expect(end[0].payload).toEqual('Server Error!');
  });
});
