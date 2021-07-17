import type { AxiosError } from 'axios';

export interface Response {
  status?: number;
  statusText?: string;
  data?: Record<string, any>;
  message?: string;
  url?: string;
}

export type ErrorResponse = AxiosError | Record<string, any> | Response;
