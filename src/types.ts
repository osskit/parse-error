import type { AxiosError } from 'axios';

export interface Response {
  status?: number;
  statusText?: string;
  data?: Record<string, any>;
  message?: string;
  url?: string;
  [key: string]: any;
}

export type ErrorResponse = AxiosError | Response;
