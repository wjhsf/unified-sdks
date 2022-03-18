import { fetch, Request }  from "cross-fetch";

import ClientConfig, { ClientConfigInit } from "./clientConfig";
import type {
  BaseUriParameters,
  CompositeParameters,
  RequireParametersUnlessAllAreOptional
} from "./helpers";
import TemplateURL from "./templateUrl";
import { USER_AGENT_HEADER, USER_AGENT_VALUE } from "./version";

export type ErrorResponse = {
  type: string;
  title?: string;
  detail?: string;
  instance?: string;
} & { [key: string]: any }

  type LocaleSpecific = { [key: string]: any }
export type Money = {
  currencyMnemonic?: string;
  value?: number;
} & { [key: string]: any }

  export type SimpleSearchResult = {
  limit: number;
  hits?: Array<object>;
  offset: number;
  total: number;
} & { [key: string]: any }

  export type SearchRequest = {
  limit?: number;
  query: any;
  sorts?: Array<Sort>;
  offset?: number;
} & { [key: string]: any }

  export type PaginatedSearchResult = {
  query: any;
  sorts?: Array<Sort>;
  limit: number;
  hits?: Array<object>;
  offset: number;
  total: number;
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
  offset: number;
  total: number;
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
  offset: number;
  total: number;
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
  offset?: number;
} & { [key: string]: any }

  export type MoneyMnemonic = {
  currencyMnemonic?: string;
  value?: number;
} & { [key: string]: any }

  export type TaxItems = {
  taxItems?: Array<TaxItem>;
} & { [key: string]: any }

  export type PaymentCardSpec = {
  cardType?: string;
  checksumVerificationEnabled?: boolean;
  description?: string;
  image?: string;
  name?: string;
  numberLengths?: Array<string>;
  numberPrefixes?: Array<string>;
} & { [key: string]: any }

  export type OrderAddress = {
  address1?: string;
  address2?: string;
  city?: string;
  companyName?: string;
  countryCode?: string;
  firstName?: string;
  fullName?: string;
  id?: string;
  jobTitle?: string;
  lastName?: string;
  phone?: string;
  postBox?: string;
  postalCode?: string;
  salutation?: string;
  secondName?: string;
  stateCode?: string;
  suffix?: string;
  suite?: string;
  title?: string;
} & { [key: string]: any }

  export type BasketsResult = {
  baskets: Array<Basket>;
  total: number;
} & { [key: string]: any }

  export type PaymentCard = {
  cardType?: string;
  creditCardExpired?: boolean;
  creditCardToken?: string;
  expirationMonth?: number;
  expirationYear?: number;
  holder?: string;
  issueNumber?: string;
  maskedNumber?: string;
  numberLastDigits?: string;
  validFromMonth?: number;
  validFromYear?: number;
}
  export type NotesResult = {
  notes?: Array<Note>;
} & { [key: string]: any }

  export type ShippingItem = {
  adjustedTax?: number;
  basePrice?: number;
  itemId?: string;
  itemText?: string;
  price?: number;
  priceAdjustments?: Array<PriceAdjustment>;
  priceAfterItemDiscount?: number;
  shipmentId?: string;
  tax?: number;
  taxBasis?: number;
  taxClassId?: string;
  taxRate?: number;
} & { [key: string]: any }

  export type Discount = {
  amount?: number;
  percentage?: number;
  priceBookId?: string;
  type: string;
} & { [key: string]: any }

  export type Note = {
  createdBy?: string;
  creationDate?: any;
  id?: string;
  subject?: string;
  text?: string;
}
  export type CouponItem = {
  code: string;
  couponItemId?: string;
  statusCode?: string;
  valid?: boolean;
} & { [key: string]: any }

  export type PromotionLink = {
  calloutMsg?: string;
  name?: string;
  promotionId?: string;
  title?: string;
}
  export type PriceBookIds = Array<string>;

  export type ShippingPromotion = {
  calloutMsg?: string;
  promotionId?: string;
  promotionName?: string;
} & { [key: string]: any }

  export type ProductItem = {
  adjustedTax?: number;
  basePrice?: number;
  bonusDiscountLineItemId?: string;
  bonusProductLineItem?: boolean;
  bundledProductItems?: Array<ProductItem>;
  gift?: boolean;
  giftMessage?: string;
  inventoryId?: string;
  itemId?: string;
  itemText?: string;
  optionItems?: Array<OptionItem>;
  price?: number;
  priceAdjustments?: Array<PriceAdjustment>;
  priceAfterItemDiscount?: number;
  priceAfterOrderDiscount?: number;
  productId?: string;
  productListItem?: ProductListItemReference;
  productName?: string;
  quantity?: number;
  shipmentId?: string;
  shippingItemId?: string;
  tax?: number;
  taxBasis?: number;
  taxClassId?: string;
  taxRate?: number;
} & { [key: string]: any }

  export type BasketPaymentInstrumentRequest = {
  amount?: number;
  bankRoutingNumber?: string;
  giftCertificateCode?: string;
  paymentCard?: OrderPaymentCardRequest;
  paymentMethodId?: string;
} & { [key: string]: any }

  export type Taxes = {
  taxes: {
} & { [key: string]: any }
;
}
  export type OrderPaymentInstrument = {
  amount?: number;
  authorizationStatus?: Status;
  bankRoutingNumber?: string;
  maskedGiftCertificateCode?: string;
  paymentCard?: PaymentCard;
  paymentInstrumentId?: string;
  paymentMethodId?: string;
} & { [key: string]: any }

  export type BonusDiscountLineItem = {
  bonusProducts?: Array<ProductDetailsLink>;
  couponCode?: string;
  id?: string;
  maxBonusItems?: number;
  promotionId?: string;
} & { [key: string]: any }

  export type PaymentMethodResult = {
  applicablePaymentMethods?: Array<PaymentMethod>;
} & { [key: string]: any }

  export type Shipment = {
  adjustedMerchandizeTotalTax?: number;
  adjustedShippingTotalTax?: number;
  gift?: boolean;
  giftMessage?: string;
  merchandizeTotalTax?: number;
  productSubTotal?: number;
  productTotal?: number;
  shipmentId?: string;
  shipmentNo?: string;
  shipmentTotal?: number;
  shippingAddress?: OrderAddress;
  shippingMethod?: ShippingMethod;
  shippingStatus?: string;
  shippingTotal?: number;
  shippingTotalTax?: number;
  taxTotal?: number;
  trackingNumber?: string;
} & { [key: string]: any }

  export type CustomerInfo = {
  customerId?: string;
  customerName?: string;
  customerNo?: string;
  email: string;
} & { [key: string]: any }

  export type SimpleLink = {
}
  export type PriceAdjustment = {
  appliedDiscount?: Discount;
  couponCode?: string;
  createdBy?: string;
  creationDate?: any;
  custom?: boolean;
  itemText?: string;
  lastModified?: any;
  manual?: boolean;
  price?: number;
  priceAdjustmentId?: string;
  promotionId?: string;
  promotionLink?: string;
  reasonCode?: string;
} & { [key: string]: any }

  export type ShippingMethodResult = {
  applicableShippingMethods?: Array<ShippingMethod>;
  defaultShippingMethodId?: string;
} & { [key: string]: any }

  export type ProductDetailsLink = {
  productDescription?: string;
  productId: string;
  productName?: string;
  title?: string;
}
  export type OptionItem = {
  adjustedTax?: number;
  basePrice?: number;
  bonusDiscountLineItemId?: string;
  bonusProductLineItem?: boolean;
  bundledProductItems?: Array<ProductItem>;
  gift?: boolean;
  giftMessage?: string;
  inventoryId?: string;
  itemId?: string;
  itemText?: string;
  optionId: string;
  optionItems?: Array<OptionItem>;
  optionValueId: string;
  price?: number;
  priceAdjustments?: Array<PriceAdjustment>;
  priceAfterItemDiscount?: number;
  priceAfterOrderDiscount?: number;
  productId?: string;
  productListItem?: ProductListItemReference;
  productName?: string;
  quantity?: number;
  shipmentId?: string;
  shippingItemId?: string;
  tax?: number;
  taxBasis?: number;
  taxClassId?: string;
  taxRate?: number;
} & { [key: string]: any }

  export type ShippingMethod = {
  description?: string;
  externalShippingMethod?: string;
  id: string;
  name?: string;
  price?: number;
  shippingPromotions?: Array<ShippingPromotion>;
} & { [key: string]: any }

  export type Basket = {
  adjustedMerchandizeTotalTax?: number;
  adjustedShippingTotalTax?: number;
  agentBasket?: boolean;
  basketId?: string;
  billingAddress?: OrderAddress;
  bonusDiscountLineItems?: Array<BonusDiscountLineItem>;
  channelType?: string;
  couponItems?: Array<CouponItem>;
  creationDate?: any;
  currency?: string;
  customerInfo?: CustomerInfo;
  giftCertificateItems?: Array<GiftCertificateItem>;
  inventoryReservationExpiry?: any;
  lastModified?: any;
  merchandizeTotalTax?: number;
  notes?: SimpleLink;
  orderPriceAdjustments?: Array<PriceAdjustment>;
  orderTotal?: number;
  paymentInstruments?: Array<OrderPaymentInstrument>;
  productItems?: Array<ProductItem>;
  productSubTotal?: number;
  productTotal?: number;
  shipments?: Array<Shipment>;
  shippingItems?: Array<ShippingItem>;
  shippingTotal?: number;
  shippingTotalTax?: number;
  sourceCode?: string;
  taxTotal?: number;
  taxation?: string;
} & { [key: string]: any }

  export type OrderPaymentInstrumentRequest = {
  amount?: number;
  bankRoutingNumber?: string;
  giftCertificateCode?: string;
  paymentCard?: OrderPaymentCardRequest;
  paymentMethodId?: string;
} & { [key: string]: any }

  export type GiftCertificateItem = {
  amount: number;
  giftCertificateItemId?: string;
  message?: string;
  recipientEmail: string;
  recipientName?: string;
  senderName?: string;
  shipmentId?: string;
} & { [key: string]: any }

  export type ProductListLink = {
  description?: string;
  name?: string;
  public?: boolean;
  title?: string;
  type?: string;
} & { [key: string]: any }

  export type Order = {
  adjustedMerchandizeTotalTax?: number;
  adjustedShippingTotalTax?: number;
  billingAddress?: OrderAddress;
  bonusDiscountLineItems?: Array<BonusDiscountLineItem>;
  channelType?: string;
  confirmationStatus?: string;
  couponItems?: Array<CouponItem>;
  createdBy?: string;
  creationDate?: any;
  currency?: string;
  customerInfo?: CustomerInfo;
  customerName?: string;
  exportStatus?: string;
  externalOrderStatus?: string;
  giftCertificateItems?: Array<GiftCertificateItem>;
  globalPartyId?: string;
  lastModified?: any;
  merchandizeTotalTax?: number;
  notes?: SimpleLink;
  orderNo?: string;
  orderPriceAdjustments?: Array<PriceAdjustment>;
  orderToken?: string;
  orderTotal?: number;
  paymentInstruments?: Array<OrderPaymentInstrument>;
  paymentStatus?: string;
  productItems?: Array<ProductItem>;
  productSubTotal?: number;
  productTotal?: number;
  shipments?: Array<Shipment>;
  shippingItems?: Array<ShippingItem>;
  shippingStatus?: string;
  shippingTotal?: number;
  shippingTotalTax?: number;
  siteId?: string;
  sourceCode?: string;
  status?: string;
  taxTotal?: number;
  taxation?: string;
} & { [key: string]: any }

  export type OrderPaymentCardRequest = {
  cardType?: string;
  creditCardToken?: string;
  expirationMonth?: number;
  expirationYear?: number;
  holder?: string;
  issueNumber?: string;
  maskedNumber?: string;
  validFromMonth?: number;
  validFromYear?: number;
}
  export type PaymentMethod = {
  cards?: Array<PaymentCardSpec>;
  description?: string;
  id: string;
  image?: string;
  name?: string;
  paymentProcessorId?: string;
} & { [key: string]: any }

  export type TaxItem = {
  id: string;
  rate: number;
  value?: number;
}
  export type Status = {
  code?: string;
  message?: string;
  status?: number;
}
  export type ProductListItemReference = {
  id: string;
  priority?: number;
  productDetailsLink?: ProductDetailsLink;
  productList?: ProductListLink;
  public?: boolean;
  purchasedQuantity?: number;
  quantity?: number;
  type?: string;
}
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

  
/**
 * All path parameters that are used by at least one ShopperOrders method.
 */
export type ShopperOrdersPathParameters = {
  organizationId?: string;
  orderNo?: string;
  paymentInstrumentId?: string;
}
/**
 * All query parameters that are used by at least one ShopperOrders method.
 */
export type ShopperOrdersQueryParameters = {
  siteId?: string;
  locale?: string;
}

/**
 * All parameters that are used by ShopperOrders.
 */
export type ShopperOrdersParameters = ShopperOrdersPathParameters & BaseUriParameters & ShopperOrdersQueryParameters;

/**
* [Shopper Orders](https://developer.salesforce.com/docs/commerce/commerce-api/references?meta=shopper-orders:Summary)
* ==================================
*
* *Finish the shopper checkout experience resulting in an order.*<br />
*
* Simple example:
*
* ```typescript
*   import { ShopperOrders } from "commerce-sdk-isomorphic";
*
*   const clientConfig = {
*     parameters: {
*       clientId: "XXXXXX",
*       organizationId: "XXXX",
*       shortCode: "XXX",
*       siteId: "XX"
*     }
*   };
*   const shopperOrdersClient = new ShopperOrders(clientConfig);
* ```
*
* <span style="font-size:.7em; display:block; text-align: right">
* API Version: 0.2.0<br />
* Last Updated: <br />  
* </span>

* 

*/
export class ShopperOrders<ConfigParameters extends ShopperOrdersParameters & Record<string, unknown>> {
  // baseUri is not required on ClientConfig, but we know that we provide one in the class constructor
  public clientConfig: ClientConfig<ConfigParameters> & { baseUri: string };

  static readonly defaultBaseUri = "https://{shortCode}.api.commercecloud.salesforce.com/checkout/shopper-orders/{version}";

  constructor(config: ClientConfigInit<ConfigParameters>) {
    const cfg = {...config}
    if (!cfg.baseUri) cfg.baseUri = new.target.defaultBaseUri;
    // Type assertion is safe because ^^^
    this.clientConfig = new ClientConfig(cfg) as ClientConfig<ConfigParameters> & { baseUri: string };
  }

      /**
      * Submits an order based on a prepared basket. The only considered value from the request body is basketId.
      *
      * If you would like to get a raw Response object use the other createOrder function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param siteId - 
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Order.
      * 
      */
      createOrder(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Basket
        }>
      ): Promise<Order>;
  
      /**
      * Submits an order based on a prepared basket. The only considered value from the request body is basketId.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param siteId - 
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Order otherwise.
      * 
      */
      createOrder<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Basket
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Order>;
  
      /**
      * Submits an order based on a prepared basket. The only considered value from the request body is basketId.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param siteId - 
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Order otherwise.
      * 
      */
      async createOrder(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Basket
        }>,
        rawResponse?: boolean
      ): Promise<Response | Order> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperOrdersPathParameters & Required<BaseUriParameters> = {
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
  
        const queryParams: ShopperOrdersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
        if (optionParams["locale"] !== undefined) {
          queryParams["locale"] = optionParams["locale"];
        } else if (configParams["locale"] !== undefined) {
          queryParams["locale"] = configParams["locale"];
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/orders",
          this.clientConfig.baseUri,
          {
            pathParams,
            queryParams,
            origin: this.clientConfig.proxy
          }
        );
  
        const headers: Record<string, string> = {
          "Content-Type": "application/json",
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
      * Gets information for an order.
      *
      * If you would like to get a raw Response object use the other getOrder function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param orderNo - The order number of the order to be modified.
      * @param siteId - 
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type Order.
      * 
      */
      getOrder(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            orderNo: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<Order>;
  
      /**
      * Gets information for an order.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param orderNo - The order number of the order to be modified.
      * @param siteId - 
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Order otherwise.
      * 
      */
      getOrder<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            orderNo: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Order>;
  
      /**
      * Gets information for an order.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param orderNo - The order number of the order to be modified.
      * @param siteId - 
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Order otherwise.
      * 
      */
      async getOrder(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            orderNo: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | Order> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperOrdersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["orderNo"] !== undefined) {
          pathParams["orderNo"] = optionParams["orderNo"];
        } else if (configParams["orderNo"] !== undefined) {
          pathParams["orderNo"] = configParams["orderNo"];
        }
        else {
          throw new Error('Missing required path parameter: orderNo');
        }
  
        const queryParams: ShopperOrdersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
        if (optionParams["locale"] !== undefined) {
          queryParams["locale"] = optionParams["locale"];
        } else if (configParams["locale"] !== undefined) {
          queryParams["locale"] = configParams["locale"];
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/orders/{orderNo}",
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
      * Adds a payment instrument to an order. 
  
  Details:
  
  The payment instrument is added with the provided details. The payment method must be applicable for the order see GET
  /baskets/\{basketId\}/payment-methods, if the payment method is 'CREDIT_CARD' a paymentCard must be specified in the request.
      *
      * If you would like to get a raw Response object use the other createPaymentInstrumentForOrder function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param orderNo - The order number of the order to be modified.
      * @param siteId - 
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Order.
      * 
      */
      createPaymentInstrumentForOrder(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            orderNo: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: OrderPaymentInstrumentRequest
        }>
      ): Promise<Order>;
  
      /**
      * Adds a payment instrument to an order. 
  
  Details:
  
  The payment instrument is added with the provided details. The payment method must be applicable for the order see GET
  /baskets/\{basketId\}/payment-methods, if the payment method is 'CREDIT_CARD' a paymentCard must be specified in the request.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param orderNo - The order number of the order to be modified.
      * @param siteId - 
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Order otherwise.
      * 
      */
      createPaymentInstrumentForOrder<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            orderNo: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: OrderPaymentInstrumentRequest
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Order>;
  
      /**
      * Adds a payment instrument to an order. 
  
  Details:
  
  The payment instrument is added with the provided details. The payment method must be applicable for the order see GET
  /baskets/\{basketId\}/payment-methods, if the payment method is 'CREDIT_CARD' a paymentCard must be specified in the request.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param orderNo - The order number of the order to be modified.
      * @param siteId - 
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Order otherwise.
      * 
      */
      async createPaymentInstrumentForOrder(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            orderNo: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: OrderPaymentInstrumentRequest
        }>,
        rawResponse?: boolean
      ): Promise<Response | Order> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperOrdersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["orderNo"] !== undefined) {
          pathParams["orderNo"] = optionParams["orderNo"];
        } else if (configParams["orderNo"] !== undefined) {
          pathParams["orderNo"] = configParams["orderNo"];
        }
        else {
          throw new Error('Missing required path parameter: orderNo');
        }
  
        const queryParams: ShopperOrdersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
        if (optionParams["locale"] !== undefined) {
          queryParams["locale"] = optionParams["locale"];
        } else if (configParams["locale"] !== undefined) {
          queryParams["locale"] = configParams["locale"];
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/orders/{orderNo}/payment-instruments",
          this.clientConfig.baseUri,
          {
            pathParams,
            queryParams,
            origin: this.clientConfig.proxy
          }
        );
  
        const headers: Record<string, string> = {
          "Content-Type": "application/json",
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
      * Removes a payment instrument of an order.
      *
      * If you would like to get a raw Response object use the other removePaymentInstrumentFromOrder function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param orderNo - The order number of the order to be modified.
      * @param paymentInstrumentId - The ID of the payment instrument to be updated.
      * @param siteId - 
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type Order.
      * 
      */
      removePaymentInstrumentFromOrder(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            orderNo: string
            paymentInstrumentId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<Order>;
  
      /**
      * Removes a payment instrument of an order.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param orderNo - The order number of the order to be modified.
      * @param paymentInstrumentId - The ID of the payment instrument to be updated.
      * @param siteId - 
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Order otherwise.
      * 
      */
      removePaymentInstrumentFromOrder<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            orderNo: string
            paymentInstrumentId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Order>;
  
      /**
      * Removes a payment instrument of an order.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param orderNo - The order number of the order to be modified.
      * @param paymentInstrumentId - The ID of the payment instrument to be updated.
      * @param siteId - 
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Order otherwise.
      * 
      */
      async removePaymentInstrumentFromOrder(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            orderNo: string
            paymentInstrumentId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | Order> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperOrdersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["orderNo"] !== undefined) {
          pathParams["orderNo"] = optionParams["orderNo"];
        } else if (configParams["orderNo"] !== undefined) {
          pathParams["orderNo"] = configParams["orderNo"];
        }
        else {
          throw new Error('Missing required path parameter: orderNo');
        }
        if (optionParams["paymentInstrumentId"] !== undefined) {
          pathParams["paymentInstrumentId"] = optionParams["paymentInstrumentId"];
        } else if (configParams["paymentInstrumentId"] !== undefined) {
          pathParams["paymentInstrumentId"] = configParams["paymentInstrumentId"];
        }
        else {
          throw new Error('Missing required path parameter: paymentInstrumentId');
        }
  
        const queryParams: ShopperOrdersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
        if (optionParams["locale"] !== undefined) {
          queryParams["locale"] = optionParams["locale"];
        } else if (configParams["locale"] !== undefined) {
          queryParams["locale"] = configParams["locale"];
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/orders/{orderNo}/payment-instruments/{paymentInstrumentId}",
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
            method: "DELETE"
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
      * Updates a payment instrument of an order.
  
  Details:
  
  The payment instrument is updated with the provided details. The payment method must be applicable for the
  order see GET /baskets/\{basketId\}/payment-methods, if the payment method is 'CREDIT_CARD' a
  paymentCard must be specified in the request.
      *
      * If you would like to get a raw Response object use the other updatePaymentInstrumentForOrder function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param orderNo - The order number of the order to be modified.
      * @param paymentInstrumentId - The ID of the payment instrument to be updated.
      * @param siteId - 
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Order.
      * 
      */
      updatePaymentInstrumentForOrder(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            orderNo: string
            paymentInstrumentId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: OrderPaymentInstrumentRequest
        }>
      ): Promise<Order>;
  
      /**
      * Updates a payment instrument of an order.
  
  Details:
  
  The payment instrument is updated with the provided details. The payment method must be applicable for the
  order see GET /baskets/\{basketId\}/payment-methods, if the payment method is 'CREDIT_CARD' a
  paymentCard must be specified in the request.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param orderNo - The order number of the order to be modified.
      * @param paymentInstrumentId - The ID of the payment instrument to be updated.
      * @param siteId - 
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Order otherwise.
      * 
      */
      updatePaymentInstrumentForOrder<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            orderNo: string
            paymentInstrumentId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: OrderPaymentInstrumentRequest
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Order>;
  
      /**
      * Updates a payment instrument of an order.
  
  Details:
  
  The payment instrument is updated with the provided details. The payment method must be applicable for the
  order see GET /baskets/\{basketId\}/payment-methods, if the payment method is 'CREDIT_CARD' a
  paymentCard must be specified in the request.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param orderNo - The order number of the order to be modified.
      * @param paymentInstrumentId - The ID of the payment instrument to be updated.
      * @param siteId - 
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Order otherwise.
      * 
      */
      async updatePaymentInstrumentForOrder(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            orderNo: string
            paymentInstrumentId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: OrderPaymentInstrumentRequest
        }>,
        rawResponse?: boolean
      ): Promise<Response | Order> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperOrdersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["orderNo"] !== undefined) {
          pathParams["orderNo"] = optionParams["orderNo"];
        } else if (configParams["orderNo"] !== undefined) {
          pathParams["orderNo"] = configParams["orderNo"];
        }
        else {
          throw new Error('Missing required path parameter: orderNo');
        }
        if (optionParams["paymentInstrumentId"] !== undefined) {
          pathParams["paymentInstrumentId"] = optionParams["paymentInstrumentId"];
        } else if (configParams["paymentInstrumentId"] !== undefined) {
          pathParams["paymentInstrumentId"] = configParams["paymentInstrumentId"];
        }
        else {
          throw new Error('Missing required path parameter: paymentInstrumentId');
        }
  
        const queryParams: ShopperOrdersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
        if (optionParams["locale"] !== undefined) {
          queryParams["locale"] = optionParams["locale"];
        } else if (configParams["locale"] !== undefined) {
          queryParams["locale"] = configParams["locale"];
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/orders/{orderNo}/payment-instruments/{paymentInstrumentId}",
          this.clientConfig.baseUri,
          {
            pathParams,
            queryParams,
            origin: this.clientConfig.proxy
          }
        );
  
        const headers: Record<string, string> = {
          "Content-Type": "application/json",
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
            method: "PATCH"
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
      * Gets the applicable payment methods for an existing order considering the open payment amount only.
      *
      * If you would like to get a raw Response object use the other getPaymentMethodsForOrder function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param orderNo - The order number of the order to be modified.
      * @param siteId - 
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type PaymentMethodResult.
      * 
      */
      getPaymentMethodsForOrder(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            orderNo: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<PaymentMethodResult>;
  
      /**
      * Gets the applicable payment methods for an existing order considering the open payment amount only.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param orderNo - The order number of the order to be modified.
      * @param siteId - 
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type PaymentMethodResult otherwise.
      * 
      */
      getPaymentMethodsForOrder<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            orderNo: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : PaymentMethodResult>;
  
      /**
      * Gets the applicable payment methods for an existing order considering the open payment amount only.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param orderNo - The order number of the order to be modified.
      * @param siteId - 
      * @param locale - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type PaymentMethodResult otherwise.
      * 
      */
      async getPaymentMethodsForOrder(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            orderNo: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | PaymentMethodResult> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperOrdersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["orderNo"] !== undefined) {
          pathParams["orderNo"] = optionParams["orderNo"];
        } else if (configParams["orderNo"] !== undefined) {
          pathParams["orderNo"] = configParams["orderNo"];
        }
        else {
          throw new Error('Missing required path parameter: orderNo');
        }
  
        const queryParams: ShopperOrdersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
        if (optionParams["locale"] !== undefined) {
          queryParams["locale"] = optionParams["locale"];
        } else if (configParams["locale"] !== undefined) {
          queryParams["locale"] = configParams["locale"];
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/orders/{orderNo}/payment-methods",
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
      * This method gives you the external taxation data of the order transferred from the basket during 
  order creation. This endpoint can be called only if external taxation was used. See POST /baskets 
  for more information.         
      *
      * If you would like to get a raw Response object use the other getTaxesFromOrder function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param orderNo - The order number of the order to be modified.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type Taxes.
      * 
      */
      getTaxesFromOrder(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            orderNo: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<Taxes>;
  
      /**
      * This method gives you the external taxation data of the order transferred from the basket during 
  order creation. This endpoint can be called only if external taxation was used. See POST /baskets 
  for more information.         
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param orderNo - The order number of the order to be modified.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Taxes otherwise.
      * 
      */
      getTaxesFromOrder<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            orderNo: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Taxes>;
  
      /**
      * This method gives you the external taxation data of the order transferred from the basket during 
  order creation. This endpoint can be called only if external taxation was used. See POST /baskets 
  for more information.         
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param orderNo - The order number of the order to be modified.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Taxes otherwise.
      * 
      */
      async getTaxesFromOrder(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            orderNo: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | Taxes> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperOrdersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["orderNo"] !== undefined) {
          pathParams["orderNo"] = optionParams["orderNo"];
        } else if (configParams["orderNo"] !== undefined) {
          pathParams["orderNo"] = configParams["orderNo"];
        }
        else {
          throw new Error('Missing required path parameter: orderNo');
        }
  
        const queryParams: ShopperOrdersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/orders/{orderNo}/taxes",
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
