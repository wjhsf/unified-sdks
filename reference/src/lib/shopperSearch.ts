import { fetch, Request }  from "cross-fetch";

import ClientConfig, { ClientConfigInit } from "./clientConfig";
import type {
  BaseUriParameters,
  CompositeParameters,
  RequireParametersUnlessAllAreOptional
} from "./helpers";
import TemplateURL from "./templateUrl";
import { USER_AGENT_HEADER, USER_AGENT_VALUE } from "./version";

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
type RateLimited4 = { [key: string]: any }
type NumericRangeFilter = { [key: string]: any }
type DatetimeRangeFilter = { [key: string]: any }
export type ChangeControlledDataType = {
  creationDate?: any;
  modificationDate?: any;
  createdBy?: string;
  lastModifiedBy?: string;
} & { [key: string]: any }

  export type Error = {
  type: string;
  title?: string;
  detail?: string;
  instance?: string;
} & { [key: string]: any }

  export type ProductRef = {
  id: string;
} & { [key: string]: any }

  export type SuggestedTerms = {
  originalTerm: string;
  terms?: Array<SuggestedTerm>;
} & { [key: string]: any }

  export type CategorySuggestions = {
  categories?: Array<SuggestedCategory>;
  suggestedPhrases?: Array<SuggestedPhrase>;
  suggestedTerms: Array<SuggestedTerms>;
} & { [key: string]: any }

  export type SuggestedProduct = {
  currency: string;
  image?: Image;
  price: number;
  productId: string;
  productName: string;
} & { [key: string]: any }

  export type SuggestedPhrase = {
  exactMatch: boolean;
  phrase: string;
} & { [key: string]: any }

  export type VariationAttribute = {
  id: string;
  name?: string;
  values?: Array<VariationAttributeValue>;
} & { [key: string]: any }

  export type ProductSuggestions = {
  products?: Array<SuggestedProduct>;
  suggestedPhrases?: Array<SuggestedPhrase>;
  suggestedTerms: Array<SuggestedTerms>;
} & { [key: string]: any }

  export type SuggestedCategory = {
  id: string;
  name: string;
  parentCategoryName: string;
} & { [key: string]: any }

  export type ProductType = {
  bundle?: boolean;
  item?: boolean;
  master?: boolean;
  option?: boolean;
  set?: boolean;
  variant?: boolean;
  variationGroup?: boolean;
} & { [key: string]: any }

  export type BrandSuggestions = {
} & { [key: string]: any }

  export type ProductSearchRefinementValue = {
  description?: string;
  hitCount: number;
  label: string;
  presentationId?: string;
  value: string;
  values?: Array<ProductSearchRefinementValue>;
} & { [key: string]: any }

  export type ProductSearchSortingOption = {
  id: string;
  label: string;
} & { [key: string]: any }

  export type SuggestedTerm = {
  completed: boolean;
  corrected: boolean;
  exactMatch: boolean;
  value: string;
} & { [key: string]: any }

  export type ProductSearchRefinement = {
  attributeId: string;
  label?: string;
  values?: Array<ProductSearchRefinementValue>;
} & { [key: string]: any }

  export type CustomSuggestions = {
  customSuggestion?: string;
  suggestedPhrases?: Array<SuggestedPhrase>;
  suggestedTerms: Array<SuggestedTerms>;
} & { [key: string]: any }

  export type ProductSearchHit = {
  currency?: string;
  hitType?: string;
  image?: Image;
  orderable?: boolean;
  price?: number;
  priceMax?: number;
  prices?: {
} & { [key: string]: any }
;
  productId: string;
  productName?: string;
  productType?: ProductType;
  representedProduct?: ProductRef;
  representedProducts?: Array<ProductRef>;
  variationAttributes?: Array<VariationAttribute>;
} & { [key: string]: any }

  export type ProductSearchResult = {
  limit: number;
  hits: Array<ProductSearchHit>;
  query: string;
  refinements: Array<ProductSearchRefinement>;
  searchPhraseSuggestions: Suggestion;
  selectedRefinements?: {
} & { [key: string]: any }
;
  selectedSortingOption?: string;
  sortingOptions: Array<ProductSearchSortingOption>;
  offset: number;
  total: number;
} & { [key: string]: any }

  export type Image = {
  alt?: string;
  disBaseLink?: string;
  link: string;
  title?: string;
} & { [key: string]: any }

  export type VariationAttributeValue = {
  description?: string;
  image?: Image;
  imageSwatch?: Image;
  name?: string;
  orderable?: boolean;
  value: string;
} & { [key: string]: any }

  export type Suggestion = {
  suggestedPhrases?: Array<SuggestedPhrase>;
  suggestedTerms: Array<SuggestedTerms>;
} & { [key: string]: any }

  export type SuggestionResult = {
  brandSuggestions?: BrandSuggestions;
  categorySuggestions?: CategorySuggestions;
  productSuggestions?: ProductSuggestions;
  customSuggestion?: CustomSuggestions;
  searchPhrase: string;
} & { [key: string]: any }

  type Unauthorized = { [key: string]: any }

/**
 * All path parameters that are used by at least one ShopperSearch method.
 */
export type ShopperSearchPathParameters = {
  organizationId?: string;
}
/**
 * All query parameters that are used by at least one ShopperSearch method.
 */
export type ShopperSearchQueryParameters = {
  siteId?: string;
  q?: string;
  refine?: Array<string>;
  sort?: string;
  currency?: string;
  locale?: string;
  offset?: any;
  limit?: number;
}

/**
 * All parameters that are used by ShopperSearch.
 */
export type ShopperSearchParameters = ShopperSearchPathParameters & BaseUriParameters & ShopperSearchQueryParameters;

/**
* [Shopper Search](https://developer.salesforce.com/docs/commerce/commerce-api/references?meta=shopper-search:Summary)
* ==================================
*
* *product search and helpful search suggestions.*<br />
*
* Simple example:
*
* ```typescript
*   import { ShopperSearch } from "commerce-sdk-isomorphic";
*
*   const clientConfig = {
*     parameters: {
*       clientId: "XXXXXX",
*       organizationId: "XXXX",
*       shortCode: "XXX",
*       siteId: "XX"
*     }
*   };
*   const shopperSearchClient = new ShopperSearch(clientConfig);
* ```
*
* <span style="font-size:.7em; display:block; text-align: right">
* API Version: 1.0.24<br />
* Last Updated: <br />  
* </span>

* 

*/
export class ShopperSearch<ConfigParameters extends ShopperSearchParameters & Record<string, unknown>> {
  // baseUri is not required on ClientConfig, but we know that we provide one in the class constructor
  public clientConfig: ClientConfig<ConfigParameters> & { baseUri: string };

  static readonly defaultBaseUri = "https://{shortCode}.api.commercecloud.salesforce.com/search/shopper-search/{version}/";

  constructor(config: ClientConfigInit<ConfigParameters>) {
    const cfg = {...config}
    if (!cfg.baseUri) cfg.baseUri = new.target.defaultBaseUri;
    // Type assertion is safe because ^^^
    this.clientConfig = new ClientConfig(cfg) as ClientConfig<ConfigParameters> & { baseUri: string };
  }

      /**
      * Provides keyword and refinement search functionality for products. Only returns the product ID, link, and name in
  the product search hit. The search result contains only products that are online and assigned to site catalog.
      *
      * If you would like to get a raw Response object use the other productSearch function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param siteId - 
      * @param q - The query phrase to search for. For example to search for a product "shirt", type q=shirt.
      * @param refine - Parameter that represents a refinement attribute or values pair. Refinement attribute ID and
              values are separated by '='. Multiple values are supported by a subset of refinement attributes and
              can be provided by separating them using a pipe (URL
              encoded = "|") i.e. refine=c_refinementColor=red|green|blue. Value ranges can be specified like this: refine=price=(100..500) . Multiple refine parameters can be provided by using the refine as the key i.e refine=price=(0..10)&refine=c_refinementColor=green. The refinements can be a collection of custom defined attributes IDs and the system defined attributes IDs but the search can only accept a total of 9 refinements at a time.
              The following system refinement attribute ids are supported:
                
              cgid: Allows refinement per single category ID. Multiple category ids are not supported.
              price: Allows refinement per single price range. Multiple price ranges are not supported.
              pmid: Allows refinement per promotion ID.
              htypes: Allow refinement by including only the provided hit types. Accepted types are 'product', 'master', 'set', 'bundle', 'slicing_group' (deprecated), 'variation_group'.
              orderable_only: Unavailable products are excluded from the search results if true is set. Multiple refinement values are not supported.                               
      * @param sort - The ID of the sorting option to sort the search hits.
      * @param currency - The currency mnemonic specified for price. This parameter is effective only if the returned results contain prices.
      * @param locale - 
      * @param offset - 
      * @param limit - Maximum records to retrieve per request, not to exceed 200. Defaults to 25.
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type ProductSearchResult.
      * 
      */
      productSearch(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
            q?: string
            refine?: Array<string>
            sort?: string
            currency?: string
            locale?: string
            offset?: any
            limit?: number
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<ProductSearchResult>;
  
      /**
      * Provides keyword and refinement search functionality for products. Only returns the product ID, link, and name in
  the product search hit. The search result contains only products that are online and assigned to site catalog.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param siteId - 
      * @param q - The query phrase to search for. For example to search for a product "shirt", type q=shirt.
      * @param refine - Parameter that represents a refinement attribute or values pair. Refinement attribute ID and
              values are separated by '='. Multiple values are supported by a subset of refinement attributes and
              can be provided by separating them using a pipe (URL
              encoded = "|") i.e. refine=c_refinementColor=red|green|blue. Value ranges can be specified like this: refine=price=(100..500) . Multiple refine parameters can be provided by using the refine as the key i.e refine=price=(0..10)&refine=c_refinementColor=green. The refinements can be a collection of custom defined attributes IDs and the system defined attributes IDs but the search can only accept a total of 9 refinements at a time.
              The following system refinement attribute ids are supported:
                
              cgid: Allows refinement per single category ID. Multiple category ids are not supported.
              price: Allows refinement per single price range. Multiple price ranges are not supported.
              pmid: Allows refinement per promotion ID.
              htypes: Allow refinement by including only the provided hit types. Accepted types are 'product', 'master', 'set', 'bundle', 'slicing_group' (deprecated), 'variation_group'.
              orderable_only: Unavailable products are excluded from the search results if true is set. Multiple refinement values are not supported.                               
      * @param sort - The ID of the sorting option to sort the search hits.
      * @param currency - The currency mnemonic specified for price. This parameter is effective only if the returned results contain prices.
      * @param locale - 
      * @param offset - 
      * @param limit - Maximum records to retrieve per request, not to exceed 200. Defaults to 25.
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type ProductSearchResult otherwise.
      * 
      */
      productSearch<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
            q?: string
            refine?: Array<string>
            sort?: string
            currency?: string
            locale?: string
            offset?: any
            limit?: number
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : ProductSearchResult>;
  
      /**
      * Provides keyword and refinement search functionality for products. Only returns the product ID, link, and name in
  the product search hit. The search result contains only products that are online and assigned to site catalog.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param siteId - 
      * @param q - The query phrase to search for. For example to search for a product "shirt", type q=shirt.
      * @param refine - Parameter that represents a refinement attribute or values pair. Refinement attribute ID and
              values are separated by '='. Multiple values are supported by a subset of refinement attributes and
              can be provided by separating them using a pipe (URL
              encoded = "|") i.e. refine=c_refinementColor=red|green|blue. Value ranges can be specified like this: refine=price=(100..500) . Multiple refine parameters can be provided by using the refine as the key i.e refine=price=(0..10)&refine=c_refinementColor=green. The refinements can be a collection of custom defined attributes IDs and the system defined attributes IDs but the search can only accept a total of 9 refinements at a time.
              The following system refinement attribute ids are supported:
                
              cgid: Allows refinement per single category ID. Multiple category ids are not supported.
              price: Allows refinement per single price range. Multiple price ranges are not supported.
              pmid: Allows refinement per promotion ID.
              htypes: Allow refinement by including only the provided hit types. Accepted types are 'product', 'master', 'set', 'bundle', 'slicing_group' (deprecated), 'variation_group'.
              orderable_only: Unavailable products are excluded from the search results if true is set. Multiple refinement values are not supported.                               
      * @param sort - The ID of the sorting option to sort the search hits.
      * @param currency - The currency mnemonic specified for price. This parameter is effective only if the returned results contain prices.
      * @param locale - 
      * @param offset - 
      * @param limit - Maximum records to retrieve per request, not to exceed 200. Defaults to 25.
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type ProductSearchResult otherwise.
      * 
      */
      async productSearch(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
            q?: string
            refine?: Array<string>
            sort?: string
            currency?: string
            locale?: string
            offset?: any
            limit?: number
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | ProductSearchResult> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperSearchPathParameters & Required<BaseUriParameters> = {
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
  
        const queryParams: ShopperSearchQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
        if (optionParams["q"] !== undefined) {
          queryParams["q"] = optionParams["q"];
        } else if (configParams["q"] !== undefined) {
          queryParams["q"] = configParams["q"];
        }
        if (optionParams["refine"] !== undefined) {
          queryParams["refine"] = optionParams["refine"];
        } else if (configParams["refine"] !== undefined) {
          queryParams["refine"] = configParams["refine"];
        }
        if (optionParams["sort"] !== undefined) {
          queryParams["sort"] = optionParams["sort"];
        } else if (configParams["sort"] !== undefined) {
          queryParams["sort"] = configParams["sort"];
        }
        if (optionParams["currency"] !== undefined) {
          queryParams["currency"] = optionParams["currency"];
        } else if (configParams["currency"] !== undefined) {
          queryParams["currency"] = configParams["currency"];
        }
        if (optionParams["locale"] !== undefined) {
          queryParams["locale"] = optionParams["locale"];
        } else if (configParams["locale"] !== undefined) {
          queryParams["locale"] = configParams["locale"];
        }
        if (optionParams["offset"] !== undefined) {
          queryParams["offset"] = optionParams["offset"];
        } else if (configParams["offset"] !== undefined) {
          queryParams["offset"] = configParams["offset"];
        }
        if (optionParams["limit"] !== undefined) {
          queryParams["limit"] = optionParams["limit"];
        } else if (configParams["limit"] !== undefined) {
          queryParams["limit"] = configParams["limit"];
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/product-search",
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
      * Provides keyword search functionality for products, categories, and brands suggestions. Returns suggested products, suggested categories, and suggested brands for the given search phrase.
      *
      * If you would like to get a raw Response object use the other getSearchSuggestions function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param siteId - 
      * @param q - The search phrase (q) for which suggestions are evaluated. Search suggestions are determined when the search phrase input is at least three (default) characters long. The value is configurable in the Business Manager.
      * @param limit - The maximum number of suggestions made per request. If no value is defined, by default five suggestions per suggestion type are evaluated. This affects all types of suggestions (category, product, brand, and custom suggestions).
      * @param currency - The currency code specified for price. This parameter is effective only for product suggestions.
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type SuggestionResult.
      * 
      */
      getSearchSuggestions(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
            q: string
            limit?: number
            currency?: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<SuggestionResult>;
  
      /**
      * Provides keyword search functionality for products, categories, and brands suggestions. Returns suggested products, suggested categories, and suggested brands for the given search phrase.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param siteId - 
      * @param q - The search phrase (q) for which suggestions are evaluated. Search suggestions are determined when the search phrase input is at least three (default) characters long. The value is configurable in the Business Manager.
      * @param limit - The maximum number of suggestions made per request. If no value is defined, by default five suggestions per suggestion type are evaluated. This affects all types of suggestions (category, product, brand, and custom suggestions).
      * @param currency - The currency code specified for price. This parameter is effective only for product suggestions.
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type SuggestionResult otherwise.
      * 
      */
      getSearchSuggestions<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
            q: string
            limit?: number
            currency?: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : SuggestionResult>;
  
      /**
      * Provides keyword search functionality for products, categories, and brands suggestions. Returns suggested products, suggested categories, and suggested brands for the given search phrase.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param siteId - 
      * @param q - The search phrase (q) for which suggestions are evaluated. Search suggestions are determined when the search phrase input is at least three (default) characters long. The value is configurable in the Business Manager.
      * @param limit - The maximum number of suggestions made per request. If no value is defined, by default five suggestions per suggestion type are evaluated. This affects all types of suggestions (category, product, brand, and custom suggestions).
      * @param currency - The currency code specified for price. This parameter is effective only for product suggestions.
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type SuggestionResult otherwise.
      * 
      */
      async getSearchSuggestions(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
            q: string
            limit?: number
            currency?: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | SuggestionResult> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperSearchPathParameters & Required<BaseUriParameters> = {
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
  
        const queryParams: ShopperSearchQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
        if (optionParams["q"] !== undefined) {
          queryParams["q"] = optionParams["q"];
        } else if (configParams["q"] !== undefined) {
          queryParams["q"] = configParams["q"];
        }
        else {
          throw new Error('Missing required query parameter: q');
        }
        if (optionParams["limit"] !== undefined) {
          queryParams["limit"] = optionParams["limit"];
        } else if (configParams["limit"] !== undefined) {
          queryParams["limit"] = configParams["limit"];
        }
        if (optionParams["currency"] !== undefined) {
          queryParams["currency"] = optionParams["currency"];
        } else if (configParams["currency"] !== undefined) {
          queryParams["currency"] = configParams["currency"];
        }
        if (optionParams["locale"] !== undefined) {
          queryParams["locale"] = optionParams["locale"];
        } else if (configParams["locale"] !== undefined) {
          queryParams["locale"] = configParams["locale"];
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/search-suggestions",
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
