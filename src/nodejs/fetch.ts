/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import nodeFetch, {Request, RequestInit, Response} from 'node-fetch';
import {JsonObject} from '../static/helpers/types';
import {
  parseResponseBody,
  validateSuccessfulResponse,
} from '../static/helpers/response';
import {Config} from './config';

type FetchOptions = Pick<Config<never>, 'cacheManager' | 'rawResponse'>;

export function fetch(
  url: string,
  requestInit?: RequestInit,
  options?: FetchOptions & {rawResponse?: false}
): Promise<JsonObject>;
export function fetch(
  url: string,
  requestInit?: RequestInit,
  options?: FetchOptions & {rawResponse: true}
): Promise<Response>;
export async function fetch(
  url: string,
  requestInit?: RequestInit,
  options?: FetchOptions
): Promise<Response | JsonObject> {
  const request = new Request(url, requestInit);

  // Not a real cache manager - just to demonstrate node-specific code
  const response =
    options?.cacheManager?.get(request) ?? (await nodeFetch(request));
  options?.cacheManager?.set(request, response);

  validateSuccessfulResponse(response);
  return options?.rawResponse === true ? response : parseResponseBody(response);
}
