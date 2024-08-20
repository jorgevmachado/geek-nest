import { validate as isUuid } from 'uuid';
import { serialize } from '../object';

export function formatUrl(url: string, path: string, params = {}) {
  const query = serialize(params);
  const filteredUrl = [url, path].filter((i) => i).join('/');

  return `${filteredUrl}?${query || ''}`;
}

export function generateOrder(url: string, urlDefault: string): number {
  return Number(url.replace(urlDefault, '').replace('/', ''));
}

export function isUUID(value: string): boolean {
  return isUuid(value);
}
