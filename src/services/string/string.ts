import { serialize } from '../object';

export function formatUrl(url: string, path: string, params = {}) {
  const query = serialize(params);
  const filteredUrl = [url, path].filter((i) => i).join('/');

  return `${filteredUrl}?${query || ''}`;
}

export const generateOrder = (url: string, urlDefault: string): number => {
  return Number(url.replace(urlDefault, '').replace('/', ''));
};
