import { fetch, Request }  from "cross-fetch";

import ClientConfig, { ClientConfigInit } from "./clientConfig";
import type {
  BaseUriParameters,
  CompositeParameters,
  RequireParametersUnlessAllAreOptional
} from "./helpers";
import TemplateURL from "./templateUrl";
import { USER_AGENT_HEADER, USER_AGENT_VALUE } from "./version";

export type LoginRequest = {
  client_id?: string;
  response_type?: string;
  redirect_uri: string;
  state?: string;
  scope?: string;
  usid?: string;
  channel_id: string;
  code_challenge: string;
} & { [key: string]: any }

  export type PasswordLessTokenRequest = {
  grant_type: string;
  hint: string;
  pwdless_token: string;
  usid?: string;
} & { [key: string]: any }

  export type IntrospectResponse = {
  active: boolean;
  scope: string;
  client_id: string;
  sub: string;
  exp: number;
  username: string;
  token_type: string;
} & { [key: string]: any }

  export type CredQualityUserResponse = {
  tenantId: string;
  username: string;
  email: string;
  credQualityMeasure: number;
  pwdStrengthMeasure: number;
  pwdQualityMeasure: number;
  credChangeCount: number;
  loginCount: number;
  lastLoginDatetime: any;
  lastCredCheckDatetime: any;
} & { [key: string]: any }

  export type Oauth2ErrorResponse = {
  error: string;
  error_uri?: string;
  error_description?: string;
} & { [key: string]: any }

  export type ErrorResponse = {
  type: string;
  title?: string;
  detail?: string;
  instance?: string;
} & { [key: string]: any }

  export type TrustedSystemTokenRequest = {
  usid?: string;
  grant_type: string;
  hint: string;
  login_id: string;
  idp_origin: string;
  client_id: string;
  channel_id: string;
} & { [key: string]: any }

  export type TokenResponse = {
  access_token: string;
  id_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
  usid: string;
  customer_id: string;
  enc_user_id: string;
} & { [key: string]: any }

  export type TokenRequest = {
  refresh_token?: string;
  code?: string;
  usid?: string;
  grant_type: string;
  redirect_uri?: string;
  code_verifier?: string;
  client_id?: string;
} & { [key: string]: any }

  export type PasswordLessAuthRequest = {
  user_id: string;
  mode: string;
  channel_id: string;
} & { [key: string]: any }

  export type TokenActionRequest = {
  token: string;
  token_type_hint?: string;
} & { [key: string]: any }

  type SlasRateLimit = { [key: string]: any }
type EtagResponse = { [key: string]: any }
type RateLimited3 = { [key: string]: any }
type SyncCreated = { [key: string]: any }
type DateConditionalRequest = { [key: string]: any }
type RateLimited5 = { [key: string]: any }
type EtagConditionalRequest = { [key: string]: any }
type AsyncCreated = { [key: string]: any }
type RateLimited = { [key: string]: any }
type RateLimited2 = { [key: string]: any }
type OffsetPaginated = { [key: string]: any }
type RateLimited4 = { [key: string]: any }
export type Money = {
  currencyMnemonic?: string;
  value?: number;
} & { [key: string]: any }

  export type SimpleSearchResult = {
  limit: number;
  hits?: Array<object>;
  offset: any;
  total: any;
} & { [key: string]: any }

  export type SearchRequest = {
  limit?: number;
  query: any;
  sorts?: Array<Sort>;
  offset?: any;
} & { [key: string]: any }

  export type PropertyDefinition = {
  defaultValue?: PropertyValueDefinition;
  id?: string;
  name: L10nString;
  description: L10nString;
  key?: boolean;
  localizable?: boolean;
  mandatory?: boolean;
  max?: number;
  minLength?: number;
  min?: number;
  multiValueType?: boolean;
  regularExpression?: string;
  scale?: number;
  searchable?: boolean;
  siteSpecific?: boolean;
  system?: boolean;
  unit?: L10nString;
  possibleValues?: Array<PropertyValueDefinition>;
  type: string;
  visible?: boolean;
} & { [key: string]: any }

  export type LocalizedString = {
} & { [key: string]: any }

  export type PaginatedSearchResult = {
  query: any;
  sorts?: Array<Sort>;
  limit: number;
  hits?: Array<object>;
  offset: any;
  total: any;
} & { [key: string]: any }

  export type ClosedObject = {
} & { [key: string]: any }

  export type OpenObject = {
} & { [key: string]: any }

  type QueryParamsLimit = { [key: string]: any }
type QueryParamsOffset = { [key: string]: any }
type SiteSpecific = { [key: string]: any }
export type NoPropertiesAllowed = {
}
  export type SpecifiedPropertiesAllowed = {
} & { [key: string]: any }

  export type BoolFilter = {
  filters?: Array<any>;
  operator: string;
} & { [key: string]: any }

  export type PaginatedSearchResultBase = {
  query: any;
  sorts?: Array<Sort>;
  limit: number;
  hits?: Array<object>;
  offset: any;
  total: any;
} & { [key: string]: any }

  export type MatchAllQuery = {
} & { [key: string]: any }

  export type FilteredQuery = {
  filter: any;
  query: any;
} & { [key: string]: any }

  export type QueryFilter = {
  query: any;
} & { [key: string]: any }

  export type Query = {
  boolQuery?: BoolQuery;
  filteredQuery?: FilteredQuery;
  matchAllQuery?: MatchAllQuery;
  nestedQuery?: NestedQuery;
  termQuery?: TermQuery;
  textQuery?: TextQuery;
} & { [key: string]: any }

  export type TermQuery = {
  fields: Array<string>;
  operator: string;
  values?: Array<any>;
} & { [key: string]: any }

  export type TermFilter = {
  field: string;
  operator: string;
  values?: Array<any>;
} & { [key: string]: any }

  export type TextQuery = {
  fields: Array<string>;
  searchPhrase: string;
} & { [key: string]: any }

  export type Range2Filter = {
  filterMode?: string;
  fromField: string;
  fromInclusive?: boolean;
  fromValue?: any;
  toField: string;
  toInclusive?: boolean;
  toValue?: any;
} & { [key: string]: any }

  export type BoolQuery = {
  must?: Array<any>;
  mustNot?: Array<any>;
  should?: Array<any>;
} & { [key: string]: any }

  export type SimpleSearchResultBase = {
  limit: number;
  hits?: Array<object>;
  offset: any;
  total: any;
} & { [key: string]: any }

  export type NestedQuery = {
  path: string;
  query: any;
  scoreMode?: string;
} & { [key: string]: any }

  export type Filter = {
  boolFilter?: BoolFilter;
  queryFilter?: QueryFilter;
  range2Filter?: Range2Filter;
  rangeFilter?: RangeFilter;
  termFilter?: TermFilter;
} & { [key: string]: any }

  export type Sort = {
  field: string;
  sortOrder?: string;
} & { [key: string]: any }

  export type RangeFilter = {
  field: string;
  from?: any;
  fromInclusive?: boolean;
  to?: any;
  toInclusive?: boolean;
} & { [key: string]: any }

  export type SearchRequestBase = {
  limit?: number;
  query: any;
  sorts?: Array<Sort>;
  offset?: any;
} & { [key: string]: any }

  export type MoneyMnemonic = {
  currencyMnemonic?: string;
  value?: number;
} & { [key: string]: any }

  export type L10nString = {
} & { [key: string]: any }

  export type AttributeDefinition = {
  defaultValue?: PropertyValueDefinition;
  id?: string;
  name: L10nString;
  description: L10nString;
  key?: boolean;
  localizable?: boolean;
  mandatory?: boolean;
  max?: number;
  minLength?: number;
  min?: number;
  multiValueType?: boolean;
  regularExpression?: string;
  scale?: number;
  searchable?: boolean;
  siteSpecific?: boolean;
  system?: boolean;
  unit?: L10nString;
  possibleValues?: Array<PropertyValueDefinition>;
  type: string;
  visible?: boolean;
}
  export type PropertyValueDefinition = {
  description: L10nString;
  displayValue: L10nString;
  id: string;
  position?: number;
  value: string;
}
  
/**
 * All path parameters that are used by at least one ShopperLogin method.
 */
export type ShopperLoginPathParameters = {
  organizationId?: string;
}
/**
 * All query parameters that are used by at least one ShopperLogin method.
 */
export type ShopperLoginQueryParameters = {
  username?: string;
  client_id?: string;
  refresh_token?: string;
  channel_id?: string;
  redirect_uri?: string;
  response_type?: string;
  scope?: string;
  state?: string;
  usid?: string;
  hint?: string;
  code_challenge?: string;
}

/**
 * All parameters that are used by ShopperLogin.
 */
export type ShopperLoginParameters = ShopperLoginPathParameters & BaseUriParameters & ShopperLoginQueryParameters;

/**
* [Shopper Login and API Access Service](https://developer.salesforce.com/docs/commerce/commerce-api/references?meta=shopper-login:Summary)
* ==================================
*
* *Enable shoppers to log in more easily, stay logged in for longer, and get a more fluid and personalized shopping experience powered by Shopper APIs.*<br />
*
* Simple example:
*
* ```typescript
*   import { ShopperLogin } from "commerce-sdk-isomorphic";
*
*   const clientConfig = {
*     parameters: {
*       clientId: "XXXXXX",
*       organizationId: "XXXX",
*       shortCode: "XXX",
*       siteId: "XX"
*     }
*   };
*   const shopperLoginClient = new ShopperLogin(clientConfig);
* ```
*
* <span style="font-size:.7em; display:block; text-align: right">
* API Version: 1.24.0<br />
* Last Updated: <br />  
* </span>

* 

*/
export class ShopperLogin<ConfigParameters extends ShopperLoginParameters & Record<string, unknown>> {
  // baseUri is not required on ClientConfig, but we know that we provide one in the class constructor
  public clientConfig: ClientConfig<ConfigParameters> & { baseUri: string };

  static readonly defaultBaseUri = "https://{shortCode}.api.commercecloud.salesforce.com/shopper/auth/{version}";

  constructor(config: ClientConfigInit<ConfigParameters>) {
    const cfg = {...config}
    if (!cfg.baseUri) cfg.baseUri = new.target.defaultBaseUri;
    // Type assertion is safe because ^^^
    this.clientConfig = new ClientConfig(cfg) as ClientConfig<ConfigParameters> & { baseUri: string };
  }

      /**
      * Retrieve credential quality statistics for a user.
      *
      * If you would like to get a raw Response object use the other retrieveCredQualityUserInfo function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param username - User's login id or email address.
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type CredQualityUserResponse.
      * 
      */
      retrieveCredQualityUserInfo(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            username: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<CredQualityUserResponse>;
  
      /**
      * Retrieve credential quality statistics for a user.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param username - User's login id or email address.
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type CredQualityUserResponse otherwise.
      * 
      */
      retrieveCredQualityUserInfo<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            username: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : CredQualityUserResponse>;
  
      /**
      * Retrieve credential quality statistics for a user.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param username - User's login id or email address.
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type CredQualityUserResponse otherwise.
      * 
      */
      async retrieveCredQualityUserInfo(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            username: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | CredQualityUserResponse> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperLoginPathParameters & Required<BaseUriParameters> = {
          shortCode: configParams.shortCode,
          version: configParams.version || "v1"
        };
        if (optionParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = optionParams["organizationId"];
        } else if (configParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = configParams["organizationId"];
        }
        else {
          throw new Error('Missing required path parameter: organizationId');
        }
  
        const queryParams: ShopperLoginQueryParameters = {};
        if (optionParams["username"] !== undefined) {
          queryParams["username"] = optionParams["username"];
        } else if (configParams["username"] !== undefined) {
          queryParams["username"] = configParams["username"];
        }
        else {
          throw new Error('Missing required query parameter: username');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/cred-qual/user",
          this.clientConfig.baseUri,
          {
            pathParams,
            queryParams,
            origin: this.clientConfig.proxy
          }
        );
  
        const headers: Record<string, string> = {
          ...this.clientConfig.headers,
          ...options?.headers
        };
  
        headers[USER_AGENT_HEADER] = [headers[USER_AGENT_HEADER], USER_AGENT_VALUE].join(" ");
  
        const req = new Request(
          url.toString(),
          {
            ...this.clientConfig.fetchOptions,
            
            headers,
            method: "GET"
          }
        );
        const response = await fetch(req);
        if (rawResponse) {
          return response;
        } else if (this.clientConfig.throwOnBadResponse && !response.ok && response.status !== 304) {
          throw new Error('Error ' + response.status + ': ' + response.statusText);
        }
          else {
            const text = await response.text();
            // It's ideal to get "{}" for an empty response body, but we won't throw if it's truly empty
            return text ? JSON.parse(text) : {};
          }
      }
      /**
      * Get authorization code after authenticating a user using an ECOM instance.
      *
      * If you would like to get a raw Response object use the other authenticateCustomer function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type void.
      * 
      */
      authenticateCustomer(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: LoginRequest
        }>
      ): Promise<void>;
  
      /**
      * Get authorization code after authenticating a user using an ECOM instance.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      authenticateCustomer<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: LoginRequest
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : void>;
  
      /**
      * Get authorization code after authenticating a user using an ECOM instance.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      async authenticateCustomer(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: LoginRequest
        }>,
        rawResponse?: boolean
      ): Promise<Response | void> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperLoginPathParameters & Required<BaseUriParameters> = {
          shortCode: configParams.shortCode,
          version: configParams.version || "v1"
        };
        if (optionParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = optionParams["organizationId"];
        } else if (configParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = configParams["organizationId"];
        }
        else {
          throw new Error('Missing required path parameter: organizationId');
        }
  
        const queryParams: ShopperLoginQueryParameters = {};
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/oauth2/login",
          this.clientConfig.baseUri,
          {
            pathParams,
            queryParams,
            origin: this.clientConfig.proxy
          }
        );
  
        const headers: Record<string, string> = {
          "Content-Type": "application/x-www-form-urlencoded",
          ...this.clientConfig.headers,
          ...options?.headers
        };
  
        headers[USER_AGENT_HEADER] = [headers[USER_AGENT_HEADER], USER_AGENT_VALUE].join(" ");
  
        const req = new Request(
          url.toString(),
          {
            ...this.clientConfig.fetchOptions,
            body: this.clientConfig.transformRequest(options.body, headers),
            headers,
            method: "POST"
          }
        );
        const response = await fetch(req);
        if (rawResponse) {
          return response;
        } else if (this.clientConfig.throwOnBadResponse && !response.ok && response.status !== 304) {
          throw new Error('Error ' + response.status + ': ' + response.statusText);
        }
      }
      /**
      * Allows the customer to authenticate when their identity provider is down.
      *
      * If you would like to get a raw Response object use the other authorizePasswordlessCustomer function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Object.
      * 
      */
      authorizePasswordlessCustomer(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: PasswordLessAuthRequest
        }>
      ): Promise<Object>;
  
      /**
      * Allows the customer to authenticate when their identity provider is down.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Object otherwise.
      * 
      */
      authorizePasswordlessCustomer<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: PasswordLessAuthRequest
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Object>;
  
      /**
      * Allows the customer to authenticate when their identity provider is down.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Object otherwise.
      * 
      */
      async authorizePasswordlessCustomer(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: PasswordLessAuthRequest
        }>,
        rawResponse?: boolean
      ): Promise<Response | Object> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperLoginPathParameters & Required<BaseUriParameters> = {
          shortCode: configParams.shortCode,
          version: configParams.version || "v1"
        };
        if (optionParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = optionParams["organizationId"];
        } else if (configParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = configParams["organizationId"];
        }
        else {
          throw new Error('Missing required path parameter: organizationId');
        }
  
        const queryParams: ShopperLoginQueryParameters = {};
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/oauth2/passwordless/login",
          this.clientConfig.baseUri,
          {
            pathParams,
            queryParams,
            origin: this.clientConfig.proxy
          }
        );
  
        const headers: Record<string, string> = {
          "Content-Type": "application/x-www-form-urlencoded",
          ...this.clientConfig.headers,
          ...options?.headers
        };
  
        headers[USER_AGENT_HEADER] = [headers[USER_AGENT_HEADER], USER_AGENT_VALUE].join(" ");
  
        const req = new Request(
          url.toString(),
          {
            ...this.clientConfig.fetchOptions,
            body: this.clientConfig.transformRequest(options.body, headers),
            headers,
            method: "POST"
          }
        );
        const response = await fetch(req);
        if (rawResponse) {
          return response;
        } else if (this.clientConfig.throwOnBadResponse && !response.ok && response.status !== 304) {
          throw new Error('Error ' + response.status + ': ' + response.statusText);
        }
          else {
            const text = await response.text();
            // It's ideal to get "{}" for an empty response body, but we won't throw if it's truly empty
            return text ? JSON.parse(text) : {};
          }
      }
      /**
      * Log a shopper out.
      *
      * If you would like to get a raw Response object use the other logoutCustomer function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param client_id - The SLAS client ID.
      * @param refresh_token - Refresh token that was given during the access token request.
      * @param channel_id - The channel_id parameter is a MUST (required) if the shopper authenticated using the /login with ECOM.
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type TokenResponse.
      * 
      */
      logoutCustomer(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            client_id: string
            refresh_token: string
            channel_id?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<TokenResponse>;
  
      /**
      * Log a shopper out.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param client_id - The SLAS client ID.
      * @param refresh_token - Refresh token that was given during the access token request.
      * @param channel_id - The channel_id parameter is a MUST (required) if the shopper authenticated using the /login with ECOM.
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type TokenResponse otherwise.
      * 
      */
      logoutCustomer<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            client_id: string
            refresh_token: string
            channel_id?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : TokenResponse>;
  
      /**
      * Log a shopper out.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param client_id - The SLAS client ID.
      * @param refresh_token - Refresh token that was given during the access token request.
      * @param channel_id - The channel_id parameter is a MUST (required) if the shopper authenticated using the /login with ECOM.
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type TokenResponse otherwise.
      * 
      */
      async logoutCustomer(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            client_id: string
            refresh_token: string
            channel_id?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | TokenResponse> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperLoginPathParameters & Required<BaseUriParameters> = {
          shortCode: configParams.shortCode,
          version: configParams.version || "v1"
        };
        if (optionParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = optionParams["organizationId"];
        } else if (configParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = configParams["organizationId"];
        }
        else {
          throw new Error('Missing required path parameter: organizationId');
        }
  
        const queryParams: ShopperLoginQueryParameters = {};
        if (optionParams["client_id"] !== undefined) {
          queryParams["client_id"] = optionParams["client_id"];
        } else if (configParams["client_id"] !== undefined) {
          queryParams["client_id"] = configParams["client_id"];
        }
        else {
          throw new Error('Missing required query parameter: client_id');
        }
        if (optionParams["refresh_token"] !== undefined) {
          queryParams["refresh_token"] = optionParams["refresh_token"];
        } else if (configParams["refresh_token"] !== undefined) {
          queryParams["refresh_token"] = configParams["refresh_token"];
        }
        else {
          throw new Error('Missing required query parameter: refresh_token');
        }
        if (optionParams["channel_id"] !== undefined) {
          queryParams["channel_id"] = optionParams["channel_id"];
        } else if (configParams["channel_id"] !== undefined) {
          queryParams["channel_id"] = configParams["channel_id"];
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/oauth2/logout",
          this.clientConfig.baseUri,
          {
            pathParams,
            queryParams,
            origin: this.clientConfig.proxy
          }
        );
  
        const headers: Record<string, string> = {
          ...this.clientConfig.headers,
          ...options?.headers
        };
  
        headers[USER_AGENT_HEADER] = [headers[USER_AGENT_HEADER], USER_AGENT_VALUE].join(" ");
  
        const req = new Request(
          url.toString(),
          {
            ...this.clientConfig.fetchOptions,
            
            headers,
            method: "GET"
          }
        );
        const response = await fetch(req);
        if (rawResponse) {
          return response;
        } else if (this.clientConfig.throwOnBadResponse && !response.ok && response.status !== 304) {
          throw new Error('Error ' + response.status + ': ' + response.statusText);
        }
          else {
            const text = await response.text();
            // It's ideal to get "{}" for an empty response body, but we won't throw if it's truly empty
            return text ? JSON.parse(text) : {};
          }
      }
      /**
      * Get authorization code after authenticating a user against an IDP. This is the first step of the Authorization code grant flow, where a user is able to log in via federation to the IDP configured for the client, and gets an authorization code after successful login via a callback/redirect URI. Mandatory fields are the shopping app's clientId, redirectURI, responseType and authType. This API can be called from the front channel (from the browser).
      *
      * If you would like to get a raw Response object use the other authorizeCustomer function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param redirect_uri - The URL to which the server redirects the browser after the user grants the authorization. The URI must be pre-registered.
      * @param response_type - Must be 'code'. 'code' indicates that the client wants an authorization code (authorization code grant flow).
      * @param client_id - The client ID obtained during application registration.
      * @param scope - (Not Supported)
      * @param state - Value to be sent by the client to determine the state between the authorization request and the server response.  Optional but strongly recommended.
      * @param usid - ID that uniquely identifies the shopper much like a UUID. This is an optional field, a new USID will be generated if this field is empty.
      * @param hint - IDP name that can be optionally added to redirect directly to skipping the IDP selection step.<br/><br/>To use a public client the hint should be set to <b>guest</b> and a public client id should be used to get an authorization code.
      * @param channel_id - The channel this request is for. For an ECOM request this is angalous to the site ID.
      * @param code_challenge - Created by the client calling the login endpoint.<br><br>The code_challenge is created by SHA256 hashing the code_verifier and base64 URL encoding the resulting hash Base64UrlEncode(SHA256Hash(code_verifier).<br><br>The code verifier should be a high-entropy cryptographic random string with a minimum of 43 characters and a maximum of 128 characters.
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type void.
      * 
      */
      authorizeCustomer(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            redirect_uri: string
            response_type: string
            client_id: string
            scope?: string
            state?: string
            usid?: string
            hint?: string
            channel_id?: string
            code_challenge: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<void>;
  
      /**
      * Get authorization code after authenticating a user against an IDP. This is the first step of the Authorization code grant flow, where a user is able to log in via federation to the IDP configured for the client, and gets an authorization code after successful login via a callback/redirect URI. Mandatory fields are the shopping app's clientId, redirectURI, responseType and authType. This API can be called from the front channel (from the browser).
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param redirect_uri - The URL to which the server redirects the browser after the user grants the authorization. The URI must be pre-registered.
      * @param response_type - Must be 'code'. 'code' indicates that the client wants an authorization code (authorization code grant flow).
      * @param client_id - The client ID obtained during application registration.
      * @param scope - (Not Supported)
      * @param state - Value to be sent by the client to determine the state between the authorization request and the server response.  Optional but strongly recommended.
      * @param usid - ID that uniquely identifies the shopper much like a UUID. This is an optional field, a new USID will be generated if this field is empty.
      * @param hint - IDP name that can be optionally added to redirect directly to skipping the IDP selection step.<br/><br/>To use a public client the hint should be set to <b>guest</b> and a public client id should be used to get an authorization code.
      * @param channel_id - The channel this request is for. For an ECOM request this is angalous to the site ID.
      * @param code_challenge - Created by the client calling the login endpoint.<br><br>The code_challenge is created by SHA256 hashing the code_verifier and base64 URL encoding the resulting hash Base64UrlEncode(SHA256Hash(code_verifier).<br><br>The code verifier should be a high-entropy cryptographic random string with a minimum of 43 characters and a maximum of 128 characters.
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      authorizeCustomer<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            redirect_uri: string
            response_type: string
            client_id: string
            scope?: string
            state?: string
            usid?: string
            hint?: string
            channel_id?: string
            code_challenge: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : void>;
  
      /**
      * Get authorization code after authenticating a user against an IDP. This is the first step of the Authorization code grant flow, where a user is able to log in via federation to the IDP configured for the client, and gets an authorization code after successful login via a callback/redirect URI. Mandatory fields are the shopping app's clientId, redirectURI, responseType and authType. This API can be called from the front channel (from the browser).
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param redirect_uri - The URL to which the server redirects the browser after the user grants the authorization. The URI must be pre-registered.
      * @param response_type - Must be 'code'. 'code' indicates that the client wants an authorization code (authorization code grant flow).
      * @param client_id - The client ID obtained during application registration.
      * @param scope - (Not Supported)
      * @param state - Value to be sent by the client to determine the state between the authorization request and the server response.  Optional but strongly recommended.
      * @param usid - ID that uniquely identifies the shopper much like a UUID. This is an optional field, a new USID will be generated if this field is empty.
      * @param hint - IDP name that can be optionally added to redirect directly to skipping the IDP selection step.<br/><br/>To use a public client the hint should be set to <b>guest</b> and a public client id should be used to get an authorization code.
      * @param channel_id - The channel this request is for. For an ECOM request this is angalous to the site ID.
      * @param code_challenge - Created by the client calling the login endpoint.<br><br>The code_challenge is created by SHA256 hashing the code_verifier and base64 URL encoding the resulting hash Base64UrlEncode(SHA256Hash(code_verifier).<br><br>The code verifier should be a high-entropy cryptographic random string with a minimum of 43 characters and a maximum of 128 characters.
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      async authorizeCustomer(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            redirect_uri: string
            response_type: string
            client_id: string
            scope?: string
            state?: string
            usid?: string
            hint?: string
            channel_id?: string
            code_challenge: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | void> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperLoginPathParameters & Required<BaseUriParameters> = {
          shortCode: configParams.shortCode,
          version: configParams.version || "v1"
        };
        if (optionParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = optionParams["organizationId"];
        } else if (configParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = configParams["organizationId"];
        }
        else {
          throw new Error('Missing required path parameter: organizationId');
        }
  
        const queryParams: ShopperLoginQueryParameters = {};
        if (optionParams["redirect_uri"] !== undefined) {
          queryParams["redirect_uri"] = optionParams["redirect_uri"];
        } else if (configParams["redirect_uri"] !== undefined) {
          queryParams["redirect_uri"] = configParams["redirect_uri"];
        }
        else {
          throw new Error('Missing required query parameter: redirect_uri');
        }
        if (optionParams["response_type"] !== undefined) {
          queryParams["response_type"] = optionParams["response_type"];
        } else if (configParams["response_type"] !== undefined) {
          queryParams["response_type"] = configParams["response_type"];
        }
        else {
          throw new Error('Missing required query parameter: response_type');
        }
        if (optionParams["client_id"] !== undefined) {
          queryParams["client_id"] = optionParams["client_id"];
        } else if (configParams["client_id"] !== undefined) {
          queryParams["client_id"] = configParams["client_id"];
        }
        else {
          throw new Error('Missing required query parameter: client_id');
        }
        if (optionParams["scope"] !== undefined) {
          queryParams["scope"] = optionParams["scope"];
        } else if (configParams["scope"] !== undefined) {
          queryParams["scope"] = configParams["scope"];
        }
        if (optionParams["state"] !== undefined) {
          queryParams["state"] = optionParams["state"];
        } else if (configParams["state"] !== undefined) {
          queryParams["state"] = configParams["state"];
        }
        if (optionParams["usid"] !== undefined) {
          queryParams["usid"] = optionParams["usid"];
        } else if (configParams["usid"] !== undefined) {
          queryParams["usid"] = configParams["usid"];
        }
        if (optionParams["hint"] !== undefined) {
          queryParams["hint"] = optionParams["hint"];
        } else if (configParams["hint"] !== undefined) {
          queryParams["hint"] = configParams["hint"];
        }
        if (optionParams["channel_id"] !== undefined) {
          queryParams["channel_id"] = optionParams["channel_id"];
        } else if (configParams["channel_id"] !== undefined) {
          queryParams["channel_id"] = configParams["channel_id"];
        }
        if (optionParams["code_challenge"] !== undefined) {
          queryParams["code_challenge"] = optionParams["code_challenge"];
        } else if (configParams["code_challenge"] !== undefined) {
          queryParams["code_challenge"] = configParams["code_challenge"];
        }
        else {
          throw new Error('Missing required query parameter: code_challenge');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/oauth2/authorize",
          this.clientConfig.baseUri,
          {
            pathParams,
            queryParams,
            origin: this.clientConfig.proxy
          }
        );
  
        const headers: Record<string, string> = {
          ...this.clientConfig.headers,
          ...options?.headers
        };
  
        headers[USER_AGENT_HEADER] = [headers[USER_AGENT_HEADER], USER_AGENT_VALUE].join(" ");
  
        const req = new Request(
          url.toString(),
          {
            ...this.clientConfig.fetchOptions,
            
            headers,
            method: "GET"
          }
        );
        const response = await fetch(req);
        if (rawResponse) {
          return response;
        } else if (this.clientConfig.throwOnBadResponse && !response.ok && response.status !== 304) {
          throw new Error('Error ' + response.status + ': ' + response.statusText);
        }
      }
      /**
      * Get the shopper or guest JWT/access token, along with a refresh token. This is the second step of the OAuth2 Authorization code flow where a client app is able to get an access token for the shopper through the backchannel (a trusted server side) by passing in the client credentials and the authorization code retrieved from authorize endpoint. Mandatory fields when using the token endpoint to get the access token are clientId, clientSecret, authorizationCode, grantType of authorization_code. \<br/\>\<br/\> As a guest user get the shopper JWT / access token along with a refresh token. This is where a client app is able to get an access token for the guest user through the back-channel (a trusted server side) by passing in the client credentials. Mandatory fields when asking for the guest token endpoint to get the access token are clientId, clientSecret, grantType of client_credentials.\<br/\>\<br/\>When refreshing the access token with a private client id and secret the refresh token will NOT be re-generated, but when refreshing the access token with a public client id the refresh token will aways be re-generated (i.e, old refresh token is voided with every refresh call, so the refresh token on the client needs to be replaced to always store the new refresh token).\<br/\>\<br/\>Mandatory fields when using the token endpoint with a private client id to refresh an access token are grant_type, or refresh_token.\<br/\>\<br/\>Mandatory fields when using the token endpoint with a public client id to refresh an access token are grant_type and refresh_token with the client_id as a query parameter.\<br/\>\<br/\>Valid grant types for the token endpoint are REFRESH_TOKEN, CLIENT_CREDENTIALS, AUTHORIZATION_CODE_PKCE.
      *
      * If you would like to get a raw Response object use the other getAccessToken function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type TokenResponse.
      * 
      */
      getAccessToken(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: TokenRequest
        }>
      ): Promise<TokenResponse>;
  
      /**
      * Get the shopper or guest JWT/access token, along with a refresh token. This is the second step of the OAuth2 Authorization code flow where a client app is able to get an access token for the shopper through the backchannel (a trusted server side) by passing in the client credentials and the authorization code retrieved from authorize endpoint. Mandatory fields when using the token endpoint to get the access token are clientId, clientSecret, authorizationCode, grantType of authorization_code. \<br/\>\<br/\> As a guest user get the shopper JWT / access token along with a refresh token. This is where a client app is able to get an access token for the guest user through the back-channel (a trusted server side) by passing in the client credentials. Mandatory fields when asking for the guest token endpoint to get the access token are clientId, clientSecret, grantType of client_credentials.\<br/\>\<br/\>When refreshing the access token with a private client id and secret the refresh token will NOT be re-generated, but when refreshing the access token with a public client id the refresh token will aways be re-generated (i.e, old refresh token is voided with every refresh call, so the refresh token on the client needs to be replaced to always store the new refresh token).\<br/\>\<br/\>Mandatory fields when using the token endpoint with a private client id to refresh an access token are grant_type, or refresh_token.\<br/\>\<br/\>Mandatory fields when using the token endpoint with a public client id to refresh an access token are grant_type and refresh_token with the client_id as a query parameter.\<br/\>\<br/\>Valid grant types for the token endpoint are REFRESH_TOKEN, CLIENT_CREDENTIALS, AUTHORIZATION_CODE_PKCE.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type TokenResponse otherwise.
      * 
      */
      getAccessToken<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: TokenRequest
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : TokenResponse>;
  
      /**
      * Get the shopper or guest JWT/access token, along with a refresh token. This is the second step of the OAuth2 Authorization code flow where a client app is able to get an access token for the shopper through the backchannel (a trusted server side) by passing in the client credentials and the authorization code retrieved from authorize endpoint. Mandatory fields when using the token endpoint to get the access token are clientId, clientSecret, authorizationCode, grantType of authorization_code. \<br/\>\<br/\> As a guest user get the shopper JWT / access token along with a refresh token. This is where a client app is able to get an access token for the guest user through the back-channel (a trusted server side) by passing in the client credentials. Mandatory fields when asking for the guest token endpoint to get the access token are clientId, clientSecret, grantType of client_credentials.\<br/\>\<br/\>When refreshing the access token with a private client id and secret the refresh token will NOT be re-generated, but when refreshing the access token with a public client id the refresh token will aways be re-generated (i.e, old refresh token is voided with every refresh call, so the refresh token on the client needs to be replaced to always store the new refresh token).\<br/\>\<br/\>Mandatory fields when using the token endpoint with a private client id to refresh an access token are grant_type, or refresh_token.\<br/\>\<br/\>Mandatory fields when using the token endpoint with a public client id to refresh an access token are grant_type and refresh_token with the client_id as a query parameter.\<br/\>\<br/\>Valid grant types for the token endpoint are REFRESH_TOKEN, CLIENT_CREDENTIALS, AUTHORIZATION_CODE_PKCE.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type TokenResponse otherwise.
      * 
      */
      async getAccessToken(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: TokenRequest
        }>,
        rawResponse?: boolean
      ): Promise<Response | TokenResponse> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperLoginPathParameters & Required<BaseUriParameters> = {
          shortCode: configParams.shortCode,
          version: configParams.version || "v1"
        };
        if (optionParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = optionParams["organizationId"];
        } else if (configParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = configParams["organizationId"];
        }
        else {
          throw new Error('Missing required path parameter: organizationId');
        }
  
        const queryParams: ShopperLoginQueryParameters = {};
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/oauth2/token",
          this.clientConfig.baseUri,
          {
            pathParams,
            queryParams,
            origin: this.clientConfig.proxy
          }
        );
  
        const headers: Record<string, string> = {
          "Content-Type": "application/x-www-form-urlencoded",
          ...this.clientConfig.headers,
          ...options?.headers
        };
  
        headers[USER_AGENT_HEADER] = [headers[USER_AGENT_HEADER], USER_AGENT_VALUE].join(" ");
  
        const req = new Request(
          url.toString(),
          {
            ...this.clientConfig.fetchOptions,
            body: this.clientConfig.transformRequest(options.body, headers),
            headers,
            method: "POST"
          }
        );
        const response = await fetch(req);
        if (rawResponse) {
          return response;
        } else if (this.clientConfig.throwOnBadResponse && !response.ok && response.status !== 304) {
          throw new Error('Error ' + response.status + ': ' + response.statusText);
        }
          else {
            const text = await response.text();
            // It's ideal to get "{}" for an empty response body, but we won't throw if it's truly empty
            return text ? JSON.parse(text) : {};
          }
      }
      /**
      * Get a shopper JWT/access token for registered customers whose credentials are stored using a third party system.\</br\>\</br\>Mandatory fields for \<b\>Trusted On Behalf Of\</b\> to get an access token are grant_type, hint, login_id, login_origin, and channel_id.\</br\>\</br\>Valid grant type for \<b\>Trusted On Behalf Of\</b\> is \<i\>client_credentials.\</i\>\</br\>\</br\>For\<b\>Trusted System External On Behalf Of\</b\> a basic auth authorization header of SLAS client id and SLAS client secret should be used in place of the bearer Token.\</br\>\</br\>For \<b\>Trusted System Internal On Behalf Of \</b\>the authorization header bearer token should be a C2C JWT.\</br\>
      *
      * If you would like to get a raw Response object use the other getTrustedSystemAccessToken function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type TokenResponse.
      * 
      */
      getTrustedSystemAccessToken(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: TrustedSystemTokenRequest
        }>
      ): Promise<TokenResponse>;
  
      /**
      * Get a shopper JWT/access token for registered customers whose credentials are stored using a third party system.\</br\>\</br\>Mandatory fields for \<b\>Trusted On Behalf Of\</b\> to get an access token are grant_type, hint, login_id, login_origin, and channel_id.\</br\>\</br\>Valid grant type for \<b\>Trusted On Behalf Of\</b\> is \<i\>client_credentials.\</i\>\</br\>\</br\>For\<b\>Trusted System External On Behalf Of\</b\> a basic auth authorization header of SLAS client id and SLAS client secret should be used in place of the bearer Token.\</br\>\</br\>For \<b\>Trusted System Internal On Behalf Of \</b\>the authorization header bearer token should be a C2C JWT.\</br\>
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type TokenResponse otherwise.
      * 
      */
      getTrustedSystemAccessToken<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: TrustedSystemTokenRequest
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : TokenResponse>;
  
      /**
      * Get a shopper JWT/access token for registered customers whose credentials are stored using a third party system.\</br\>\</br\>Mandatory fields for \<b\>Trusted On Behalf Of\</b\> to get an access token are grant_type, hint, login_id, login_origin, and channel_id.\</br\>\</br\>Valid grant type for \<b\>Trusted On Behalf Of\</b\> is \<i\>client_credentials.\</i\>\</br\>\</br\>For\<b\>Trusted System External On Behalf Of\</b\> a basic auth authorization header of SLAS client id and SLAS client secret should be used in place of the bearer Token.\</br\>\</br\>For \<b\>Trusted System Internal On Behalf Of \</b\>the authorization header bearer token should be a C2C JWT.\</br\>
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type TokenResponse otherwise.
      * 
      */
      async getTrustedSystemAccessToken(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: TrustedSystemTokenRequest
        }>,
        rawResponse?: boolean
      ): Promise<Response | TokenResponse> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperLoginPathParameters & Required<BaseUriParameters> = {
          shortCode: configParams.shortCode,
          version: configParams.version || "v1"
        };
        if (optionParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = optionParams["organizationId"];
        } else if (configParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = configParams["organizationId"];
        }
        else {
          throw new Error('Missing required path parameter: organizationId');
        }
  
        const queryParams: ShopperLoginQueryParameters = {};
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/oauth2/trusted-system/token",
          this.clientConfig.baseUri,
          {
            pathParams,
            queryParams,
            origin: this.clientConfig.proxy
          }
        );
  
        const headers: Record<string, string> = {
          "Content-Type": "application/x-www-form-urlencoded",
          ...this.clientConfig.headers,
          ...options?.headers
        };
  
        headers[USER_AGENT_HEADER] = [headers[USER_AGENT_HEADER], USER_AGENT_VALUE].join(" ");
  
        const req = new Request(
          url.toString(),
          {
            ...this.clientConfig.fetchOptions,
            body: this.clientConfig.transformRequest(options.body, headers),
            headers,
            method: "POST"
          }
        );
        const response = await fetch(req);
        if (rawResponse) {
          return response;
        } else if (this.clientConfig.throwOnBadResponse && !response.ok && response.status !== 304) {
          throw new Error('Error ' + response.status + ': ' + response.statusText);
        }
          else {
            const text = await response.text();
            // It's ideal to get "{}" for an empty response body, but we won't throw if it's truly empty
            return text ? JSON.parse(text) : {};
          }
      }
      /**
      * Issue a shopper token (JWT).
      *
      * If you would like to get a raw Response object use the other getPasswordLessAccessToken function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type TokenResponse.
      * 
      */
      getPasswordLessAccessToken(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: PasswordLessTokenRequest
        }>
      ): Promise<TokenResponse>;
  
      /**
      * Issue a shopper token (JWT).
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type TokenResponse otherwise.
      * 
      */
      getPasswordLessAccessToken<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: PasswordLessTokenRequest
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : TokenResponse>;
  
      /**
      * Issue a shopper token (JWT).
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type TokenResponse otherwise.
      * 
      */
      async getPasswordLessAccessToken(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: PasswordLessTokenRequest
        }>,
        rawResponse?: boolean
      ): Promise<Response | TokenResponse> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperLoginPathParameters & Required<BaseUriParameters> = {
          shortCode: configParams.shortCode,
          version: configParams.version || "v1"
        };
        if (optionParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = optionParams["organizationId"];
        } else if (configParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = configParams["organizationId"];
        }
        else {
          throw new Error('Missing required path parameter: organizationId');
        }
  
        const queryParams: ShopperLoginQueryParameters = {};
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/oauth2/passwordless/token",
          this.clientConfig.baseUri,
          {
            pathParams,
            queryParams,
            origin: this.clientConfig.proxy
          }
        );
  
        const headers: Record<string, string> = {
          "Content-Type": "application/x-www-form-urlencoded",
          ...this.clientConfig.headers,
          ...options?.headers
        };
  
        headers[USER_AGENT_HEADER] = [headers[USER_AGENT_HEADER], USER_AGENT_VALUE].join(" ");
  
        const req = new Request(
          url.toString(),
          {
            ...this.clientConfig.fetchOptions,
            body: this.clientConfig.transformRequest(options.body, headers),
            headers,
            method: "POST"
          }
        );
        const response = await fetch(req);
        if (rawResponse) {
          return response;
        } else if (this.clientConfig.throwOnBadResponse && !response.ok && response.status !== 304) {
          throw new Error('Error ' + response.status + ': ' + response.statusText);
        }
          else {
            const text = await response.text();
            // It's ideal to get "{}" for an empty response body, but we won't throw if it's truly empty
            return text ? JSON.parse(text) : {};
          }
      }
      /**
      * Invalidate the refresh token. A basic auth header with base64 encoded clientId:secret is required in the Authorization header, and the refresh token to be revoked is required in the body.
      *
      * If you would like to get a raw Response object use the other revokeToken function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type TokenResponse.
      * 
      */
      revokeToken(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: TokenActionRequest
        }>
      ): Promise<TokenResponse>;
  
      /**
      * Invalidate the refresh token. A basic auth header with base64 encoded clientId:secret is required in the Authorization header, and the refresh token to be revoked is required in the body.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type TokenResponse otherwise.
      * 
      */
      revokeToken<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: TokenActionRequest
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : TokenResponse>;
  
      /**
      * Invalidate the refresh token. A basic auth header with base64 encoded clientId:secret is required in the Authorization header, and the refresh token to be revoked is required in the body.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type TokenResponse otherwise.
      * 
      */
      async revokeToken(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: TokenActionRequest
        }>,
        rawResponse?: boolean
      ): Promise<Response | TokenResponse> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperLoginPathParameters & Required<BaseUriParameters> = {
          shortCode: configParams.shortCode,
          version: configParams.version || "v1"
        };
        if (optionParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = optionParams["organizationId"];
        } else if (configParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = configParams["organizationId"];
        }
        else {
          throw new Error('Missing required path parameter: organizationId');
        }
  
        const queryParams: ShopperLoginQueryParameters = {};
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/oauth2/revoke",
          this.clientConfig.baseUri,
          {
            pathParams,
            queryParams,
            origin: this.clientConfig.proxy
          }
        );
  
        const headers: Record<string, string> = {
          "Content-Type": "application/x-www-form-urlencoded",
          ...this.clientConfig.headers,
          ...options?.headers
        };
  
        headers[USER_AGENT_HEADER] = [headers[USER_AGENT_HEADER], USER_AGENT_VALUE].join(" ");
  
        const req = new Request(
          url.toString(),
          {
            ...this.clientConfig.fetchOptions,
            body: this.clientConfig.transformRequest(options.body, headers),
            headers,
            method: "POST"
          }
        );
        const response = await fetch(req);
        if (rawResponse) {
          return response;
        } else if (this.clientConfig.throwOnBadResponse && !response.ok && response.status !== 304) {
          throw new Error('Error ' + response.status + ': ' + response.statusText);
        }
          else {
            const text = await response.text();
            // It's ideal to get "{}" for an empty response body, but we won't throw if it's truly empty
            return text ? JSON.parse(text) : {};
          }
      }
      /**
      * Returns the token properties. A basic auth header with base64 encoded clientId:secret is required in the Authorization header, as well as an access token or refresh token. Use token_type_hint to help identify the token.
      *
      * If you would like to get a raw Response object use the other introspectToken function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Object.
      * 
      */
      introspectToken(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: TokenActionRequest
        }>
      ): Promise<Object>;
  
      /**
      * Returns the token properties. A basic auth header with base64 encoded clientId:secret is required in the Authorization header, as well as an access token or refresh token. Use token_type_hint to help identify the token.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Object otherwise.
      * 
      */
      introspectToken<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: TokenActionRequest
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Object>;
  
      /**
      * Returns the token properties. A basic auth header with base64 encoded clientId:secret is required in the Authorization header, as well as an access token or refresh token. Use token_type_hint to help identify the token.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Object otherwise.
      * 
      */
      async introspectToken(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: TokenActionRequest
        }>,
        rawResponse?: boolean
      ): Promise<Response | Object> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperLoginPathParameters & Required<BaseUriParameters> = {
          shortCode: configParams.shortCode,
          version: configParams.version || "v1"
        };
        if (optionParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = optionParams["organizationId"];
        } else if (configParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = configParams["organizationId"];
        }
        else {
          throw new Error('Missing required path parameter: organizationId');
        }
  
        const queryParams: ShopperLoginQueryParameters = {};
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/oauth2/introspect",
          this.clientConfig.baseUri,
          {
            pathParams,
            queryParams,
            origin: this.clientConfig.proxy
          }
        );
  
        const headers: Record<string, string> = {
          "Content-Type": "application/x-www-form-urlencoded",
          ...this.clientConfig.headers,
          ...options?.headers
        };
  
        headers[USER_AGENT_HEADER] = [headers[USER_AGENT_HEADER], USER_AGENT_VALUE].join(" ");
  
        const req = new Request(
          url.toString(),
          {
            ...this.clientConfig.fetchOptions,
            body: this.clientConfig.transformRequest(options.body, headers),
            headers,
            method: "POST"
          }
        );
        const response = await fetch(req);
        if (rawResponse) {
          return response;
        } else if (this.clientConfig.throwOnBadResponse && !response.ok && response.status !== 304) {
          throw new Error('Error ' + response.status + ': ' + response.statusText);
        }
          else {
            const text = await response.text();
            // It's ideal to get "{}" for an empty response body, but we won't throw if it's truly empty
            return text ? JSON.parse(text) : {};
          }
      }
      /**
      * Returns a JSON document with claims about the currently authenticated end user.
      *
      * If you would like to get a raw Response object use the other getUserInfo function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param channel_id - Used when getting user information for a SFCC login. For an ECOM customer this is angalous to the site ID. This is a required parameter when getting user information for an ECOM customer.
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type Object.
      * 
      */
      getUserInfo(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            channel_id?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<Object>;
  
      /**
      * Returns a JSON document with claims about the currently authenticated end user.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param channel_id - Used when getting user information for a SFCC login. For an ECOM customer this is angalous to the site ID. This is a required parameter when getting user information for an ECOM customer.
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Object otherwise.
      * 
      */
      getUserInfo<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            channel_id?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Object>;
  
      /**
      * Returns a JSON document with claims about the currently authenticated end user.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param channel_id - Used when getting user information for a SFCC login. For an ECOM customer this is angalous to the site ID. This is a required parameter when getting user information for an ECOM customer.
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Object otherwise.
      * 
      */
      async getUserInfo(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            channel_id?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | Object> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperLoginPathParameters & Required<BaseUriParameters> = {
          shortCode: configParams.shortCode,
          version: configParams.version || "v1"
        };
        if (optionParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = optionParams["organizationId"];
        } else if (configParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = configParams["organizationId"];
        }
        else {
          throw new Error('Missing required path parameter: organizationId');
        }
  
        const queryParams: ShopperLoginQueryParameters = {};
        if (optionParams["channel_id"] !== undefined) {
          queryParams["channel_id"] = optionParams["channel_id"];
        } else if (configParams["channel_id"] !== undefined) {
          queryParams["channel_id"] = configParams["channel_id"];
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/oauth2/userinfo",
          this.clientConfig.baseUri,
          {
            pathParams,
            queryParams,
            origin: this.clientConfig.proxy
          }
        );
  
        const headers: Record<string, string> = {
          ...this.clientConfig.headers,
          ...options?.headers
        };
  
        headers[USER_AGENT_HEADER] = [headers[USER_AGENT_HEADER], USER_AGENT_VALUE].join(" ");
  
        const req = new Request(
          url.toString(),
          {
            ...this.clientConfig.fetchOptions,
            
            headers,
            method: "GET"
          }
        );
        const response = await fetch(req);
        if (rawResponse) {
          return response;
        } else if (this.clientConfig.throwOnBadResponse && !response.ok && response.status !== 304) {
          throw new Error('Error ' + response.status + ': ' + response.statusText);
        }
          else {
            const text = await response.text();
            // It's ideal to get "{}" for an empty response body, but we won't throw if it's truly empty
            return text ? JSON.parse(text) : {};
          }
      }
      /**
      * Returns a JSON listing of the OpenID/OAuth endpoints, supported scopes and claims, public keys used to sign the tokens, and other details.
      *
      * If you would like to get a raw Response object use the other getWellknownOpenidConfiguration function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type Object.
      * 
      */
      getWellknownOpenidConfiguration(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<Object>;
  
      /**
      * Returns a JSON listing of the OpenID/OAuth endpoints, supported scopes and claims, public keys used to sign the tokens, and other details.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Object otherwise.
      * 
      */
      getWellknownOpenidConfiguration<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Object>;
  
      /**
      * Returns a JSON listing of the OpenID/OAuth endpoints, supported scopes and claims, public keys used to sign the tokens, and other details.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Object otherwise.
      * 
      */
      async getWellknownOpenidConfiguration(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | Object> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperLoginPathParameters & Required<BaseUriParameters> = {
          shortCode: configParams.shortCode,
          version: configParams.version || "v1"
        };
        if (optionParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = optionParams["organizationId"];
        } else if (configParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = configParams["organizationId"];
        }
        else {
          throw new Error('Missing required path parameter: organizationId');
        }
  
        const queryParams: ShopperLoginQueryParameters = {};
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/oauth2/.well-known/openid-configuration",
          this.clientConfig.baseUri,
          {
            pathParams,
            queryParams,
            origin: this.clientConfig.proxy
          }
        );
  
        const headers: Record<string, string> = {
          ...this.clientConfig.headers,
          ...options?.headers
        };
  
        headers[USER_AGENT_HEADER] = [headers[USER_AGENT_HEADER], USER_AGENT_VALUE].join(" ");
  
        const req = new Request(
          url.toString(),
          {
            ...this.clientConfig.fetchOptions,
            
            headers,
            method: "GET"
          }
        );
        const response = await fetch(req);
        if (rawResponse) {
          return response;
        } else if (this.clientConfig.throwOnBadResponse && !response.ok && response.status !== 304) {
          throw new Error('Error ' + response.status + ': ' + response.statusText);
        }
          else {
            const text = await response.text();
            // It's ideal to get "{}" for an empty response body, but we won't throw if it's truly empty
            return text ? JSON.parse(text) : {};
          }
      }
      /**
      * Returns a JWKS containing public keys that enable clients to validate the Shopper JSON Web Token (JWT) issued by SLAS.
      *
      * If you would like to get a raw Response object use the other getJwksUri function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type Object.
      * 
      */
      getJwksUri(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<Object>;
  
      /**
      * Returns a JWKS containing public keys that enable clients to validate the Shopper JSON Web Token (JWT) issued by SLAS.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Object otherwise.
      * 
      */
      getJwksUri<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Object>;
  
      /**
      * Returns a JWKS containing public keys that enable clients to validate the Shopper JSON Web Token (JWT) issued by SLAS.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Object otherwise.
      * 
      */
      async getJwksUri(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | Object> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperLoginPathParameters & Required<BaseUriParameters> = {
          shortCode: configParams.shortCode,
          version: configParams.version || "v1"
        };
        if (optionParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = optionParams["organizationId"];
        } else if (configParams["organizationId"] !== undefined) {
          pathParams["organizationId"] = configParams["organizationId"];
        }
        else {
          throw new Error('Missing required path parameter: organizationId');
        }
  
        const queryParams: ShopperLoginQueryParameters = {};
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/oauth2/jwks",
          this.clientConfig.baseUri,
          {
            pathParams,
            queryParams,
            origin: this.clientConfig.proxy
          }
        );
  
        const headers: Record<string, string> = {
          ...this.clientConfig.headers,
          ...options?.headers
        };
  
        headers[USER_AGENT_HEADER] = [headers[USER_AGENT_HEADER], USER_AGENT_VALUE].join(" ");
  
        const req = new Request(
          url.toString(),
          {
            ...this.clientConfig.fetchOptions,
            
            headers,
            method: "GET"
          }
        );
        const response = await fetch(req);
        if (rawResponse) {
          return response;
        } else if (this.clientConfig.throwOnBadResponse && !response.ok && response.status !== 304) {
          throw new Error('Error ' + response.status + ': ' + response.statusText);
        }
          else {
            const text = await response.text();
            // It's ideal to get "{}" for an empty response body, but we won't throw if it's truly empty
            return text ? JSON.parse(text) : {};
          }
      }

}
