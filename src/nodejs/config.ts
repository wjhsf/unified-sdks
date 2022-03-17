/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import {Request, Response, RequestInit as NodeRequestInit} from 'node-fetch';
import {
  BaseConfig,
  Compose,
  ParametersOptionalIfAlreadyProvided,
  UrlParameters,
} from '../static/helpers/types';

// Allow both browser and node init - leave it to the user to use correctly
export type AnyRequestInit = RequestInit & NodeRequestInit;

// Isomorphic SDK client config
export interface Config<Params extends UrlParameters>
  extends BaseConfig<Params> {
  cacheManager?: Map<Request, Response>;
}

// GET/DELETE method options
export type MethodOptions<
  TargetParams extends Record<string, unknown>,
  ConfigParams extends Partial<TargetParams>
> = Partial<Omit<Config<UrlParameters>, 'parameters'>> &
  ParametersOptionalIfAlreadyProvided<Compose<TargetParams, ConfigParams>>;

// PATCH/POST/PUT method options
export type MethodOptionsWithBody<
  TargetParams extends Record<string, unknown>,
  ConfigParams extends Partial<TargetParams>,
  Body
> = MethodOptions<TargetParams, ConfigParams> & {body: Body};
