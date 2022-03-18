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
 * All path parameters that are used by at least one ShopperBaskets method.
 */
export type ShopperBasketsPathParameters = {
  organizationId?: string;
  basketId?: string;
  couponItemId?: string;
  giftCertificateItemId?: string;
  itemId?: string;
  paymentInstrumentId?: string;
  shipmentId?: string;
}
/**
 * All query parameters that are used by at least one ShopperBaskets method.
 */
export type ShopperBasketsQueryParameters = {
  taxMode?: string;
  siteId?: string;
  locale?: string;
  overrideExisting?: boolean;
  createDestinationBasket?: boolean;
  productItemMergeMode?: string;
  useAsShipping?: boolean;
  removeExternalTax?: boolean;
  useAsBilling?: boolean;
}

/**
 * All parameters that are used by ShopperBaskets.
 */
export type ShopperBasketsParameters = ShopperBasketsPathParameters & BaseUriParameters & ShopperBasketsQueryParameters;

/**
* [Shopper Baskets](https://developer.salesforce.com/docs/commerce/commerce-api/references?meta=shopper-baskets:Summary)
* ==================================
*
* *Build a checkout experience.*<br />
*
* Simple example:
*
* ```typescript
*   import { ShopperBaskets } from "commerce-sdk-isomorphic";
*
*   const clientConfig = {
*     parameters: {
*       clientId: "XXXXXX",
*       organizationId: "XXXX",
*       shortCode: "XXX",
*       siteId: "XX"
*     }
*   };
*   const shopperBasketsClient = new ShopperBaskets(clientConfig);
* ```
*
* <span style="font-size:.7em; display:block; text-align: right">
* API Version: 0.6.3<br />
* Last Updated: <br />  
* </span>

* 

*/
export class ShopperBaskets<ConfigParameters extends ShopperBasketsParameters & Record<string, unknown>> {
  // baseUri is not required on ClientConfig, but we know that we provide one in the class constructor
  public clientConfig: ClientConfig<ConfigParameters> & { baseUri: string };

  static readonly defaultBaseUri = "https://{shortCode}.api.commercecloud.salesforce.com/checkout/shopper-baskets/{version}";

  constructor(config: ClientConfigInit<ConfigParameters>) {
    const cfg = {...config}
    if (!cfg.baseUri) cfg.baseUri = new.target.defaultBaseUri;
    // Type assertion is safe because ^^^
    this.clientConfig = new ClientConfig(cfg) as ClientConfig<ConfigParameters> & { baseUri: string };
  }

      /**
      * Creates a new basket.
  
  The created basket is initialized with default values. Data provided in the body document is populated into the created basket. It can be updated with API endpoints listed below.
  
  The taxMode query parameter can be used to choose the basket tax mode. The default is internal, in which case the tax calculation is done automatically based on internal tax tables. Alternatively, external taxation mode can be set which allows manual modification of the tax rates and values. External tax data is mandatory for product line items, option line items, shipping line items, coupon line items, and bonus discount line item. Gift certificate line items are optional and use zero tax rate per default, which can be overwritten. Price adjustments cannot be set because they are either calculated or inherited (depending on the type, the tax rate is either obtained from the related line item or computed as prorate of the basket).
  
  API endpoints allowing further basket modification:
  
  - customer information: PUT /baskets/\{basketId\}/customer
  
  - billing address: PUT /baskets/\{basketId\}/billing-address
  
  - shipments including shipping address and shipping method: POST /baskets/\{basketId\}/shipments
  
  - product items: POST /baskets/\{basketId\}/items
  
  - coupon items: POST /baskets/\{basketId\}/coupons
  
  - gift certificate items: POST /baskets/\{basketId\}/gift-certificates
  
  - basket taxation: PUT /baskets/\{basketId\}/taxes
  
  - basket item taxation: PUT /baskets/\{basketId\}/items/\{itemId\}/taxes
  
  - payment method and card type: POST /baskets/\{basketId\}/payment-instruments
  
  - custom properties: PATCH /baskets/\{basketId\}
  
  Related resource means with which resource you can specify the same data after the basket creation.
  Identify the basket using the basketId property, which
  should be integrated into the path of an update request (for example a POST to
  /baskets/\{basketId\}/items).
  
  A customer must provide a JSON Web Token (JWT), which specifies exactly one customer (it can be a guest or a registered
  customer). In this case, the resource creates a basket for this customer.
  
  The number of baskets which can be created per customer is limited. When a
  basket is created, it is said to be open. It remains open until either an order is created from it
  using a POST to resource /orders, or it is deleted using a DELETE to resource
  /baskets/\{basketId\}. Each customer can have just one open basket.
  
  Custom properties in the form c_\<CUSTOM_NAME\> are supported. A custom property must correspond to a custom
  attribute (\<CUSTOM_NAME\>) defined for the basket system object, and its value must be valid for that custom
  attribute.
      *
      * If you would like to get a raw Response object use the other createBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param taxMode - 
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Basket.
      * 
      */
      createBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            taxMode?: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Basket
        }>
      ): Promise<Basket>;
  
      /**
      * Creates a new basket.
  
  The created basket is initialized with default values. Data provided in the body document is populated into the created basket. It can be updated with API endpoints listed below.
  
  The taxMode query parameter can be used to choose the basket tax mode. The default is internal, in which case the tax calculation is done automatically based on internal tax tables. Alternatively, external taxation mode can be set which allows manual modification of the tax rates and values. External tax data is mandatory for product line items, option line items, shipping line items, coupon line items, and bonus discount line item. Gift certificate line items are optional and use zero tax rate per default, which can be overwritten. Price adjustments cannot be set because they are either calculated or inherited (depending on the type, the tax rate is either obtained from the related line item or computed as prorate of the basket).
  
  API endpoints allowing further basket modification:
  
  - customer information: PUT /baskets/\{basketId\}/customer
  
  - billing address: PUT /baskets/\{basketId\}/billing-address
  
  - shipments including shipping address and shipping method: POST /baskets/\{basketId\}/shipments
  
  - product items: POST /baskets/\{basketId\}/items
  
  - coupon items: POST /baskets/\{basketId\}/coupons
  
  - gift certificate items: POST /baskets/\{basketId\}/gift-certificates
  
  - basket taxation: PUT /baskets/\{basketId\}/taxes
  
  - basket item taxation: PUT /baskets/\{basketId\}/items/\{itemId\}/taxes
  
  - payment method and card type: POST /baskets/\{basketId\}/payment-instruments
  
  - custom properties: PATCH /baskets/\{basketId\}
  
  Related resource means with which resource you can specify the same data after the basket creation.
  Identify the basket using the basketId property, which
  should be integrated into the path of an update request (for example a POST to
  /baskets/\{basketId\}/items).
  
  A customer must provide a JSON Web Token (JWT), which specifies exactly one customer (it can be a guest or a registered
  customer). In this case, the resource creates a basket for this customer.
  
  The number of baskets which can be created per customer is limited. When a
  basket is created, it is said to be open. It remains open until either an order is created from it
  using a POST to resource /orders, or it is deleted using a DELETE to resource
  /baskets/\{basketId\}. Each customer can have just one open basket.
  
  Custom properties in the form c_\<CUSTOM_NAME\> are supported. A custom property must correspond to a custom
  attribute (\<CUSTOM_NAME\>) defined for the basket system object, and its value must be valid for that custom
  attribute.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param taxMode - 
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      createBasket<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            taxMode?: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Basket
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Basket>;
  
      /**
      * Creates a new basket.
  
  The created basket is initialized with default values. Data provided in the body document is populated into the created basket. It can be updated with API endpoints listed below.
  
  The taxMode query parameter can be used to choose the basket tax mode. The default is internal, in which case the tax calculation is done automatically based on internal tax tables. Alternatively, external taxation mode can be set which allows manual modification of the tax rates and values. External tax data is mandatory for product line items, option line items, shipping line items, coupon line items, and bonus discount line item. Gift certificate line items are optional and use zero tax rate per default, which can be overwritten. Price adjustments cannot be set because they are either calculated or inherited (depending on the type, the tax rate is either obtained from the related line item or computed as prorate of the basket).
  
  API endpoints allowing further basket modification:
  
  - customer information: PUT /baskets/\{basketId\}/customer
  
  - billing address: PUT /baskets/\{basketId\}/billing-address
  
  - shipments including shipping address and shipping method: POST /baskets/\{basketId\}/shipments
  
  - product items: POST /baskets/\{basketId\}/items
  
  - coupon items: POST /baskets/\{basketId\}/coupons
  
  - gift certificate items: POST /baskets/\{basketId\}/gift-certificates
  
  - basket taxation: PUT /baskets/\{basketId\}/taxes
  
  - basket item taxation: PUT /baskets/\{basketId\}/items/\{itemId\}/taxes
  
  - payment method and card type: POST /baskets/\{basketId\}/payment-instruments
  
  - custom properties: PATCH /baskets/\{basketId\}
  
  Related resource means with which resource you can specify the same data after the basket creation.
  Identify the basket using the basketId property, which
  should be integrated into the path of an update request (for example a POST to
  /baskets/\{basketId\}/items).
  
  A customer must provide a JSON Web Token (JWT), which specifies exactly one customer (it can be a guest or a registered
  customer). In this case, the resource creates a basket for this customer.
  
  The number of baskets which can be created per customer is limited. When a
  basket is created, it is said to be open. It remains open until either an order is created from it
  using a POST to resource /orders, or it is deleted using a DELETE to resource
  /baskets/\{basketId\}. Each customer can have just one open basket.
  
  Custom properties in the form c_\<CUSTOM_NAME\> are supported. A custom property must correspond to a custom
  attribute (\<CUSTOM_NAME\>) defined for the basket system object, and its value must be valid for that custom
  attribute.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param taxMode - 
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      async createBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            taxMode?: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Basket
        }>,
        rawResponse?: boolean
      ): Promise<Response | Basket> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
  
        const queryParams: ShopperBasketsQueryParameters = {};
        if (optionParams["taxMode"] !== undefined) {
          queryParams["taxMode"] = optionParams["taxMode"];
        } else if (configParams["taxMode"] !== undefined) {
          queryParams["taxMode"] = configParams["taxMode"];
        }
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
          "/organizations/{organizationId}/baskets",
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
      * Transfer the previous shopper's basket to the current shopper by updating the basket's owner. No other values change. You must obtain the shopper authorization token via SLAS, and it must contain both the previous and current shopper IDs.
  
  A success response contains the transferred basket.
  
  If the current shopper has an active basket, and the `overwriteExisting` request parameter is `false`, then the transfer request returns a BasketTransferException (HTTP status 409). You can proceed with one of these options:
  - Keep the current shopper's active basket.
  - Merge the previous and current shoppers' baskets by calling the `baskets/merge` endpoint.
  - Force the transfer by calling the `baskets/transfer` endpoint again, with the parameter `overwriteExisting=true`. Forcing the transfer deletes the current shopper's active basket.
      *
      * If you would like to get a raw Response object use the other transferBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param overrideExisting - If the current shopper has no active basket, this parameter is ignored. If the current shopper has an active basket, this parameter controls the behavior:
  - `false` (default): Return a BasketTransferException (HTTP status 409). The basket owner doesn't change.
  - `true`: Force the transfer by deleting the current shopper's active basket and making the current shopper the owner of the previous shopper's basket. Returns the transferred basket (HTTP status 200).
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type Basket.
      * 
      */
      transferBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            overrideExisting?: boolean
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<Basket>;
  
      /**
      * Transfer the previous shopper's basket to the current shopper by updating the basket's owner. No other values change. You must obtain the shopper authorization token via SLAS, and it must contain both the previous and current shopper IDs.
  
  A success response contains the transferred basket.
  
  If the current shopper has an active basket, and the `overwriteExisting` request parameter is `false`, then the transfer request returns a BasketTransferException (HTTP status 409). You can proceed with one of these options:
  - Keep the current shopper's active basket.
  - Merge the previous and current shoppers' baskets by calling the `baskets/merge` endpoint.
  - Force the transfer by calling the `baskets/transfer` endpoint again, with the parameter `overwriteExisting=true`. Forcing the transfer deletes the current shopper's active basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param overrideExisting - If the current shopper has no active basket, this parameter is ignored. If the current shopper has an active basket, this parameter controls the behavior:
  - `false` (default): Return a BasketTransferException (HTTP status 409). The basket owner doesn't change.
  - `true`: Force the transfer by deleting the current shopper's active basket and making the current shopper the owner of the previous shopper's basket. Returns the transferred basket (HTTP status 200).
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      transferBasket<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            overrideExisting?: boolean
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Basket>;
  
      /**
      * Transfer the previous shopper's basket to the current shopper by updating the basket's owner. No other values change. You must obtain the shopper authorization token via SLAS, and it must contain both the previous and current shopper IDs.
  
  A success response contains the transferred basket.
  
  If the current shopper has an active basket, and the `overwriteExisting` request parameter is `false`, then the transfer request returns a BasketTransferException (HTTP status 409). You can proceed with one of these options:
  - Keep the current shopper's active basket.
  - Merge the previous and current shoppers' baskets by calling the `baskets/merge` endpoint.
  - Force the transfer by calling the `baskets/transfer` endpoint again, with the parameter `overwriteExisting=true`. Forcing the transfer deletes the current shopper's active basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param overrideExisting - If the current shopper has no active basket, this parameter is ignored. If the current shopper has an active basket, this parameter controls the behavior:
  - `false` (default): Return a BasketTransferException (HTTP status 409). The basket owner doesn't change.
  - `true`: Force the transfer by deleting the current shopper's active basket and making the current shopper the owner of the previous shopper's basket. Returns the transferred basket (HTTP status 200).
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      async transferBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            overrideExisting?: boolean
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | Basket> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
  
        const queryParams: ShopperBasketsQueryParameters = {};
        if (optionParams["overrideExisting"] !== undefined) {
          queryParams["overrideExisting"] = optionParams["overrideExisting"];
        } else if (configParams["overrideExisting"] !== undefined) {
          queryParams["overrideExisting"] = configParams["overrideExisting"];
        }
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/baskets/actions/transfer",
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
      * Merge data from the previous shopper's basket into the current shopper's active basket and delete the previous shopper's basket. This endpoint doesn't merge Personally Identifiable Information (PII). You must obtain the shopper authorization token via SLAS, and it must contain both the previous and current shopper IDs. After the merge, all basket amounts are recalculated and totaled, including lookups for prices, taxes, shipping, and promotions.
  
  The following information is merged:
  - custom attributes on the basket and on all copied records
  - product items
  - gift certificate items
  - coupon items
  - shipments
  - ad-hoc price adjustments
  
  To control the merging of products that exist in both baskets, use the `productItemMergeMode` parameter. By default, the higher of the two basket quantities is used for each product. Products in both baskets are considered to be the same when all of the following values match (if one product doesn't have a value, the other product is a match only if it also doesn't have that value):
  - shipment
  - productId
  - option values
  - wishlist reference
  - inventory list id
  - gift flag & message
  - ad-hoc price adjustments
  
  If any of the listed values don't match, then the item in the previous shopper's basket is copied to a new line item in the current shopper's basket. If the listed values all match, but the matching products have different values for any custom attribute, the merged line item keeps the custom attribute value from the current shopper's basket.
  
  A success response contains the current shopper's active basket. The previous guest shopper's active basket is deleted.
  
  If the current shopper doesn't have an active basket, and the createDestinationBasket request parameter is false, then the merge request returns a BasketMergeException (HTTP status 409). You can proceed with one of these options:
  - Transfer the previous shopper's active basket to the current logged-in shopper by calling the `baskets/transfer` endpoint.
  - Force the merge by calling the `baskets/merge` endpoint again, with the parameter `createDestinationBasket=true`. Forcing the merge creates a new basket for the current shopper and copies information from the previous shopper's basket into it. Because the merge doesn't copy all basket data, a forced merge is not the same as a transfer. For example, the new basket doesn't contain any Personally Identifiable Information (PII) from the previous basket.
  
  ### before merge
  | Previous Shopper's Basket, SKU: Quantity, Custom Attributes | Current Shopper's Basket, SKU: Quantity, Custom Attributes  |
  |-------------------------------------------------------------|-------------------------------------------------------------|
  | SKU_A: 5\<br\> SKU_B: 3\<br\> SKU_C: 4\<br\> c_customAttr_1: 'ABC' \<br\> c_customAttr_2: 'DEF'   | SKU_A: 2\<br\> SKU_D: 6\<br\> SKU_E: 7\<br\> c_customAttr_1: 'UVW' \<br\> c_customAttr_3: 'XYZ'   |
  
  ### after merge - (previous shopper's basket is deleted)
  | productItemMergeMode | Current Shopper's Basket - SKU: Quantity, Custom Attributes  |
  |----------------------|--------------------------------------------------------------|
  | sum_quantities         | SKU_A: 7\<br\> SKU_B: 3\<br\> SKU_C: 4\<br\> SKU_D: 6\<br\> SKU_E: 7\<br\> c_customAttr_1: 'UVW' \<br\> c_customAttr_2: 'DEF' \<br\> c_customAttr_3: 'XYZ'              |
  | higher_quantity      | SKU_A: 5\<br\> SKU_B: 3\<br\> SKU_C: 4\<br\> SKU_D: 6\<br\> SKU_E: 7\<br\> c_customAttr_1: 'UVW' \<br\> c_customAttr_2: 'DEF' \<br\> c_customAttr_3: 'XYZ'              |
  | saved_quantity       | SKU_A: 2\<br\> SKU_B: 3\<br\> SKU_C: 4\<br\> SKU_D: 6\<br\> SKU_E: 7\<br\> c_customAttr_1: 'UVW' \<br\> c_customAttr_2: 'DEF' \<br\> c_customAttr_3: 'XYZ'              |
  | separate_item        | SKU_A: 5\<br\> SKU_B: 3\<br\> SKU_C: 4\<br\> SKU_A: 2\<br\> SKU_D: 6\<br\> SKU_E: 7\<br\> c_customAttr_1: 'UVW' \<br\> c_customAttr_2: 'DEF' \<br\> c_customAttr_3: 'XYZ' |
      *
      * If you would like to get a raw Response object use the other mergeBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param createDestinationBasket - If the current shopper has an active basket, this parameter is ignored. If the current shopper has no active basket, this parameter controls the behavior:
  - `false` (default): Return a BasketMergeException (HTTP status 409).
  - `true`: Force the merge by creating a basket for the current shopper and copying information from the previous shopper's basket into it. Return success (HTTP status 200).
      * @param productItemMergeMode - This parameter controls the quantity calculation for products that exist in both baskets.
  - higher_quantity (default): Compare the product's quantities in each basket, and use the higher value.
  - sum_quantities: Use the sum of the product's quantities from both baskets.
  - saved_quantity: Use the product's quantity in the current shopper's active basket. Ignore the quantity from the previous shopper's basket.
  - separate_item: Add a separate product item to the current shopper's basket for the quantity in the previous shopper's basket.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type Basket.
      * 
      */
      mergeBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            createDestinationBasket?: boolean
            productItemMergeMode?: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<Basket>;
  
      /**
      * Merge data from the previous shopper's basket into the current shopper's active basket and delete the previous shopper's basket. This endpoint doesn't merge Personally Identifiable Information (PII). You must obtain the shopper authorization token via SLAS, and it must contain both the previous and current shopper IDs. After the merge, all basket amounts are recalculated and totaled, including lookups for prices, taxes, shipping, and promotions.
  
  The following information is merged:
  - custom attributes on the basket and on all copied records
  - product items
  - gift certificate items
  - coupon items
  - shipments
  - ad-hoc price adjustments
  
  To control the merging of products that exist in both baskets, use the `productItemMergeMode` parameter. By default, the higher of the two basket quantities is used for each product. Products in both baskets are considered to be the same when all of the following values match (if one product doesn't have a value, the other product is a match only if it also doesn't have that value):
  - shipment
  - productId
  - option values
  - wishlist reference
  - inventory list id
  - gift flag & message
  - ad-hoc price adjustments
  
  If any of the listed values don't match, then the item in the previous shopper's basket is copied to a new line item in the current shopper's basket. If the listed values all match, but the matching products have different values for any custom attribute, the merged line item keeps the custom attribute value from the current shopper's basket.
  
  A success response contains the current shopper's active basket. The previous guest shopper's active basket is deleted.
  
  If the current shopper doesn't have an active basket, and the createDestinationBasket request parameter is false, then the merge request returns a BasketMergeException (HTTP status 409). You can proceed with one of these options:
  - Transfer the previous shopper's active basket to the current logged-in shopper by calling the `baskets/transfer` endpoint.
  - Force the merge by calling the `baskets/merge` endpoint again, with the parameter `createDestinationBasket=true`. Forcing the merge creates a new basket for the current shopper and copies information from the previous shopper's basket into it. Because the merge doesn't copy all basket data, a forced merge is not the same as a transfer. For example, the new basket doesn't contain any Personally Identifiable Information (PII) from the previous basket.
  
  ### before merge
  | Previous Shopper's Basket, SKU: Quantity, Custom Attributes | Current Shopper's Basket, SKU: Quantity, Custom Attributes  |
  |-------------------------------------------------------------|-------------------------------------------------------------|
  | SKU_A: 5\<br\> SKU_B: 3\<br\> SKU_C: 4\<br\> c_customAttr_1: 'ABC' \<br\> c_customAttr_2: 'DEF'   | SKU_A: 2\<br\> SKU_D: 6\<br\> SKU_E: 7\<br\> c_customAttr_1: 'UVW' \<br\> c_customAttr_3: 'XYZ'   |
  
  ### after merge - (previous shopper's basket is deleted)
  | productItemMergeMode | Current Shopper's Basket - SKU: Quantity, Custom Attributes  |
  |----------------------|--------------------------------------------------------------|
  | sum_quantities         | SKU_A: 7\<br\> SKU_B: 3\<br\> SKU_C: 4\<br\> SKU_D: 6\<br\> SKU_E: 7\<br\> c_customAttr_1: 'UVW' \<br\> c_customAttr_2: 'DEF' \<br\> c_customAttr_3: 'XYZ'              |
  | higher_quantity      | SKU_A: 5\<br\> SKU_B: 3\<br\> SKU_C: 4\<br\> SKU_D: 6\<br\> SKU_E: 7\<br\> c_customAttr_1: 'UVW' \<br\> c_customAttr_2: 'DEF' \<br\> c_customAttr_3: 'XYZ'              |
  | saved_quantity       | SKU_A: 2\<br\> SKU_B: 3\<br\> SKU_C: 4\<br\> SKU_D: 6\<br\> SKU_E: 7\<br\> c_customAttr_1: 'UVW' \<br\> c_customAttr_2: 'DEF' \<br\> c_customAttr_3: 'XYZ'              |
  | separate_item        | SKU_A: 5\<br\> SKU_B: 3\<br\> SKU_C: 4\<br\> SKU_A: 2\<br\> SKU_D: 6\<br\> SKU_E: 7\<br\> c_customAttr_1: 'UVW' \<br\> c_customAttr_2: 'DEF' \<br\> c_customAttr_3: 'XYZ' |
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param createDestinationBasket - If the current shopper has an active basket, this parameter is ignored. If the current shopper has no active basket, this parameter controls the behavior:
  - `false` (default): Return a BasketMergeException (HTTP status 409).
  - `true`: Force the merge by creating a basket for the current shopper and copying information from the previous shopper's basket into it. Return success (HTTP status 200).
      * @param productItemMergeMode - This parameter controls the quantity calculation for products that exist in both baskets.
  - higher_quantity (default): Compare the product's quantities in each basket, and use the higher value.
  - sum_quantities: Use the sum of the product's quantities from both baskets.
  - saved_quantity: Use the product's quantity in the current shopper's active basket. Ignore the quantity from the previous shopper's basket.
  - separate_item: Add a separate product item to the current shopper's basket for the quantity in the previous shopper's basket.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      mergeBasket<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            createDestinationBasket?: boolean
            productItemMergeMode?: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Basket>;
  
      /**
      * Merge data from the previous shopper's basket into the current shopper's active basket and delete the previous shopper's basket. This endpoint doesn't merge Personally Identifiable Information (PII). You must obtain the shopper authorization token via SLAS, and it must contain both the previous and current shopper IDs. After the merge, all basket amounts are recalculated and totaled, including lookups for prices, taxes, shipping, and promotions.
  
  The following information is merged:
  - custom attributes on the basket and on all copied records
  - product items
  - gift certificate items
  - coupon items
  - shipments
  - ad-hoc price adjustments
  
  To control the merging of products that exist in both baskets, use the `productItemMergeMode` parameter. By default, the higher of the two basket quantities is used for each product. Products in both baskets are considered to be the same when all of the following values match (if one product doesn't have a value, the other product is a match only if it also doesn't have that value):
  - shipment
  - productId
  - option values
  - wishlist reference
  - inventory list id
  - gift flag & message
  - ad-hoc price adjustments
  
  If any of the listed values don't match, then the item in the previous shopper's basket is copied to a new line item in the current shopper's basket. If the listed values all match, but the matching products have different values for any custom attribute, the merged line item keeps the custom attribute value from the current shopper's basket.
  
  A success response contains the current shopper's active basket. The previous guest shopper's active basket is deleted.
  
  If the current shopper doesn't have an active basket, and the createDestinationBasket request parameter is false, then the merge request returns a BasketMergeException (HTTP status 409). You can proceed with one of these options:
  - Transfer the previous shopper's active basket to the current logged-in shopper by calling the `baskets/transfer` endpoint.
  - Force the merge by calling the `baskets/merge` endpoint again, with the parameter `createDestinationBasket=true`. Forcing the merge creates a new basket for the current shopper and copies information from the previous shopper's basket into it. Because the merge doesn't copy all basket data, a forced merge is not the same as a transfer. For example, the new basket doesn't contain any Personally Identifiable Information (PII) from the previous basket.
  
  ### before merge
  | Previous Shopper's Basket, SKU: Quantity, Custom Attributes | Current Shopper's Basket, SKU: Quantity, Custom Attributes  |
  |-------------------------------------------------------------|-------------------------------------------------------------|
  | SKU_A: 5\<br\> SKU_B: 3\<br\> SKU_C: 4\<br\> c_customAttr_1: 'ABC' \<br\> c_customAttr_2: 'DEF'   | SKU_A: 2\<br\> SKU_D: 6\<br\> SKU_E: 7\<br\> c_customAttr_1: 'UVW' \<br\> c_customAttr_3: 'XYZ'   |
  
  ### after merge - (previous shopper's basket is deleted)
  | productItemMergeMode | Current Shopper's Basket - SKU: Quantity, Custom Attributes  |
  |----------------------|--------------------------------------------------------------|
  | sum_quantities         | SKU_A: 7\<br\> SKU_B: 3\<br\> SKU_C: 4\<br\> SKU_D: 6\<br\> SKU_E: 7\<br\> c_customAttr_1: 'UVW' \<br\> c_customAttr_2: 'DEF' \<br\> c_customAttr_3: 'XYZ'              |
  | higher_quantity      | SKU_A: 5\<br\> SKU_B: 3\<br\> SKU_C: 4\<br\> SKU_D: 6\<br\> SKU_E: 7\<br\> c_customAttr_1: 'UVW' \<br\> c_customAttr_2: 'DEF' \<br\> c_customAttr_3: 'XYZ'              |
  | saved_quantity       | SKU_A: 2\<br\> SKU_B: 3\<br\> SKU_C: 4\<br\> SKU_D: 6\<br\> SKU_E: 7\<br\> c_customAttr_1: 'UVW' \<br\> c_customAttr_2: 'DEF' \<br\> c_customAttr_3: 'XYZ'              |
  | separate_item        | SKU_A: 5\<br\> SKU_B: 3\<br\> SKU_C: 4\<br\> SKU_A: 2\<br\> SKU_D: 6\<br\> SKU_E: 7\<br\> c_customAttr_1: 'UVW' \<br\> c_customAttr_2: 'DEF' \<br\> c_customAttr_3: 'XYZ' |
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param createDestinationBasket - If the current shopper has an active basket, this parameter is ignored. If the current shopper has no active basket, this parameter controls the behavior:
  - `false` (default): Return a BasketMergeException (HTTP status 409).
  - `true`: Force the merge by creating a basket for the current shopper and copying information from the previous shopper's basket into it. Return success (HTTP status 200).
      * @param productItemMergeMode - This parameter controls the quantity calculation for products that exist in both baskets.
  - higher_quantity (default): Compare the product's quantities in each basket, and use the higher value.
  - sum_quantities: Use the sum of the product's quantities from both baskets.
  - saved_quantity: Use the product's quantity in the current shopper's active basket. Ignore the quantity from the previous shopper's basket.
  - separate_item: Add a separate product item to the current shopper's basket for the quantity in the previous shopper's basket.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      async mergeBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            createDestinationBasket?: boolean
            productItemMergeMode?: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | Basket> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
  
        const queryParams: ShopperBasketsQueryParameters = {};
        if (optionParams["createDestinationBasket"] !== undefined) {
          queryParams["createDestinationBasket"] = optionParams["createDestinationBasket"];
        } else if (configParams["createDestinationBasket"] !== undefined) {
          queryParams["createDestinationBasket"] = configParams["createDestinationBasket"];
        }
        if (optionParams["productItemMergeMode"] !== undefined) {
          queryParams["productItemMergeMode"] = optionParams["productItemMergeMode"];
        } else if (configParams["productItemMergeMode"] !== undefined) {
          queryParams["productItemMergeMode"] = configParams["productItemMergeMode"];
        }
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/baskets/actions/merge",
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
      * Removes a basket.
      *
      * If you would like to get a raw Response object use the other deleteBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type void.
      * 
      */
      deleteBasket(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<void>;
  
      /**
      * Removes a basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      deleteBasket<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : void>;
  
      /**
      * Removes a basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      async deleteBasket(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | void> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/baskets/{basketId}",
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
      }
      /**
      * Gets a basket.
      *
      * If you would like to get a raw Response object use the other getBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type Basket.
      * 
      */
      getBasket(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<Basket>;
  
      /**
      * Gets a basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      getBasket<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Basket>;
  
      /**
      * Gets a basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      async getBasket(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | Basket> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
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
          "/organizations/{organizationId}/baskets/{basketId}",
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
      * Updates a basket. Only the currency of the basket, source code, the custom
  properties of the basket, and the shipping items will be considered.
      *
      * If you would like to get a raw Response object use the other updateBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Basket.
      * 
      */
      updateBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Basket
        }>
      ): Promise<Basket>;
  
      /**
      * Updates a basket. Only the currency of the basket, source code, the custom
  properties of the basket, and the shipping items will be considered.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      updateBasket<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Basket
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Basket>;
  
      /**
      * Updates a basket. Only the currency of the basket, source code, the custom
  properties of the basket, and the shipping items will be considered.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      async updateBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Basket
        }>,
        rawResponse?: boolean
      ): Promise<Response | Basket> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
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
          "/organizations/{organizationId}/baskets/{basketId}",
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
      * Sets the billing address of a basket.
      *
      * If you would like to get a raw Response object use the other updateBillingAddressForBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param useAsShipping - 
      * @param removeExternalTax - Changing the billing/shipping address can trigger tax recalculation. If the basket's tax mode is internal, the tax is automatically recalculated using tax tables. If the basket's tax mode is external, this query parameter controls tax recalculation as follows:
  - true: (default) The basket's tax values are set to null and must be recalculated.
  - false: The basket's tax values don't change. Use this setting to prevent an unnecessary external tax call when the billing/shipping address change doesn't affect the tax calculation.          
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Basket.
      * 
      */
      updateBillingAddressForBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            useAsShipping?: boolean
            removeExternalTax?: boolean
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: OrderAddress
        }>
      ): Promise<Basket>;
  
      /**
      * Sets the billing address of a basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param useAsShipping - 
      * @param removeExternalTax - Changing the billing/shipping address can trigger tax recalculation. If the basket's tax mode is internal, the tax is automatically recalculated using tax tables. If the basket's tax mode is external, this query parameter controls tax recalculation as follows:
  - true: (default) The basket's tax values are set to null and must be recalculated.
  - false: The basket's tax values don't change. Use this setting to prevent an unnecessary external tax call when the billing/shipping address change doesn't affect the tax calculation.          
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      updateBillingAddressForBasket<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            useAsShipping?: boolean
            removeExternalTax?: boolean
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: OrderAddress
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Basket>;
  
      /**
      * Sets the billing address of a basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param useAsShipping - 
      * @param removeExternalTax - Changing the billing/shipping address can trigger tax recalculation. If the basket's tax mode is internal, the tax is automatically recalculated using tax tables. If the basket's tax mode is external, this query parameter controls tax recalculation as follows:
  - true: (default) The basket's tax values are set to null and must be recalculated.
  - false: The basket's tax values don't change. Use this setting to prevent an unnecessary external tax call when the billing/shipping address change doesn't affect the tax calculation.          
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      async updateBillingAddressForBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            useAsShipping?: boolean
            removeExternalTax?: boolean
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: OrderAddress
        }>,
        rawResponse?: boolean
      ): Promise<Response | Basket> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
        if (optionParams["useAsShipping"] !== undefined) {
          queryParams["useAsShipping"] = optionParams["useAsShipping"];
        } else if (configParams["useAsShipping"] !== undefined) {
          queryParams["useAsShipping"] = configParams["useAsShipping"];
        }
        if (optionParams["removeExternalTax"] !== undefined) {
          queryParams["removeExternalTax"] = optionParams["removeExternalTax"];
        } else if (configParams["removeExternalTax"] !== undefined) {
          queryParams["removeExternalTax"] = configParams["removeExternalTax"];
        }
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
          "/organizations/{organizationId}/baskets/{basketId}/billing-address",
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
            method: "PUT"
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
      * Adds a coupon to an existing basket.
      *
      * If you would like to get a raw Response object use the other addCouponToBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Basket.
      * 
      */
      addCouponToBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CouponItem
        }>
      ): Promise<Basket>;
  
      /**
      * Adds a coupon to an existing basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      addCouponToBasket<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CouponItem
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Basket>;
  
      /**
      * Adds a coupon to an existing basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      async addCouponToBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CouponItem
        }>,
        rawResponse?: boolean
      ): Promise<Response | Basket> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
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
          "/organizations/{organizationId}/baskets/{basketId}/coupons",
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
      * Removes a coupon from the basket.
      *
      * If you would like to get a raw Response object use the other removeCouponFromBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param couponItemId - The ID of the coupon item to be removed.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type Basket.
      * 
      */
      removeCouponFromBasket(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            couponItemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<Basket>;
  
      /**
      * Removes a coupon from the basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param couponItemId - The ID of the coupon item to be removed.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      removeCouponFromBasket<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            couponItemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Basket>;
  
      /**
      * Removes a coupon from the basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param couponItemId - The ID of the coupon item to be removed.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      async removeCouponFromBasket(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            couponItemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | Basket> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
        if (optionParams["couponItemId"] !== undefined) {
          pathParams["couponItemId"] = optionParams["couponItemId"];
        } else if (configParams["couponItemId"] !== undefined) {
          pathParams["couponItemId"] = configParams["couponItemId"];
        }
        else {
          throw new Error('Missing required path parameter: couponItemId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/baskets/{basketId}/coupons/{couponItemId}",
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
      * Sets customer information for an existing basket.
      *
      * If you would like to get a raw Response object use the other updateCustomerForBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Basket.
      * 
      */
      updateCustomerForBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerInfo
        }>
      ): Promise<Basket>;
  
      /**
      * Sets customer information for an existing basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      updateCustomerForBasket<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerInfo
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Basket>;
  
      /**
      * Sets customer information for an existing basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      async updateCustomerForBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerInfo
        }>,
        rawResponse?: boolean
      ): Promise<Response | Basket> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
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
          "/organizations/{organizationId}/baskets/{basketId}/customer",
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
            method: "PUT"
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
      * Adds a gift certificate item to an existing basket.
      *
      * If you would like to get a raw Response object use the other addGiftCertificateItemToBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Basket.
      * 
      */
      addGiftCertificateItemToBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: GiftCertificateItem
        }>
      ): Promise<Basket>;
  
      /**
      * Adds a gift certificate item to an existing basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      addGiftCertificateItemToBasket<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: GiftCertificateItem
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Basket>;
  
      /**
      * Adds a gift certificate item to an existing basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      async addGiftCertificateItemToBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: GiftCertificateItem
        }>,
        rawResponse?: boolean
      ): Promise<Response | Basket> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
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
          "/organizations/{organizationId}/baskets/{basketId}/gift-certificate-items",
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
      * Deletes a gift certificate item from an existing basket.
      *
      * If you would like to get a raw Response object use the other removeGiftCertificateItemFromBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param giftCertificateItemId - the ID of the gift certificate item to be updated.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type Basket.
      * 
      */
      removeGiftCertificateItemFromBasket(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            giftCertificateItemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<Basket>;
  
      /**
      * Deletes a gift certificate item from an existing basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param giftCertificateItemId - the ID of the gift certificate item to be updated.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      removeGiftCertificateItemFromBasket<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            giftCertificateItemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Basket>;
  
      /**
      * Deletes a gift certificate item from an existing basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param giftCertificateItemId - the ID of the gift certificate item to be updated.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      async removeGiftCertificateItemFromBasket(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            giftCertificateItemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | Basket> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
        if (optionParams["giftCertificateItemId"] !== undefined) {
          pathParams["giftCertificateItemId"] = optionParams["giftCertificateItemId"];
        } else if (configParams["giftCertificateItemId"] !== undefined) {
          pathParams["giftCertificateItemId"] = configParams["giftCertificateItemId"];
        }
        else {
          throw new Error('Missing required path parameter: giftCertificateItemId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/baskets/{basketId}/gift-certificate-items/{giftCertificateItemId}",
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
      * Updates a gift certificate item of an existing basket.
      *
      * If you would like to get a raw Response object use the other updateGiftCertificateItemInBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param giftCertificateItemId - the ID of the gift certificate item to be updated.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Basket.
      * 
      */
      updateGiftCertificateItemInBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            giftCertificateItemId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: GiftCertificateItem
        }>
      ): Promise<Basket>;
  
      /**
      * Updates a gift certificate item of an existing basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param giftCertificateItemId - the ID of the gift certificate item to be updated.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      updateGiftCertificateItemInBasket<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            giftCertificateItemId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: GiftCertificateItem
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Basket>;
  
      /**
      * Updates a gift certificate item of an existing basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param giftCertificateItemId - the ID of the gift certificate item to be updated.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      async updateGiftCertificateItemInBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            giftCertificateItemId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: GiftCertificateItem
        }>,
        rawResponse?: boolean
      ): Promise<Response | Basket> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
        if (optionParams["giftCertificateItemId"] !== undefined) {
          pathParams["giftCertificateItemId"] = optionParams["giftCertificateItemId"];
        } else if (configParams["giftCertificateItemId"] !== undefined) {
          pathParams["giftCertificateItemId"] = configParams["giftCertificateItemId"];
        }
        else {
          throw new Error('Missing required path parameter: giftCertificateItemId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
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
          "/organizations/{organizationId}/baskets/{basketId}/gift-certificate-items/{giftCertificateItemId}",
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
      * Adds new items to a basket. The added items are associated with the
  specified shipment. If no shipment id is specified, the added items are associated with the default shipment.
  Considered values from the request body, for each item are:
  
  - productId: a valid product ID. This is the ID of the product to be added to the basket. If the
  product is already in the basket, the API either increments the quantity of the existing product line item or
  creates a new product line item, based on the site preference 'Add Product Behavior'. For option products and
  product bundles containing variation masters, the API creates a new product line item regardless of the site
  preference.
  - shipmentId: a valid shipment ID (optional). This is the ID of the shipment in which the product item
  is created.
  - quantity: a number between 0.01 and 999. This is the quantity of the product to order.
  - inventoryId: a valid inventory ID (optional). This is the ID of the inventory from which the item is
  allocated.
  - bonusDiscountLineItemId: a valid bonus discount line item ID (optional). This is the ID of the
  bonus discount line item for which the added product is a selected bonus product.
  - optionItems/optionValueId: a valid option value ID. This is an option value for an option item of
  an option product.  This is only possible if the product item is an option
  product. To set option values, you must specify a collection of option items in the optionItems
  property. These option items must contain optionId and optionValueId. Also,
  the values you specify must be valid for the option product that this product item represents. Otherwise, the
  server throws an InvalidProductOptionItemException or an
  InvalidProductOptionValueItemException.
  - custom properties in the form c_\<CUSTOM_NAME\>: the custom property must correspond to a custom
  attribute (\<CUSTOM_NAME\>) defined for ProductLineItem. The value of this property must be valid for the
  type of custom attribute defined for ProductLineItem.
      *
      * If you would like to get a raw Response object use the other addItemToBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Basket.
      * 
      */
      addItemToBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Array<ProductItem>
        }>
      ): Promise<Basket>;
  
      /**
      * Adds new items to a basket. The added items are associated with the
  specified shipment. If no shipment id is specified, the added items are associated with the default shipment.
  Considered values from the request body, for each item are:
  
  - productId: a valid product ID. This is the ID of the product to be added to the basket. If the
  product is already in the basket, the API either increments the quantity of the existing product line item or
  creates a new product line item, based on the site preference 'Add Product Behavior'. For option products and
  product bundles containing variation masters, the API creates a new product line item regardless of the site
  preference.
  - shipmentId: a valid shipment ID (optional). This is the ID of the shipment in which the product item
  is created.
  - quantity: a number between 0.01 and 999. This is the quantity of the product to order.
  - inventoryId: a valid inventory ID (optional). This is the ID of the inventory from which the item is
  allocated.
  - bonusDiscountLineItemId: a valid bonus discount line item ID (optional). This is the ID of the
  bonus discount line item for which the added product is a selected bonus product.
  - optionItems/optionValueId: a valid option value ID. This is an option value for an option item of
  an option product.  This is only possible if the product item is an option
  product. To set option values, you must specify a collection of option items in the optionItems
  property. These option items must contain optionId and optionValueId. Also,
  the values you specify must be valid for the option product that this product item represents. Otherwise, the
  server throws an InvalidProductOptionItemException or an
  InvalidProductOptionValueItemException.
  - custom properties in the form c_\<CUSTOM_NAME\>: the custom property must correspond to a custom
  attribute (\<CUSTOM_NAME\>) defined for ProductLineItem. The value of this property must be valid for the
  type of custom attribute defined for ProductLineItem.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      addItemToBasket<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Array<ProductItem>
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Basket>;
  
      /**
      * Adds new items to a basket. The added items are associated with the
  specified shipment. If no shipment id is specified, the added items are associated with the default shipment.
  Considered values from the request body, for each item are:
  
  - productId: a valid product ID. This is the ID of the product to be added to the basket. If the
  product is already in the basket, the API either increments the quantity of the existing product line item or
  creates a new product line item, based on the site preference 'Add Product Behavior'. For option products and
  product bundles containing variation masters, the API creates a new product line item regardless of the site
  preference.
  - shipmentId: a valid shipment ID (optional). This is the ID of the shipment in which the product item
  is created.
  - quantity: a number between 0.01 and 999. This is the quantity of the product to order.
  - inventoryId: a valid inventory ID (optional). This is the ID of the inventory from which the item is
  allocated.
  - bonusDiscountLineItemId: a valid bonus discount line item ID (optional). This is the ID of the
  bonus discount line item for which the added product is a selected bonus product.
  - optionItems/optionValueId: a valid option value ID. This is an option value for an option item of
  an option product.  This is only possible if the product item is an option
  product. To set option values, you must specify a collection of option items in the optionItems
  property. These option items must contain optionId and optionValueId. Also,
  the values you specify must be valid for the option product that this product item represents. Otherwise, the
  server throws an InvalidProductOptionItemException or an
  InvalidProductOptionValueItemException.
  - custom properties in the form c_\<CUSTOM_NAME\>: the custom property must correspond to a custom
  attribute (\<CUSTOM_NAME\>) defined for ProductLineItem. The value of this property must be valid for the
  type of custom attribute defined for ProductLineItem.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      async addItemToBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Array<ProductItem>
        }>,
        rawResponse?: boolean
      ): Promise<Response | Basket> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
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
          "/organizations/{organizationId}/baskets/{basketId}/items",
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
      * Removes a product item from the basket.
      *
      * If you would like to get a raw Response object use the other removeItemFromBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param itemId - The ID of the item to be updated.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type Basket.
      * 
      */
      removeItemFromBasket(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            itemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<Basket>;
  
      /**
      * Removes a product item from the basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param itemId - The ID of the item to be updated.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      removeItemFromBasket<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            itemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Basket>;
  
      /**
      * Removes a product item from the basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param itemId - The ID of the item to be updated.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      async removeItemFromBasket(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            itemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | Basket> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
        if (optionParams["itemId"] !== undefined) {
          pathParams["itemId"] = optionParams["itemId"];
        } else if (configParams["itemId"] !== undefined) {
          pathParams["itemId"] = configParams["itemId"];
        }
        else {
          throw new Error('Missing required path parameter: itemId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/baskets/{basketId}/items/{itemId}",
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
      * Updates an item in a basket. The
  following values in the request body are considered by the server:
  
  - productId: a valid product ID. The purpose of this
  value is to exchange a variation of a variation product.
  - shipmentId: a valid shipment ID. The purpose of
  this value is to move a product item to another shipment.
  - quantity: a number between 0 and 999. The purpose of
  this value is to change quantity of the product item. If quantity is 0,
  the product item is removed.
  - optionItems/optionValueId: a valid option value
  ID. The purpose of this value is to exchange an option value for an
  option item of an option product.
  This is only possible if the product item is an option product. To change
  option values a collection of option items to be changed need to be
  provided in property optionItems. Those
  optionItems need to contain optionId
  and optionValueId. The provided values must be valid
  for the option product that this product item represents. Otherwise
  InvalidProductOptionItemException or
  InvalidProductOptionValueItemException will be thrown.
  custom properties c_\<CUSTOM_NAME\>: a
  value corresponding to the type defined for custom attribute
  \<CUSTOM_NAME\> of ProductLineItem. The purpose of this value is to
  add or change the value of a custom attribute defined for
  ProductLineItem.
      *
      * If you would like to get a raw Response object use the other updateItemInBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param itemId - The ID of the item to be updated.
      * @param removeExternalTax - Updating the quantity of the product item can trigger tax recalculation. If the basket's tax mode is internal, the tax is automatically recalculated using tax tables. If the basket's tax mode is external, this query parameter controls tax recalculation as follows:
  - true: (default) The tax values for the product item are set to null and must be recalculated.
  - false: The tax value for the product item will be updated based on the external tax rate (if no tax value was externally computed). Use this setting to prevent an unnecessary external tax call. 
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Basket.
      * 
      */
      updateItemInBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            itemId: string
            removeExternalTax?: boolean
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: ProductItem
        }>
      ): Promise<Basket>;
  
      /**
      * Updates an item in a basket. The
  following values in the request body are considered by the server:
  
  - productId: a valid product ID. The purpose of this
  value is to exchange a variation of a variation product.
  - shipmentId: a valid shipment ID. The purpose of
  this value is to move a product item to another shipment.
  - quantity: a number between 0 and 999. The purpose of
  this value is to change quantity of the product item. If quantity is 0,
  the product item is removed.
  - optionItems/optionValueId: a valid option value
  ID. The purpose of this value is to exchange an option value for an
  option item of an option product.
  This is only possible if the product item is an option product. To change
  option values a collection of option items to be changed need to be
  provided in property optionItems. Those
  optionItems need to contain optionId
  and optionValueId. The provided values must be valid
  for the option product that this product item represents. Otherwise
  InvalidProductOptionItemException or
  InvalidProductOptionValueItemException will be thrown.
  custom properties c_\<CUSTOM_NAME\>: a
  value corresponding to the type defined for custom attribute
  \<CUSTOM_NAME\> of ProductLineItem. The purpose of this value is to
  add or change the value of a custom attribute defined for
  ProductLineItem.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param itemId - The ID of the item to be updated.
      * @param removeExternalTax - Updating the quantity of the product item can trigger tax recalculation. If the basket's tax mode is internal, the tax is automatically recalculated using tax tables. If the basket's tax mode is external, this query parameter controls tax recalculation as follows:
  - true: (default) The tax values for the product item are set to null and must be recalculated.
  - false: The tax value for the product item will be updated based on the external tax rate (if no tax value was externally computed). Use this setting to prevent an unnecessary external tax call. 
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      updateItemInBasket<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            itemId: string
            removeExternalTax?: boolean
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: ProductItem
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Basket>;
  
      /**
      * Updates an item in a basket. The
  following values in the request body are considered by the server:
  
  - productId: a valid product ID. The purpose of this
  value is to exchange a variation of a variation product.
  - shipmentId: a valid shipment ID. The purpose of
  this value is to move a product item to another shipment.
  - quantity: a number between 0 and 999. The purpose of
  this value is to change quantity of the product item. If quantity is 0,
  the product item is removed.
  - optionItems/optionValueId: a valid option value
  ID. The purpose of this value is to exchange an option value for an
  option item of an option product.
  This is only possible if the product item is an option product. To change
  option values a collection of option items to be changed need to be
  provided in property optionItems. Those
  optionItems need to contain optionId
  and optionValueId. The provided values must be valid
  for the option product that this product item represents. Otherwise
  InvalidProductOptionItemException or
  InvalidProductOptionValueItemException will be thrown.
  custom properties c_\<CUSTOM_NAME\>: a
  value corresponding to the type defined for custom attribute
  \<CUSTOM_NAME\> of ProductLineItem. The purpose of this value is to
  add or change the value of a custom attribute defined for
  ProductLineItem.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param itemId - The ID of the item to be updated.
      * @param removeExternalTax - Updating the quantity of the product item can trigger tax recalculation. If the basket's tax mode is internal, the tax is automatically recalculated using tax tables. If the basket's tax mode is external, this query parameter controls tax recalculation as follows:
  - true: (default) The tax values for the product item are set to null and must be recalculated.
  - false: The tax value for the product item will be updated based on the external tax rate (if no tax value was externally computed). Use this setting to prevent an unnecessary external tax call. 
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      async updateItemInBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            itemId: string
            removeExternalTax?: boolean
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: ProductItem
        }>,
        rawResponse?: boolean
      ): Promise<Response | Basket> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
        if (optionParams["itemId"] !== undefined) {
          pathParams["itemId"] = optionParams["itemId"];
        } else if (configParams["itemId"] !== undefined) {
          pathParams["itemId"] = configParams["itemId"];
        }
        else {
          throw new Error('Missing required path parameter: itemId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
        if (optionParams["removeExternalTax"] !== undefined) {
          queryParams["removeExternalTax"] = optionParams["removeExternalTax"];
        } else if (configParams["removeExternalTax"] !== undefined) {
          queryParams["removeExternalTax"] = configParams["removeExternalTax"];
        }
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
          "/organizations/{organizationId}/baskets/{basketId}/items/{itemId}",
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
      * This method allows you to apply external taxation data to an existing basket to be able to pass tax rates and optional values for a specific taxable line item. This endpoint can be called only if external taxation mode was used for basket creation. See POST /baskets for more information.
      *
      * If you would like to get a raw Response object use the other addTaxesForBasketItem function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param itemId - The ID of the item to be updated.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type void.
      * 
      */
      addTaxesForBasketItem(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            itemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: TaxItems
        }>
      ): Promise<void>;
  
      /**
      * This method allows you to apply external taxation data to an existing basket to be able to pass tax rates and optional values for a specific taxable line item. This endpoint can be called only if external taxation mode was used for basket creation. See POST /baskets for more information.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param itemId - The ID of the item to be updated.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      addTaxesForBasketItem<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            itemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: TaxItems
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : void>;
  
      /**
      * This method allows you to apply external taxation data to an existing basket to be able to pass tax rates and optional values for a specific taxable line item. This endpoint can be called only if external taxation mode was used for basket creation. See POST /baskets for more information.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param itemId - The ID of the item to be updated.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      async addTaxesForBasketItem(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            itemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: TaxItems
        }>,
        rawResponse?: boolean
      ): Promise<Response | void> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
        if (optionParams["itemId"] !== undefined) {
          pathParams["itemId"] = optionParams["itemId"];
        } else if (configParams["itemId"] !== undefined) {
          pathParams["itemId"] = configParams["itemId"];
        }
        else {
          throw new Error('Missing required path parameter: itemId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/baskets/{basketId}/items/{itemId}/taxes",
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
            method: "PUT"
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
      * Adds a payment instrument to a basket.
      *
      * If you would like to get a raw Response object use the other addPaymentInstrumentToBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Basket.
      * 
      */
      addPaymentInstrumentToBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: BasketPaymentInstrumentRequest
        }>
      ): Promise<Basket>;
  
      /**
      * Adds a payment instrument to a basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      addPaymentInstrumentToBasket<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: BasketPaymentInstrumentRequest
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Basket>;
  
      /**
      * Adds a payment instrument to a basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      async addPaymentInstrumentToBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: BasketPaymentInstrumentRequest
        }>,
        rawResponse?: boolean
      ): Promise<Response | Basket> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
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
          "/organizations/{organizationId}/baskets/{basketId}/payment-instruments",
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
      * Removes a payment instrument of a basket.
      *
      * If you would like to get a raw Response object use the other removePaymentInstrumentFromBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param paymentInstrumentId - 
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type Basket.
      * 
      */
      removePaymentInstrumentFromBasket(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            paymentInstrumentId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<Basket>;
  
      /**
      * Removes a payment instrument of a basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param paymentInstrumentId - 
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      removePaymentInstrumentFromBasket<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            paymentInstrumentId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Basket>;
  
      /**
      * Removes a payment instrument of a basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param paymentInstrumentId - 
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      async removePaymentInstrumentFromBasket(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            paymentInstrumentId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | Basket> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
        if (optionParams["paymentInstrumentId"] !== undefined) {
          pathParams["paymentInstrumentId"] = optionParams["paymentInstrumentId"];
        } else if (configParams["paymentInstrumentId"] !== undefined) {
          pathParams["paymentInstrumentId"] = configParams["paymentInstrumentId"];
        }
        else {
          throw new Error('Missing required path parameter: paymentInstrumentId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/baskets/{basketId}/payment-instruments/{paymentInstrumentId}",
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
      * Updates payment instrument of an existing basket.
      *
      * If you would like to get a raw Response object use the other updatePaymentInstrumentInBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param paymentInstrumentId - 
      * @param removeExternalTax - Updating the payment instrument can trigger tax recalculation. If the basket's tax mode is internal, the tax is automatically recalculated using tax tables. If the basket's tax mode is external, this query parameter controls tax recalculation as follows:
  - true: (default) The basket's tax values are set to null and must be recalculated.
  - false: The basket's tax values don't change. Use this setting to prevent an unnecessary external tax call when the payment instrument change doesn't affect the tax calculation. 
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Basket.
      * 
      */
      updatePaymentInstrumentInBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            paymentInstrumentId: string
            removeExternalTax?: boolean
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: OrderPaymentInstrument
        }>
      ): Promise<Basket>;
  
      /**
      * Updates payment instrument of an existing basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param paymentInstrumentId - 
      * @param removeExternalTax - Updating the payment instrument can trigger tax recalculation. If the basket's tax mode is internal, the tax is automatically recalculated using tax tables. If the basket's tax mode is external, this query parameter controls tax recalculation as follows:
  - true: (default) The basket's tax values are set to null and must be recalculated.
  - false: The basket's tax values don't change. Use this setting to prevent an unnecessary external tax call when the payment instrument change doesn't affect the tax calculation. 
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      updatePaymentInstrumentInBasket<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            paymentInstrumentId: string
            removeExternalTax?: boolean
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: OrderPaymentInstrument
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Basket>;
  
      /**
      * Updates payment instrument of an existing basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param paymentInstrumentId - 
      * @param removeExternalTax - Updating the payment instrument can trigger tax recalculation. If the basket's tax mode is internal, the tax is automatically recalculated using tax tables. If the basket's tax mode is external, this query parameter controls tax recalculation as follows:
  - true: (default) The basket's tax values are set to null and must be recalculated.
  - false: The basket's tax values don't change. Use this setting to prevent an unnecessary external tax call when the payment instrument change doesn't affect the tax calculation. 
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      async updatePaymentInstrumentInBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            paymentInstrumentId: string
            removeExternalTax?: boolean
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: OrderPaymentInstrument
        }>,
        rawResponse?: boolean
      ): Promise<Response | Basket> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
        if (optionParams["paymentInstrumentId"] !== undefined) {
          pathParams["paymentInstrumentId"] = optionParams["paymentInstrumentId"];
        } else if (configParams["paymentInstrumentId"] !== undefined) {
          pathParams["paymentInstrumentId"] = configParams["paymentInstrumentId"];
        }
        else {
          throw new Error('Missing required path parameter: paymentInstrumentId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
        if (optionParams["removeExternalTax"] !== undefined) {
          queryParams["removeExternalTax"] = optionParams["removeExternalTax"];
        } else if (configParams["removeExternalTax"] !== undefined) {
          queryParams["removeExternalTax"] = configParams["removeExternalTax"];
        }
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
          "/organizations/{organizationId}/baskets/{basketId}/payment-instruments/{paymentInstrumentId}",
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
      * Gets applicable payment methods for an existing basket considering the open payment amount only.
      *
      * If you would like to get a raw Response object use the other getPaymentMethodsForBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type PaymentMethodResult.
      * 
      */
      getPaymentMethodsForBasket(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<PaymentMethodResult>;
  
      /**
      * Gets applicable payment methods for an existing basket considering the open payment amount only.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type PaymentMethodResult otherwise.
      * 
      */
      getPaymentMethodsForBasket<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : PaymentMethodResult>;
  
      /**
      * Gets applicable payment methods for an existing basket considering the open payment amount only.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type PaymentMethodResult otherwise.
      * 
      */
      async getPaymentMethodsForBasket(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | PaymentMethodResult> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
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
          "/organizations/{organizationId}/baskets/{basketId}/payment-methods",
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
      * Gets applicable price books for an existing basket.
      *
      * If you would like to get a raw Response object use the other getPriceBooksForBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type PriceBookIds.
      * 
      */
      getPriceBooksForBasket(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<PriceBookIds>;
  
      /**
      * Gets applicable price books for an existing basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type PriceBookIds otherwise.
      * 
      */
      getPriceBooksForBasket<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : PriceBookIds>;
  
      /**
      * Gets applicable price books for an existing basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type PriceBookIds otherwise.
      * 
      */
      async getPriceBooksForBasket(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | PriceBookIds> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/baskets/{basketId}/price-books",
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
      * This method allows you to put an array of priceBookIds to an existing basket, which will be used for basket calculation.
      *
      * If you would like to get a raw Response object use the other addPriceBooksToBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type void.
      * 
      */
      addPriceBooksToBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: PriceBookIds
        }>
      ): Promise<void>;
  
      /**
      * This method allows you to put an array of priceBookIds to an existing basket, which will be used for basket calculation.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      addPriceBooksToBasket<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: PriceBookIds
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : void>;
  
      /**
      * This method allows you to put an array of priceBookIds to an existing basket, which will be used for basket calculation.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      async addPriceBooksToBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: PriceBookIds
        }>,
        rawResponse?: boolean
      ): Promise<Response | void> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/baskets/{basketId}/price-books",
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
            method: "PUT"
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
      * Creates a new shipment for a basket.
  
  The created shipment is initialized with values provided in the body
  document and can be updated with further data API calls. Considered from
  the body are the following properties if specified:
  
  - the ID
  - the shipping address
  - the shipping method
  - gift boolean flag
  - gift message
  - custom properties
      *
      * If you would like to get a raw Response object use the other createShipmentForBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Basket.
      * 
      */
      createShipmentForBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Shipment
        }>
      ): Promise<Basket>;
  
      /**
      * Creates a new shipment for a basket.
  
  The created shipment is initialized with values provided in the body
  document and can be updated with further data API calls. Considered from
  the body are the following properties if specified:
  
  - the ID
  - the shipping address
  - the shipping method
  - gift boolean flag
  - gift message
  - custom properties
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      createShipmentForBasket<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Shipment
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Basket>;
  
      /**
      * Creates a new shipment for a basket.
  
  The created shipment is initialized with values provided in the body
  document and can be updated with further data API calls. Considered from
  the body are the following properties if specified:
  
  - the ID
  - the shipping address
  - the shipping method
  - gift boolean flag
  - gift message
  - custom properties
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      async createShipmentForBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Shipment
        }>,
        rawResponse?: boolean
      ): Promise<Response | Basket> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
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
          "/organizations/{organizationId}/baskets/{basketId}/shipments",
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
      * Removes a specified shipment and all associated product, gift certificate,
  shipping, and price adjustment line items from a basket.
  It is not allowed to remove the default shipment.
      *
      * If you would like to get a raw Response object use the other removeShipmentFromBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param shipmentId - The ID of the shipment to be modified.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type Basket.
      * 
      */
      removeShipmentFromBasket(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            shipmentId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<Basket>;
  
      /**
      * Removes a specified shipment and all associated product, gift certificate,
  shipping, and price adjustment line items from a basket.
  It is not allowed to remove the default shipment.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param shipmentId - The ID of the shipment to be modified.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      removeShipmentFromBasket<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            shipmentId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Basket>;
  
      /**
      * Removes a specified shipment and all associated product, gift certificate,
  shipping, and price adjustment line items from a basket.
  It is not allowed to remove the default shipment.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param shipmentId - The ID of the shipment to be modified.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      async removeShipmentFromBasket(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            shipmentId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | Basket> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
        if (optionParams["shipmentId"] !== undefined) {
          pathParams["shipmentId"] = optionParams["shipmentId"];
        } else if (configParams["shipmentId"] !== undefined) {
          pathParams["shipmentId"] = configParams["shipmentId"];
        }
        else {
          throw new Error('Missing required path parameter: shipmentId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/baskets/{basketId}/shipments/{shipmentId}",
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
      * Updates a shipment for a basket.
  
  The shipment is initialized with values provided in the body
  document and can be updated with further data API calls. Considered from
  the body are the following properties if specified:
  - the ID
  - the shipping address
  - the shipping method
  - gift boolean flag
  - gift message
  - custom properties
      *
      * If you would like to get a raw Response object use the other updateShipmentForBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param shipmentId - The ID of the shipment to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Basket.
      * 
      */
      updateShipmentForBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            shipmentId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Shipment
        }>
      ): Promise<Basket>;
  
      /**
      * Updates a shipment for a basket.
  
  The shipment is initialized with values provided in the body
  document and can be updated with further data API calls. Considered from
  the body are the following properties if specified:
  - the ID
  - the shipping address
  - the shipping method
  - gift boolean flag
  - gift message
  - custom properties
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param shipmentId - The ID of the shipment to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      updateShipmentForBasket<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            shipmentId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Shipment
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Basket>;
  
      /**
      * Updates a shipment for a basket.
  
  The shipment is initialized with values provided in the body
  document and can be updated with further data API calls. Considered from
  the body are the following properties if specified:
  - the ID
  - the shipping address
  - the shipping method
  - gift boolean flag
  - gift message
  - custom properties
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param shipmentId - The ID of the shipment to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      async updateShipmentForBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            shipmentId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Shipment
        }>,
        rawResponse?: boolean
      ): Promise<Response | Basket> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
        if (optionParams["shipmentId"] !== undefined) {
          pathParams["shipmentId"] = optionParams["shipmentId"];
        } else if (configParams["shipmentId"] !== undefined) {
          pathParams["shipmentId"] = configParams["shipmentId"];
        }
        else {
          throw new Error('Missing required path parameter: shipmentId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
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
          "/organizations/{organizationId}/baskets/{basketId}/shipments/{shipmentId}",
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
      * Sets a shipping address of a specific shipment of a basket.
      *
      * If you would like to get a raw Response object use the other updateShippingAddressForShipment function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param shipmentId - The ID of the shipment to be modified.
      * @param useAsBilling - 
      * @param removeExternalTax - Updating the shipping/billing address can trigger tax recalculation. If the basket's tax mode is internal, the tax is automatically recalculated using tax tables. If the basket's tax mode is external, this query parameter controls tax recalculation as follows:
  - true: (default) The basket's tax values are set to null and must be recalculated.
  - false: The basket's tax values don't change. Use this setting to prevent an unnecessary external tax call when the shipping/billing address change doesn't affect the tax calculation. 
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Basket.
      * 
      */
      updateShippingAddressForShipment(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            shipmentId: string
            useAsBilling?: boolean
            removeExternalTax?: boolean
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: OrderAddress
        }>
      ): Promise<Basket>;
  
      /**
      * Sets a shipping address of a specific shipment of a basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param shipmentId - The ID of the shipment to be modified.
      * @param useAsBilling - 
      * @param removeExternalTax - Updating the shipping/billing address can trigger tax recalculation. If the basket's tax mode is internal, the tax is automatically recalculated using tax tables. If the basket's tax mode is external, this query parameter controls tax recalculation as follows:
  - true: (default) The basket's tax values are set to null and must be recalculated.
  - false: The basket's tax values don't change. Use this setting to prevent an unnecessary external tax call when the shipping/billing address change doesn't affect the tax calculation. 
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      updateShippingAddressForShipment<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            shipmentId: string
            useAsBilling?: boolean
            removeExternalTax?: boolean
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: OrderAddress
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Basket>;
  
      /**
      * Sets a shipping address of a specific shipment of a basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param shipmentId - The ID of the shipment to be modified.
      * @param useAsBilling - 
      * @param removeExternalTax - Updating the shipping/billing address can trigger tax recalculation. If the basket's tax mode is internal, the tax is automatically recalculated using tax tables. If the basket's tax mode is external, this query parameter controls tax recalculation as follows:
  - true: (default) The basket's tax values are set to null and must be recalculated.
  - false: The basket's tax values don't change. Use this setting to prevent an unnecessary external tax call when the shipping/billing address change doesn't affect the tax calculation. 
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      async updateShippingAddressForShipment(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            shipmentId: string
            useAsBilling?: boolean
            removeExternalTax?: boolean
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: OrderAddress
        }>,
        rawResponse?: boolean
      ): Promise<Response | Basket> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
        if (optionParams["shipmentId"] !== undefined) {
          pathParams["shipmentId"] = optionParams["shipmentId"];
        } else if (configParams["shipmentId"] !== undefined) {
          pathParams["shipmentId"] = configParams["shipmentId"];
        }
        else {
          throw new Error('Missing required path parameter: shipmentId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
        if (optionParams["useAsBilling"] !== undefined) {
          queryParams["useAsBilling"] = optionParams["useAsBilling"];
        } else if (configParams["useAsBilling"] !== undefined) {
          queryParams["useAsBilling"] = configParams["useAsBilling"];
        }
        if (optionParams["removeExternalTax"] !== undefined) {
          queryParams["removeExternalTax"] = optionParams["removeExternalTax"];
        } else if (configParams["removeExternalTax"] !== undefined) {
          queryParams["removeExternalTax"] = configParams["removeExternalTax"];
        }
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
          "/organizations/{organizationId}/baskets/{basketId}/shipments/{shipmentId}/shipping-address",
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
            method: "PUT"
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
      * Sets a shipping method to a specific shipment of a basket.
      *
      * If you would like to get a raw Response object use the other updateShippingMethodForShipment function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param shipmentId - The ID of the shipment to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Basket.
      * 
      */
      updateShippingMethodForShipment(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            shipmentId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: ShippingMethod
        }>
      ): Promise<Basket>;
  
      /**
      * Sets a shipping method to a specific shipment of a basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param shipmentId - The ID of the shipment to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      updateShippingMethodForShipment<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            shipmentId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: ShippingMethod
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Basket>;
  
      /**
      * Sets a shipping method to a specific shipment of a basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param shipmentId - The ID of the shipment to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Basket otherwise.
      * 
      */
      async updateShippingMethodForShipment(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            shipmentId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: ShippingMethod
        }>,
        rawResponse?: boolean
      ): Promise<Response | Basket> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
        if (optionParams["shipmentId"] !== undefined) {
          pathParams["shipmentId"] = optionParams["shipmentId"];
        } else if (configParams["shipmentId"] !== undefined) {
          pathParams["shipmentId"] = configParams["shipmentId"];
        }
        else {
          throw new Error('Missing required path parameter: shipmentId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
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
          "/organizations/{organizationId}/baskets/{basketId}/shipments/{shipmentId}/shipping-method",
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
            method: "PUT"
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
      * Gets the applicable shipping methods for a certain shipment of a basket.
      *
      * If you would like to get a raw Response object use the other getShippingMethodsForShipment function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param shipmentId - The ID of the shipment to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type ShippingMethodResult.
      * 
      */
      getShippingMethodsForShipment(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            shipmentId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<ShippingMethodResult>;
  
      /**
      * Gets the applicable shipping methods for a certain shipment of a basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param shipmentId - The ID of the shipment to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type ShippingMethodResult otherwise.
      * 
      */
      getShippingMethodsForShipment<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            shipmentId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : ShippingMethodResult>;
  
      /**
      * Gets the applicable shipping methods for a certain shipment of a basket.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param shipmentId - The ID of the shipment to be modified.
      * @param siteId - 
      * @param locale - A descriptor to provide locale context for a geographical region by both a language and/or country code. The locale pattern in the query param follows the ISO 639-1 for the language code (e.g. en, de, fr) and ISO 3166-1 for the country code (e.g. US, DE, AT). The param can be a combination of language code and country code or can just refer to the language code.
  Below are some valid examples:
  - en-US
  - de-AT
  - de
  - default
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type ShippingMethodResult otherwise.
      * 
      */
      async getShippingMethodsForShipment(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            shipmentId: string
            siteId: string
            locale?: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | ShippingMethodResult> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
        if (optionParams["shipmentId"] !== undefined) {
          pathParams["shipmentId"] = optionParams["shipmentId"];
        } else if (configParams["shipmentId"] !== undefined) {
          pathParams["shipmentId"] = configParams["shipmentId"];
        }
        else {
          throw new Error('Missing required path parameter: shipmentId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
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
          "/organizations/{organizationId}/baskets/{basketId}/shipments/{shipmentId}/shipping-methods",
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
      * This method gives you the external taxation data set by the PUT taxes API. This endpoint can be called only if external taxation mode was used for basket creation. See POST /baskets for more information.
      *
      * If you would like to get a raw Response object use the other getTaxesFromBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type Taxes.
      * 
      */
      getTaxesFromBasket(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<Taxes>;
  
      /**
      * This method gives you the external taxation data set by the PUT taxes API. This endpoint can be called only if external taxation mode was used for basket creation. See POST /baskets for more information.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Taxes otherwise.
      * 
      */
      getTaxesFromBasket<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Taxes>;
  
      /**
      * This method gives you the external taxation data set by the PUT taxes API. This endpoint can be called only if external taxation mode was used for basket creation. See POST /baskets for more information.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Taxes otherwise.
      * 
      */
      async getTaxesFromBasket(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | Taxes> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/baskets/{basketId}/taxes",
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
      * This method allows you to apply external taxation data to an existing basket to be able to pass tax rates and optional values for all taxable line items. This endpoint can be called only if external taxation mode was used for basket creation. See POST /baskets for more information.
      *
      * If you would like to get a raw Response object use the other addTaxesForBasket function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type void.
      * 
      */
      addTaxesForBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Taxes
        }>
      ): Promise<void>;
  
      /**
      * This method allows you to apply external taxation data to an existing basket to be able to pass tax rates and optional values for all taxable line items. This endpoint can be called only if external taxation mode was used for basket creation. See POST /baskets for more information.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      addTaxesForBasket<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Taxes
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : void>;
  
      /**
      * This method allows you to apply external taxation data to an existing basket to be able to pass tax rates and optional values for all taxable line items. This endpoint can be called only if external taxation mode was used for basket creation. See POST /baskets for more information.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - An identifier for the organization the request is being made by.
      * @param basketId - The ID of the basket to be modified.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      async addTaxesForBasket(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            basketId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Taxes
        }>,
        rawResponse?: boolean
      ): Promise<Response | void> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperBasketsPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["basketId"] !== undefined) {
          pathParams["basketId"] = optionParams["basketId"];
        } else if (configParams["basketId"] !== undefined) {
          pathParams["basketId"] = configParams["basketId"];
        }
        else {
          throw new Error('Missing required path parameter: basketId');
        }
  
        const queryParams: ShopperBasketsQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/baskets/{basketId}/taxes",
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
            method: "PUT"
          }
        );
        const response = await fetch(req);
        if (rawResponse) {
          return response;
        } else if (this.clientConfig.throwOnBadResponse && !response.ok && response.status !== 304) {
          throw new Error('Error ' + response.status + ': ' + response.statusText);
        }
      }

}
