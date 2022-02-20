import type { Response } from 'node-fetch';
import type { AxiosError } from 'axios';
import {
  isError as isFetchError,
  assertError as assertFetchError,
  parseError as parseFetchError,
} from './errors/fetch';
import {
  isError as isAxiosError,
  assertError as assertAxiosError,
  parseError as parseAxiosError,
} from './errors/axios';

export function assertError(e: any): asserts e is Error {
  return e.message;
}

export const parseError = async (e: AxiosError | Error | Response): Promise<any> => {
  if (isFetchError(e)) {
    assertFetchError(e);
    
return parseFetchError(e);
  }
  if (isAxiosError(e)) {
    assertAxiosError(e);
    
return parseAxiosError(e);
  }
  assertError(e);
  
return { name: e.name, message: e.message, stack: e.stack };
};
