import { vi } from 'vitest';
import { helperLinkfetch } from '../store/helperLinksSlice';

global.fetch = vi.fn();

describe('helperLinkfetch', () => {
  test('return succes result', async () => {
    const mockValue = [
      {
        hashtag: '#UIDesign',
        id: '1',
      },
    ];

    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockValue),
    });

    const dispatch = vi.fn();
    const thunk = helperLinkfetch();

    await thunk(dispatch, () => {}, undefined);

    const { calls } = dispatch.mock;
    const [start, end] = calls;

    expect(start[0].type).toBe(helperLinkfetch.pending.type);
    expect(end[0].type).toBe(helperLinkfetch.fulfilled.type);
    expect(end[0].payload).toEqual(mockValue);
  });

  test('return error result', async () => {
    fetch.mockReturnValue({
      ok: false,
    });

    const dispatch = vi.fn();
    const thunk = helperLinkfetch();

    await thunk(dispatch, () => {}, undefined);

    const { calls } = dispatch.mock;
    const [start, end] = calls;

    expect(start[0].type).toBe(helperLinkfetch.pending.type);
    expect(end[0].type).toBe(helperLinkfetch.rejected.type);
    expect(end[0].payload).toEqual('Server Error!');
  });
});
