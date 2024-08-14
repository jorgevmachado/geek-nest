import { formatUrl, generateOrder } from './string';

describe('formatUrl', () => {
  it('should return formatted URL when all parameters are valid', () => {
    const url = 'http://example.com';
    const path = 'api';
    const params = { key1: 'value1', key2: 'value2' };
    const result = formatUrl(url, path, params);
    expect(result).toBe('http://example.com/api?key1=value1&key2=value2');
  });

  it('should return formatted URL without query parameters', () => {
    const url = 'http://example.com';
    const path = 'api';
    const result = formatUrl(url, path);
    expect(result).toBe('http://example.com/api?');
  });

  it('should return formatted URL with empty path', () => {
    const url = 'http://example.com';
    const path = '';
    const params = { key1: 'value1' };
    const result = formatUrl(url, path, params);
    expect(result).toBe('http://example.com?key1=value1');
  });
});

describe('generateOrder', () => {
  it('should generate correct order from URL', () => {
    const url = 'http://example.com/123';
    const urlDefault = 'http://example.com';
    const result = generateOrder(url, urlDefault);
    expect(result).toBe(123);
  });

  it('should generate correct order when URL does not contain the pattern', () => {
    const url = 'http://example.com/456';
    const urlDefault = 'http://example.com/api';
    const result = generateOrder(url, urlDefault);
    expect(result).toBe(NaN);
  });
});
