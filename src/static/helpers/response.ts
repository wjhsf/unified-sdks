/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import type {Response as NodeResponse} from 'node-fetch';
import {JsonObject} from './types';

type BrowserResponse = Response;
type AnyResponse = NodeResponse | BrowserResponse;

export class ResponseError extends Error {
  constructor(public response: AnyResponse) {
    super(`${response.status} ${response.statusText}`);
  }
}

export function validateSuccessfulResponse(response: AnyResponse): void {
  if (!response.ok && response.status !== 304) {
    throw new ResponseError(response);
  }
}

export async function parseResponseBody(
  response: AnyResponse
): Promise<JsonObject> {
  // Every endpoint is expected to return a JSON object. Empty responses are
  // treated as empty objects for consistency.
  const text = await response.text();
  return (text ? JSON.parse(text) : {}) as JsonObject;
}
