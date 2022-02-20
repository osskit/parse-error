import type { Response } from 'node-fetch';

export const isError = (e: any) => e.text && typeof e.text === 'function';

export function assertError(e: any): asserts e is Response {
  return e.text && typeof e.text === 'function';
}

export const parseError = async (e: Response) => {
  const text = await e.clone().text()!;
  const error = { status: e, statusText: e.statusText, url: e.url };

  try {
    return { ...error, json: JSON.parse(text) };
  } catch {
    return { ...error, text };
  }
};