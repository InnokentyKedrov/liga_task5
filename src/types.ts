export interface IData {
  name: string;
  info: string;
  isImportant: boolean;
  isCompleted: boolean;
}

export type IPatch = Pick<IData, 'isCompleted'>;

export interface IHXR {
  open(method: string, url: string, async?: boolean, username?: string | null, password?: string | null): void;
  send(data?: Document | BodyInit | null): void;
  setRequestHeader(header: string, value: string): void;
  abort(): void;
  readonly UNSENT: number;
  readonly OPENED: number;
  readonly HEADERS_RECEIVED: number;
  readonly LOADING: number;
  readonly DONE: number;
  onreadystatechange: ((this: XMLHttpRequest, ev: Event) => unknown) | null;
  readonly readyState: number;
  readonly response: unknown;
  readonly responseText: string;
  responseType: XMLHttpRequestResponseType;
  responseURL: string;
  readonly status: number;
  readonly statusText: string;
  timeout: number;
  readonly upload: XMLHttpRequestUpload;
  withCredentials: boolean;
  onloadend: ((this: XMLHttpRequest, ev: Event) => unknown) | null;
}

export type MethodType = 'fetch' | 'xml';
