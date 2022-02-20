import type { AxiosError } from 'axios';

export const isError = (e: any) => e.isAxiosError;

export function assertError(e: any): asserts e is AxiosError {
  return isError(e);
}

export const parseError = async (e: AxiosError) => e.toJSON();
