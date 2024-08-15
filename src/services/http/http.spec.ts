import { Http } from './http';

class HttpService extends Http {
  constructor(url: string, config: RequestInit) {
    super(url, config);
  }
}

describe('Http', () => {
  let httpService: HttpService;
  const url = 'http://example.com';
  const config: RequestInit = {
    headers: { 'Content-Type': 'application/json' },
  };

  beforeEach(() => {
    httpService = new HttpService(url, config);
  });

  it('should return data when GET request is successful', async () => {
    const data = { key: 'value' };
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => data,
    });

    const result = await httpService.get('path');
    expect(result).toEqual(data);
  });

  it('should throw error when GET request fails', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => ({ error: 'Internal Server Error' }),
    });

    await expect(httpService.get('path')).rejects.toEqual({
      status: 500,
      response: { error: 'Internal Server Error' },
    });
  });

  it('should return data when POST request is successful', async () => {
    const data = { key: 'value' };
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => data,
    });

    const result = await httpService.post('path', { body: { key: 'value' } });
    expect(result).toEqual(data);
  });

  it('should throw error when POST request fails', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => ({ error: 'Internal Server Error' }),
    });

    await expect(
      httpService.post('path', { body: { key: 'value' } }),
    ).rejects.toEqual({
      status: 500,
      response: { error: 'Internal Server Error' },
    });
  });
});
