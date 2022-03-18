import { fetch, Request }  from "cross-fetch";

import ClientConfig, { ClientConfigInit } from "./clientConfig";
import type {
  BaseUriParameters,
  CompositeParameters,
  RequireParametersUnlessAllAreOptional
} from "./helpers";
import TemplateURL from "./templateUrl";
import { USER_AGENT_HEADER, USER_AGENT_VALUE } from "./version";

export type Promotion = {
  calloutMsg?: string;
  currency?: string;
  details?: string;
  endDate?: any;
  id: string;
  image?: string;
  name?: string;
  startDate?: any;
} & { [key: string]: any }

  export type PromotionResult = {
  count: number;
  data: Array<Promotion>;
  total: number;
} & { [key: string]: any }

  export type Error = {
  type: string;
  title?: string;
  detail?: string;
  instance?: string;
} & { [key: string]: any }

  type PromotionNotFound = { [key: string]: any }
type badrequest = { [key: string]: any }
export type ErrorResponse = {
  type: string;
  title?: string;
  detail?: string;
  instance?: string;
} & { [key: string]: any }

  export type ChangeControlled = {
  creationDate?: any;
  modificationDate?: any;
  createdBy?: string;
  lastModifiedBy?: string;
} & { [key: string]: any }

  type DateRangeFilter = { [key: string]: any }
type EtagResponse = { [key: string]: any }
type IntegerRangeFilter = { [key: string]: any }
type RateLimited3 = { [key: string]: any }
type SyncCreated = { [key: string]: any }
type DateConditionalRequest = { [key: string]: any }
type RateLimited5 = { [key: string]: any }
type EtagConditionalRequest = { [key: string]: any }
type AsyncCreated = { [key: string]: any }
type RateLimited = { [key: string]: any }
type RateLimited2 = { [key: string]: any }
type OffsetPaginated = { [key: string]: any }
type RangeFilter = { [key: string]: any }
type RateLimited4 = { [key: string]: any }
type NumericRangeFilter = { [key: string]: any }
type DatetimeRangeFilter = { [key: string]: any }
export type ChangeControlledDataType = {
  creationDate?: any;
  modificationDate?: any;
  createdBy?: string;
  lastModifiedBy?: string;
} & { [key: string]: any }

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

  
/**
 * All path parameters that are used by at least one ShopperPromotions method.
 */
export type ShopperPromotionsPathParameters = {
  organizationId?: string;
  campaignId?: string;
}
/**
 * All query parameters that are used by at least one ShopperPromotions method.
 */
export type ShopperPromotionsQueryParameters = {
  siteId?: string;
  ids?: string;
  locale?: string;
  startDate?: string;
  endDate?: string;
  currency?: string;
}

/**
 * All parameters that are used by ShopperPromotions.
 */
export type ShopperPromotionsParameters = ShopperPromotionsPathParameters & BaseUriParameters & ShopperPromotionsQueryParameters;

/**
* [Shopper Promotions](https://developer.salesforce.com/docs/commerce/commerce-api/references?meta=shopper-promotions:Summary)
* ==================================
*
* *View details for active promotions.*<br />
*
* Simple example:
*
* ```typescript
*   import { ShopperPromotions } from "commerce-sdk-isomorphic";
*
*   const clientConfig = {
*     parameters: {
*       clientId: "XXXXXX",
*       organizationId: "XXXX",
*       shortCode: "XXX",
*       siteId: "XX"
*     }
*   };
*   const shopperPromotionsClient = new ShopperPromotions(clientConfig);
* ```
*
* <span style="font-size:.7em; display:block; text-align: right">
* API Version: 1.0.20<br />
* Last Updated: <br />  
* </span>

* 

*/
export class ShopperPromotions<ConfigParameters extends ShopperPromotionsParameters & Record<string, unknown>> {
  // baseUri is not required on ClientConfig, but we know that we provide one in the class constructor
  public clientConfig: ClientConfig<ConfigParameters> & { baseUri: string };

  static readonly defaultBaseUri = "https://{shortCode}.api.commercecloud.salesforce.com/pricing/shopper-promotions/{version}";

  constructor(config: ClientConfigInit<ConfigParameters>) {
    const cfg = {...config}
    if (!cfg.baseUri) cfg.baseUri = new.target.defaultBaseUri;
    // Type assertion is safe because ^^^
    this.clientConfig = new ClientConfig(cfg) as ClientConfig<ConfigParameters> & { baseUri: string };
  }

      /**
      * Returns an array of enabled promotions for a list of specified IDs. In the request URL, you can specify up to 50 IDs. If you specify an ID that contains either parentheses or the separator characters, you must URL encode these characters. Each request returns only enabled promotions as the server does not consider promotion qualifiers or schedules.
      *
      * If you would like to get a raw Response object use the other getPromotions function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param siteId - 
      * @param ids - 
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type PromotionResult.
      * 
      */
      getPromotions(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
            ids: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<PromotionResult>;
  
      /**
      * Returns an array of enabled promotions for a list of specified IDs. In the request URL, you can specify up to 50 IDs. If you specify an ID that contains either parentheses or the separator characters, you must URL encode these characters. Each request returns only enabled promotions as the server does not consider promotion qualifiers or schedules.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param siteId - 
      * @param ids - 
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type PromotionResult otherwise.
      * 
      */
      getPromotions<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
            ids: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : PromotionResult>;
  
      /**
      * Returns an array of enabled promotions for a list of specified IDs. In the request URL, you can specify up to 50 IDs. If you specify an ID that contains either parentheses or the separator characters, you must URL encode these characters. Each request returns only enabled promotions as the server does not consider promotion qualifiers or schedules.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param siteId - 
      * @param ids - 
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type PromotionResult otherwise.
      * 
      */
      async getPromotions(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
            ids: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | PromotionResult> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperPromotionsPathParameters & Required<BaseUriParameters> = {
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
  
        const queryParams: ShopperPromotionsQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
        if (optionParams["ids"] !== undefined) {
          queryParams["ids"] = optionParams["ids"];
        } else if (configParams["ids"] !== undefined) {
          queryParams["ids"] = configParams["ids"];
        }
        else {
          throw new Error('Missing required query parameter: ids');
        }
        if (optionParams["locale"] !== undefined) {
          queryParams["locale"] = optionParams["locale"];
        } else if (configParams["locale"] !== undefined) {
          queryParams["locale"] = configParams["locale"];
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/promotions",
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
      * Handles get promotion by filter criteria. Returns an array of enabled promotions matching the specified filter
  criteria. In the request URL, you must provide a campaign_id parameter, and you can optionally specify a date
  range by providing start_date and end_date parameters. Both parameters are required to specify a date range, as 
  omitting one causes the server to return a MissingParameterException fault. Each request returns only enabled
  promotions, since the server does not consider promotion qualifiers or schedules.
      *
      * If you would like to get a raw Response object use the other getPromotionsForCampaign function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param campaignId - Find the promotions assigned to this campaign (mandatory).
      * @param siteId - 
      * @param startDate - The start date of the promotion in ISO8601 date time format: yyyy-MM-dd'T'HH:mmZ
      * @param endDate - The end date of the promotion in ISO8601 date time format: yyyy-MM-dd'T'HH:mmZ
      * @param currency - The currency mnemonic specified for price. This parameter is effective only for product suggestions.
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type PromotionResult.
      * 
      */
      getPromotionsForCampaign(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            campaignId: string
            siteId: string
            startDate?: string
            endDate?: string
            currency?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<PromotionResult>;
  
      /**
      * Handles get promotion by filter criteria. Returns an array of enabled promotions matching the specified filter
  criteria. In the request URL, you must provide a campaign_id parameter, and you can optionally specify a date
  range by providing start_date and end_date parameters. Both parameters are required to specify a date range, as 
  omitting one causes the server to return a MissingParameterException fault. Each request returns only enabled
  promotions, since the server does not consider promotion qualifiers or schedules.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param campaignId - Find the promotions assigned to this campaign (mandatory).
      * @param siteId - 
      * @param startDate - The start date of the promotion in ISO8601 date time format: yyyy-MM-dd'T'HH:mmZ
      * @param endDate - The end date of the promotion in ISO8601 date time format: yyyy-MM-dd'T'HH:mmZ
      * @param currency - The currency mnemonic specified for price. This parameter is effective only for product suggestions.
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type PromotionResult otherwise.
      * 
      */
      getPromotionsForCampaign<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            campaignId: string
            siteId: string
            startDate?: string
            endDate?: string
            currency?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : PromotionResult>;
  
      /**
      * Handles get promotion by filter criteria. Returns an array of enabled promotions matching the specified filter
  criteria. In the request URL, you must provide a campaign_id parameter, and you can optionally specify a date
  range by providing start_date and end_date parameters. Both parameters are required to specify a date range, as 
  omitting one causes the server to return a MissingParameterException fault. Each request returns only enabled
  promotions, since the server does not consider promotion qualifiers or schedules.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param campaignId - Find the promotions assigned to this campaign (mandatory).
      * @param siteId - 
      * @param startDate - The start date of the promotion in ISO8601 date time format: yyyy-MM-dd'T'HH:mmZ
      * @param endDate - The end date of the promotion in ISO8601 date time format: yyyy-MM-dd'T'HH:mmZ
      * @param currency - The currency mnemonic specified for price. This parameter is effective only for product suggestions.
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type PromotionResult otherwise.
      * 
      */
      async getPromotionsForCampaign(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            campaignId: string
            siteId: string
            startDate?: string
            endDate?: string
            currency?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | PromotionResult> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperPromotionsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["campaignId"] !== undefined) {
          pathParams["campaignId"] = optionParams["campaignId"];
        } else if (configParams["campaignId"] !== undefined) {
          pathParams["campaignId"] = configParams["campaignId"];
        }
        else {
          throw new Error('Missing required path parameter: campaignId');
        }
  
        const queryParams: ShopperPromotionsQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
        if (optionParams["startDate"] !== undefined) {
          queryParams["startDate"] = optionParams["startDate"];
        } else if (configParams["startDate"] !== undefined) {
          queryParams["startDate"] = configParams["startDate"];
        }
        if (optionParams["endDate"] !== undefined) {
          queryParams["endDate"] = optionParams["endDate"];
        } else if (configParams["endDate"] !== undefined) {
          queryParams["endDate"] = configParams["endDate"];
        }
        if (optionParams["currency"] !== undefined) {
          queryParams["currency"] = optionParams["currency"];
        } else if (configParams["currency"] !== undefined) {
          queryParams["currency"] = configParams["currency"];
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/promotions/campaigns/{campaignId}",
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
