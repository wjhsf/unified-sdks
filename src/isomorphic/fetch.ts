/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import crossFetch from 'cross-fetch';
import {JsonObject} from '../static/helpers/types';
import {
  parseResponseBody,
  validateSuccessfulResponse,
} from '../static/helpers/response';
import {AnyRequestInit} from './config';

export async function fetch(
  url: string,
  requestInit?: AnyRequestInit,
  options?: Record<string, never>
): Promise<JsonObject>;
export async function fetch<RawResponse extends boolean>(
  url: string,
  requestInit?: AnyRequestInit,
  options?: {rawResponse?: RawResponse}
): Promise<RawResponse extends true ? Response : JsonObject>;
export async function fetch(
  url: string,
  requestInit?: AnyRequestInit,
  options?: {rawResponse?: boolean}
): Promise<Response | JsonObject> {
  const response = await crossFetch(url, requestInit);
  validateSuccessfulResponse(response);
  return options?.rawResponse === true ? response : parseResponseBody(response);
}
