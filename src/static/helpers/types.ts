/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import {RequestInit as NodeRequestInit} from 'node-fetch';

// --- Generic types --- //

/**
 * Mark part of a type as required.
 */
export type RequireSubset<T, K extends keyof T> = T & Required<Pick<T, K>>;

/**
 * Mark part of a type as optional.
 */
export type PartialSubset<T, K extends keyof T> = Omit<T, K> & Partial<T>;

export type RequiredKeys<T> = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

export type Compose<
  Target extends Record<string, unknown>,
  Provided extends Partial<Target>
> = Omit<Target, RequiredKeys<Provided>> & Partial<Target>;

export type ParametersOptionalIfAlreadyProvided<
  T extends Record<string, unknown>
> = Record<string, never> extends T ? {parameters?: T} : {parameters: T};

// --- JSON types --- //

// eslint-disable-next-line no-use-before-define
export type JsonValue = string | number | boolean | JsonObject | JsonArray;

export interface JsonObject {
  [key: string]: JsonValue;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface JsonArray extends Array<JsonValue> {}

// --- SCAPI types --- //

/**
 * Template parameters used in the base URI of all API endpoints. `version` will default to `"v1"`
 * if not specified.
 */
export type BaseUriParameters = {
  shortCode: string;
  version?: string; // Optional, will default to "v1" if not provided.
};

/**
 * Generic interface for path parameters.
 */
export type PathParameters = {
  [key: string]: string | number | boolean | string[] | number[];
};

/**
 * Generic interface for query parameters.
 */
export type QueryParameters = {
  [key: string]: string | number | boolean | string[] | number[];
};

/**
 * Generic interface for all parameter types.
 */
export type UrlParameters = BaseUriParameters &
  PathParameters &
  QueryParameters;

// --- SDK -- //

export interface BaseConfig<Params extends UrlParameters> {
  baseUri?: string;
  // Technically available via requestInit, but elevated for convenience
  headers?: Record<string, string>;
  parameters: Params;
  rawResponse?: boolean;
  requestInit?: NodeRequestInit;
}
