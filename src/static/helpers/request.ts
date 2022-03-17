/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import {JsonValue} from './types';

export function parseRequestBody(
  body: JsonValue,
  mediaType: 'application/json'
): string;
export function parseRequestBody(
  body: JsonValue,
  mediaType: 'application/x-www-form-urlencoded'
): URLSearchParams;
export function parseRequestBody(body: JsonValue, mediaType: string): never;
export function parseRequestBody(
  body: JsonValue,
  mediaType: string
): string | URLSearchParams {
  switch (mediaType) {
    case 'application/json':
      // Most APIs have a JSON payload
      return JSON.stringify(body);
    case 'application/x-www-form-urlencoded':
      // Only SLAS currently uses this media type
      // Type assertion is safe because all SLAS payloads use string values
      return new URLSearchParams(body as Record<string, string>);
    default:
      // This should never occur with the current APIs, but might in the future?
      throw new Error(`Unsupported media type: ${String(mediaType)}`);
  }
}
