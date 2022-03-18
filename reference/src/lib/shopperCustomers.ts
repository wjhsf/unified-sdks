import { fetch, Request }  from "cross-fetch";

import ClientConfig, { ClientConfigInit } from "./clientConfig";
import type {
  BaseUriParameters,
  CompositeParameters,
  RequireParametersUnlessAllAreOptional
} from "./helpers";
import TemplateURL from "./templateUrl";
import { USER_AGENT_HEADER, USER_AGENT_VALUE } from "./version";

export type CustomerAddress = {
  address1?: string;
  address2?: string;
  addressId: string;
  city?: string;
  companyName?: string;
  countryCode: string;
  creationDate?: any;
  firstName?: string;
  fullName?: string;
  jobTitle?: string;
  lastModified?: any;
  lastName: string;
  phone?: string;
  postBox?: string;
  postalCode?: string;
  preferred?: boolean;
  salutation?: string;
  secondName?: string;
  stateCode?: string;
  suffix?: string;
  suite?: string;
  title?: string;
} & { [key: string]: any }

  export type CustomerProductListResult = {
  limit: number;
  data: Array<CustomerProductList>;
  total: number;
} & { [key: string]: any }

  export type CustomerProductListItemPurchase = {
  id: string;
  orderNo: string;
  productListItemId: string;
  purchaserName: string;
  quantity: number;
} & { [key: string]: any }

  export type OptionValue = {
  default?: boolean;
  id: string;
  name?: string;
  price?: number;
} & { [key: string]: any }

  export type Master = {
  masterId: string;
  orderable?: boolean;
  price?: number;
  priceMax?: number;
  prices?: {
} & { [key: string]: any }
;
} & { [key: string]: any }

  export type OrderAddress = {
  address1: string;
  address2?: string;
  city: string;
  companyName?: string;
  countryCode: string;
  firstName: string;
  fullName?: string;
  id?: string;
  jobTitle?: string;
  lastName: string;
  phone?: string;
  postBox?: string;
  postalCode: string;
  salutation?: string;
  secondName?: string;
  stateCode?: string;
  suffix?: string;
  suite?: string;
  title?: string;
} & { [key: string]: any }

  export type PublicProductListResult = {
  limit: number;
  data: Array<PublicProductListInfo>;
  total: number;
} & { [key: string]: any }

  export type BasketsResult = {
  baskets: Array<Basket>;
  total: number;
} & { [key: string]: any }

  export type TrustedSystemAuthRequest = {
  clientId: string;
  login: string;
} & { [key: string]: any }

  export type ResetPasswordRequest = {
  resetToken: string;
  login: string;
  newPassword: string;
} & { [key: string]: any }

  export type PaymentCard = {
  cardType: string;
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
} & { [key: string]: any }

  export type ShippingItem = {
  adjustedTax: number;
  basePrice: number;
  itemId: string;
  itemText: string;
  price: number;
  priceAdjustments: Array<PriceAdjustment>;
  priceAfterItemDiscount: number;
  shipmentId: string;
  tax: number;
  taxBasis: number;
  taxClassId: string;
  taxRate: number;
} & { [key: string]: any }

  export type Discount = {
  amount?: number;
  percentage?: number;
  priceBookId?: string;
  type: string;
} & { [key: string]: any }

  export type ResetPasswordToken = {
  login: string;
  email: string;
  resetToken: string;
  expiresInMinutes: number;
} & { [key: string]: any }

  export type CouponItem = {
  code: string;
  couponItemId?: string;
  statusCode?: string;
  valid?: boolean;
} & { [key: string]: any }

  export type ShippingPromotion = {
  calloutMsg: string;
  promotionId: string;
  promotionName: string;
} & { [key: string]: any }

  export type VariationAttribute = {
  id: string;
  name?: string;
  values?: Array<VariationAttributeValue>;
} & { [key: string]: any }

  export type ProductListShippingAddress = {
  addressId: string;
  city?: string;
  firstName?: string;
  lastName?: string;
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
  quantity: number;
  shipmentId?: string;
  shippingItemId?: string;
  tax?: number;
  taxBasis?: number;
  taxClassId?: string;
  taxRate?: number;
} & { [key: string]: any }

  export type CustomerProductListRegistrant = {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
} & { [key: string]: any }

  export type PublicProductListInfo = {
  description?: string;
  id: string;
  name?: string;
  title: string;
  type: string;
} & { [key: string]: any }

  export type CustomerPaymentCardRequest = {
  cardType: string;
  creditCardToken?: string;
  expirationMonth: number;
  expirationYear: number;
  holder: string;
  issueNumber: string;
  number: string;
  validFromMonth: number;
  validFromYear: number;
} & { [key: string]: any }

  export type RecommendationType = {
  displayValue: string;
  value: number;
} & { [key: string]: any }

  export type OrderPaymentInstrument = {
  amount: number;
  authorizationStatus: Status;
  bankRoutingNumber: string;
  maskedGiftCertificateCode: string;
  paymentBankAccount: PaymentBankAccount;
  paymentCard: PaymentCard;
  paymentInstrumentId: string;
  paymentMethodId: string;
} & { [key: string]: any }

  export type ProductType = {
  bundle: boolean;
  item: boolean;
  master: boolean;
  option: boolean;
  set: boolean;
  variant: boolean;
  variationGroup: boolean;
} & { [key: string]: any }

  export type PaymentBankAccount = {
  driversLicenseLastDigits?: string;
  driversLicenseStateCode?: string;
  holder?: string;
  maskedDriversLicense?: string;
  maskedNumber?: string;
  numberLastDigits?: string;
} & { [key: string]: any }

  export type Recommendation = {
  calloutMsg?: string;
  image?: Image;
  longDescription?: string;
  name?: string;
  recommendationType: RecommendationType;
  recommendedItemId?: string;
  recommendedItemLink?: string;
  shortDescription?: string;
} & { [key: string]: any }

  export type Variant = {
  orderable?: boolean;
  price?: number;
  productId: string;
  variationValues?: {
} & { [key: string]: any }
;
} & { [key: string]: any }

  export type BonusDiscountLineItem = {
  bonusProducts: Array<ProductDetailsLink>;
  couponCode: string;
  id: string;
  maxBonusItems: number;
  promotionId: string;
} & { [key: string]: any }

  export type CustomerPaymentInstrument = {
  bankRoutingNumber?: string;
  creationDate?: any;
  lastModified?: any;
  maskedGiftCertificateCode?: string;
  paymentBankAccount: PaymentBankAccount;
  paymentCard: PaymentCard;
  paymentInstrumentId: string;
  paymentMethodId: string;
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
  shippingStatus: string;
  shippingTotal?: number;
  shippingTotalTax?: number;
  taxTotal?: number;
  trackingNumber?: string;
} & { [key: string]: any }

  export type CustomerInfo = {
  customerId?: string;
  customerName?: string;
  customerNo: string;
  email: string;
} & { [key: string]: any }

  export type VariationGroup = {
  orderable: boolean;
  price: number;
  productId: string;
  variationValues: {
} & { [key: string]: any }
;
} & { [key: string]: any }

  export type SimpleLink = {
  link: string;
} & { [key: string]: any }

  export type PaymentBankAccountRequest = {
  driversLicense: string;
  driversLicenseStateCode: string;
  holder: string;
  number: string;
} & { [key: string]: any }

  export type PriceAdjustment = {
  appliedDiscount: Discount;
  couponCode: string;
  createdBy: string;
  creationDate: any;
  custom: boolean;
  itemText: string;
  lastModified: any;
  manual: boolean;
  price: number;
  priceAdjustmentId: string;
  promotionId: string;
  promotionLink: string;
  reasonCode: string;
} & { [key: string]: any }

  export type PublicProductListItem = {
  id: string;
  priority: number;
  product?: Product;
  type: string;
} & { [key: string]: any }

  export type ProductDetailsLink = {
  productDescription?: string;
  productId: string;
  productName?: string;
  title?: string;
} & { [key: string]: any }

  export type ProductLink = {
  sourceProductId: string;
  sourceProductLink: string;
  targetProductId: string;
  targetProductLink: string;
  type: string;
} & { [key: string]: any }

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

  export type ProductListEvent = {
  city?: string;
  country?: string;
  date?: any;
  state?: string;
  type: string;
} & { [key: string]: any }

  export type PasswordChangeRequest = {
  currentPassword: string;
  password: string;
} & { [key: string]: any }

  export type AuthRequest = {
  type?: string;
} & { [key: string]: any }

  export type Inventory = {
  ats?: number;
  backorderable?: boolean;
  id: string;
  inStockDate?: any;
  orderable?: boolean;
  preorderable?: boolean;
  stockLevel?: number;
} & { [key: string]: any }

  export type CustomerProductList = {
  coRegistrant?: CustomerProductListRegistrant;
  creationDate?: any;
  currentShippingAddressInfo?: CustomerAddressInfo;
  customerProductListItems?: Array<CustomerProductListItem>;
  description?: string;
  event?: ProductListEvent;
  id?: string;
  lastModified?: any;
  name?: string;
  postEventShippingAddressInfo?: CustomerAddressInfo;
  productListShippingAddress?: ProductListShippingAddress;
  public?: boolean;
  registrant?: CustomerProductListRegistrant;
  shippingAddressInfo?: CustomerAddressInfo;
  type?: string;
} & { [key: string]: any }

  export type Basket = {
  adjustedMerchandizeTotalTax: number;
  adjustedShippingTotalTax: number;
  agentBasket: boolean;
  basketId: string;
  billingAddress: OrderAddress;
  bonusDiscountLineItems: Array<BonusDiscountLineItem>;
  channelType: string;
  couponItems: Array<CouponItem>;
  creationDate: any;
  currency: string;
  customerInfo: CustomerInfo;
  giftCertificateItems: Array<GiftCertificateItem>;
  inventoryReservationExpiry: any;
  lastModified: any;
  merchandizeTotalTax: number;
  notes: SimpleLink;
  orderPriceAdjustments: Array<PriceAdjustment>;
  orderTotal: number;
  paymentInstruments: Array<OrderPaymentInstrument>;
  productItems: Array<ProductItem>;
  productSubTotal: number;
  productTotal: number;
  shipments: Array<Shipment>;
  shippingItems: Array<ShippingItem>;
  shippingTotal: number;
  shippingTotalTax: number;
  sourceCode: string;
  taxTotal: number;
  taxation: string;
} & { [key: string]: any }

  export type CustomerPaymentInstrumentRequest = {
  bankRoutingNumber: string;
  giftCertificateCode: string;
  paymentBankAccount?: PaymentBankAccountRequest;
  paymentCard: CustomerPaymentCardRequest;
  paymentMethodId: string;
} & { [key: string]: any }

  export type ImageGroup = {
  images: Array<Image>;
  variationAttributes?: Array<VariationAttribute>;
  viewType: string;
} & { [key: string]: any }

  export type CustomerRegistration = {
  customer: Customer;
  password: string;
} & { [key: string]: any }

  export type Customer = {
  addresses?: Array<CustomerAddress>;
  authType?: string;
  birthday?: any;
  companyName?: string;
  creationDate?: any;
  customerId?: string;
  customerNo?: string;
  email?: string;
  enabled?: boolean;
  fax?: string;
  firstName?: string;
  gender?: number;
  jobTitle?: string;
  lastLoginTime?: any;
  lastModified?: any;
  lastName?: string;
  lastVisitTime?: any;
  login?: string;
  note?: string;
  paymentInstruments?: Array<CustomerPaymentInstrument>;
  phoneBusiness?: string;
  phoneHome?: string;
  phoneMobile?: string;
  preferredLocale?: string;
  previousLoginTime?: any;
  previousVisitTime?: any;
  salutation?: string;
  secondName?: string;
  suffix?: string;
  title?: string;
} & { [key: string]: any }

  export type PublicProductList = {
  coRegistrant?: ProductListRegistrant;
  creationDate?: any;
  description?: string;
  event?: ProductListEvent;
  id: string;
  lastModified?: any;
  name?: string;
  productListItems?: Array<PublicProductListItem>;
  productListShippingAddress?: ProductListShippingAddress;
  public: boolean;
  registrant?: ProductListRegistrant;
  type: string;
} & { [key: string]: any }

  export type Option = {
  description?: string;
  id: string;
  image?: string;
  name?: string;
  values?: Array<OptionValue>;
} & { [key: string]: any }

  export type CustomerOrderResult = {
  limit: number;
  data: Array<Order>;
  offset: number;
  total: number;
} & { [key: string]: any }

  export type CustomerExtProfileRequest = {
  authenticationProviderId: string;
  email?: string;
  externalId: string;
  firstName?: string;
  lastName?: string;
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

  export type CustomerExternalProfile = {
  customerId: string;
  authenticationProviderId: string;
  email?: string;
  externalId: string;
  firstName?: string;
  lastName?: string;
} & { [key: string]: any }

  export type CustomerAddressInfo = {
  addressId: string;
  title: string;
} & { [key: string]: any }

  export type ResetPasswordTokenRequest = {
  login: string;
} & { [key: string]: any }

  export type ProductListLink = {
  description: string;
  link: string;
  name: string;
  public: boolean;
  title: string;
  type: string;
} & { [key: string]: any }

  export type ProductListRegistrant = {
  firstName: string;
  lastName: string;
  role: string;
} & { [key: string]: any }

  export type Order = {
  adjustedMerchandizeTotalTax?: number;
  adjustedShippingTotalTax?: number;
  billingAddress?: OrderAddress;
  bonusDiscountLineItems?: Array<BonusDiscountLineItem>;
  channelType?: string;
  confirmationStatus: string;
  couponItems?: Array<CouponItem>;
  createdBy?: string;
  creationDate?: any;
  currency?: string;
  customerInfo?: CustomerInfo;
  customerName?: string;
  exportStatus: string;
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
  paymentStatus: string;
  productItems?: Array<ProductItem>;
  productSubTotal?: number;
  productTotal?: number;
  shipments?: Array<Shipment>;
  shippingItems?: Array<ShippingItem>;
  shippingStatus: string;
  shippingTotal?: number;
  shippingTotalTax?: number;
  siteId?: string;
  sourceCode?: string;
  status: string;
  taxTotal?: number;
  taxation?: string;
} & { [key: string]: any }

  export type Product = {
  brand?: string;
  bundledProducts?: Array<BundledProduct>;
  currency?: string;
  ean?: string;
  fetchDate?: number;
  id: string;
  imageGroups?: Array<ImageGroup>;
  inventories?: Array<Inventory>;
  inventory?: Inventory;
  longDescription?: string;
  manufacturerName?: string;
  manufacturerSku?: string;
  master?: Master;
  minOrderQuantity?: number;
  name?: string;
  options?: Array<Option>;
  pageDescription?: string;
  pageKeywords?: string;
  pageTitle?: string;
  price?: number;
  priceMax?: number;
  prices?: {
} & { [key: string]: any }
;
  primaryCategoryId?: string;
  productLinks?: Array<ProductLink>;
  productPromotions?: Array<ProductPromotion>;
  recommendations?: Array<Recommendation>;
  setProducts?: Array<Product>;
  shortDescription?: string;
  stepQuantity?: number;
  type?: ProductType;
  unit?: string;
  upc?: string;
  validFrom?: any;
  validTo?: any;
  variants?: Array<Variant>;
  variationAttributes?: Array<VariationAttribute>;
  variationGroups?: Array<VariationGroup>;
  variationValues?: {
} & { [key: string]: any }
;
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

  export type ProductPromotion = {
  calloutMsg: string;
  promotionId: string;
  promotionalPrice: number;
} & { [key: string]: any }

  export type BundledProduct = {
  id: string;
  product: Product;
  quantity: number;
} & { [key: string]: any }

  export type Status = {
  code: string;
  message: string;
  status: number;
} & { [key: string]: any }

  export type CustomerProductListItem = {
  id?: string;
  priority: number;
  product?: Product;
  productId?: string;
  public: boolean;
  purchasedQuantity?: number;
  quantity: number;
  type?: string;
} & { [key: string]: any }

  export type ProductListItemReference = {
  id: string;
  priority?: number;
  productList?: ProductListLink;
  public?: boolean;
  purchasedQuantity?: number;
  quantity?: number;
  type?: string;
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

  export type Error = {
  type: string;
  title?: string;
  detail?: string;
  instance?: string;
} & { [key: string]: any }

  type CustomerAuthenticationFailed = { [key: string]: any }
type NotFound = { [key: string]: any }
type BadRequest = { [key: string]: any }
type CustomerExtProfileNotFound = { [key: string]: any }
type Unauthorized = { [key: string]: any }
type CustomerExtProfileBadRequest = { [key: string]: any }
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
 * All path parameters that are used by at least one ShopperCustomers method.
 */
export type ShopperCustomersPathParameters = {
  organizationId?: string;
  customerId?: string;
  addressName?: string;
  paymentInstrumentId?: string;
  listId?: string;
  itemId?: string;
}
/**
 * All query parameters that are used by at least one ShopperCustomers method.
 */
export type ShopperCustomersQueryParameters = {
  siteId?: string;
  clientId?: string;
  externalId?: string;
  authenticationProviderId?: string;
  crossSites?: boolean;
  from?: string;
  until?: string;
  status?: string;
  offset?: any;
  limit?: number;
  email?: string;
  firstName?: string;
  lastName?: string;
}

/**
 * All parameters that are used by ShopperCustomers.
 */
export type ShopperCustomersParameters = ShopperCustomersPathParameters & BaseUriParameters & ShopperCustomersQueryParameters;

/**
* [Shopper Customers](https://developer.salesforce.com/docs/commerce/commerce-api/references?meta=shopper-customers:Summary)
* ==================================
*
* *Allow customers to manage their own profiles and product lists.*<br />
*
* Simple example:
*
* ```typescript
*   import { ShopperCustomers } from "commerce-sdk-isomorphic";
*
*   const clientConfig = {
*     parameters: {
*       clientId: "XXXXXX",
*       organizationId: "XXXX",
*       shortCode: "XXX",
*       siteId: "XX"
*     }
*   };
*   const shopperCustomersClient = new ShopperCustomers(clientConfig);
* ```
*
* <span style="font-size:.7em; display:block; text-align: right">
* API Version: 0.0.28<br />
* Last Updated: <br />  
* </span>

* 

*/
export class ShopperCustomers<ConfigParameters extends ShopperCustomersParameters & Record<string, unknown>> {
  // baseUri is not required on ClientConfig, but we know that we provide one in the class constructor
  public clientConfig: ClientConfig<ConfigParameters> & { baseUri: string };

  static readonly defaultBaseUri = "https://{shortCode}.api.commercecloud.salesforce.com/customer/shopper-customers/{version}";

  constructor(config: ClientConfigInit<ConfigParameters>) {
    const cfg = {...config}
    if (!cfg.baseUri) cfg.baseUri = new.target.defaultBaseUri;
    // Type assertion is safe because ^^^
    this.clientConfig = new ClientConfig(cfg) as ClientConfig<ConfigParameters> & { baseUri: string };
  }

      /**
      * Registers a new customer. The mandatory data are the credentials, profile last name, and email. This requires a JSON Web Token (JWT) which needs to be obtained using the POST /customers/auth API with type \"guest\".
      *
      * If you would like to get a raw Response object use the other registerCustomer function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Customer.
      * 
      */
      registerCustomer(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerRegistration
        }>
      ): Promise<Customer>;
  
      /**
      * Registers a new customer. The mandatory data are the credentials, profile last name, and email. This requires a JSON Web Token (JWT) which needs to be obtained using the POST /customers/auth API with type \"guest\".
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Customer otherwise.
      * 
      */
      registerCustomer<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerRegistration
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Customer>;
  
      /**
      * Registers a new customer. The mandatory data are the credentials, profile last name, and email. This requires a JSON Web Token (JWT) which needs to be obtained using the POST /customers/auth API with type \"guest\".
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Customer otherwise.
      * 
      */
      async registerCustomer(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerRegistration
        }>,
        rawResponse?: boolean
      ): Promise<Response | Customer> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers",
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
      * Invalidates the JSON Web Token (JWT) provided in the header.
      *
      * If you would like to get a raw Response object use the other invalidateCustomerAuth function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type void.
      * 
      */
      invalidateCustomerAuth(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<void>;
  
      /**
      * Invalidates the JSON Web Token (JWT) provided in the header.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      invalidateCustomerAuth<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : void>;
  
      /**
      * Invalidates the JSON Web Token (JWT) provided in the header.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      async invalidateCustomerAuth(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | void> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/actions/logout",
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
      * Obtains a new JSON Web Token (JWT)for a guest or registered
  customer. Tokens are returned as an HTTP Authorization:Bearer response
  header entry. These kinds of request are supported, as specified by the
  type:
  
  Type guest - creates a guest (non-authenticated) customer
  and returns a token for the customer.
  Request Body for guest : \{\"type\": \"guest\"\}
  Type credentials - authenticates credentials passed in the
  HTTP Authorization:Basic request header, returning a token for a
  successfully authenticated customer, otherwise it throws an
  AuthenticationFailedException.
  Request Body for guest : \{\"type\": \"credentials\"\}
  Type refresh - examines the token passed in the HTTP
  Authorization:Bearer request header and when valid returns a new token
  with an updated expiry time.
  Request Body for guest : \{\"type\": \"refresh\"\}
  
  For a request of type credentials:
  
  Updates profile attributes for the customer (for example,
  \"last-visited\").
  Handles the maximum number of failed login attempts.
  
  About JWT The token contains 3 sections:
  
  The header section (specifies token type and algorithm used),
  the payload section (contains customer information, client ID,
  issue, and expiration time),
  finally the signature section records the token signature.
  
  A token is created and returned to the client whenever a registered
  customer logs in (type \"credentials\") or a guest customer requests it (type
  \"guest\"). The token is returned in the response header as 
  Authorization: Bearer --token--
  
  The client has to include the token in the request header as 
  Authorization: Bearer --token-- 
  in any follow-up request. The server declines any follow-up requests
  without a token or which cannot be verified based on the token signature
  or expiration time. A token nearing its expiration time should be
  exchanged for a new one (type \"refresh\").
  
  See \"API Usage \> JWT\" for more details on using JWT as an authentication
  mechanism.
      *
      * If you would like to get a raw Response object use the other authorizeCustomer function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param clientId - Client ID for application identification
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Customer.
      * 
      */
      authorizeCustomer(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            clientId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: AuthRequest
        }>
      ): Promise<Customer>;
  
      /**
      * Obtains a new JSON Web Token (JWT)for a guest or registered
  customer. Tokens are returned as an HTTP Authorization:Bearer response
  header entry. These kinds of request are supported, as specified by the
  type:
  
  Type guest - creates a guest (non-authenticated) customer
  and returns a token for the customer.
  Request Body for guest : \{\"type\": \"guest\"\}
  Type credentials - authenticates credentials passed in the
  HTTP Authorization:Basic request header, returning a token for a
  successfully authenticated customer, otherwise it throws an
  AuthenticationFailedException.
  Request Body for guest : \{\"type\": \"credentials\"\}
  Type refresh - examines the token passed in the HTTP
  Authorization:Bearer request header and when valid returns a new token
  with an updated expiry time.
  Request Body for guest : \{\"type\": \"refresh\"\}
  
  For a request of type credentials:
  
  Updates profile attributes for the customer (for example,
  \"last-visited\").
  Handles the maximum number of failed login attempts.
  
  About JWT The token contains 3 sections:
  
  The header section (specifies token type and algorithm used),
  the payload section (contains customer information, client ID,
  issue, and expiration time),
  finally the signature section records the token signature.
  
  A token is created and returned to the client whenever a registered
  customer logs in (type \"credentials\") or a guest customer requests it (type
  \"guest\"). The token is returned in the response header as 
  Authorization: Bearer --token--
  
  The client has to include the token in the request header as 
  Authorization: Bearer --token-- 
  in any follow-up request. The server declines any follow-up requests
  without a token or which cannot be verified based on the token signature
  or expiration time. A token nearing its expiration time should be
  exchanged for a new one (type \"refresh\").
  
  See \"API Usage \> JWT\" for more details on using JWT as an authentication
  mechanism.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param clientId - Client ID for application identification
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Customer otherwise.
      * 
      */
      authorizeCustomer<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            clientId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: AuthRequest
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Customer>;
  
      /**
      * Obtains a new JSON Web Token (JWT)for a guest or registered
  customer. Tokens are returned as an HTTP Authorization:Bearer response
  header entry. These kinds of request are supported, as specified by the
  type:
  
  Type guest - creates a guest (non-authenticated) customer
  and returns a token for the customer.
  Request Body for guest : \{\"type\": \"guest\"\}
  Type credentials - authenticates credentials passed in the
  HTTP Authorization:Basic request header, returning a token for a
  successfully authenticated customer, otherwise it throws an
  AuthenticationFailedException.
  Request Body for guest : \{\"type\": \"credentials\"\}
  Type refresh - examines the token passed in the HTTP
  Authorization:Bearer request header and when valid returns a new token
  with an updated expiry time.
  Request Body for guest : \{\"type\": \"refresh\"\}
  
  For a request of type credentials:
  
  Updates profile attributes for the customer (for example,
  \"last-visited\").
  Handles the maximum number of failed login attempts.
  
  About JWT The token contains 3 sections:
  
  The header section (specifies token type and algorithm used),
  the payload section (contains customer information, client ID,
  issue, and expiration time),
  finally the signature section records the token signature.
  
  A token is created and returned to the client whenever a registered
  customer logs in (type \"credentials\") or a guest customer requests it (type
  \"guest\"). The token is returned in the response header as 
  Authorization: Bearer --token--
  
  The client has to include the token in the request header as 
  Authorization: Bearer --token-- 
  in any follow-up request. The server declines any follow-up requests
  without a token or which cannot be verified based on the token signature
  or expiration time. A token nearing its expiration time should be
  exchanged for a new one (type \"refresh\").
  
  See \"API Usage \> JWT\" for more details on using JWT as an authentication
  mechanism.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param clientId - Client ID for application identification
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Customer otherwise.
      * 
      */
      async authorizeCustomer(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            clientId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: AuthRequest
        }>,
        rawResponse?: boolean
      ): Promise<Response | Customer> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["clientId"] !== undefined) {
          queryParams["clientId"] = optionParams["clientId"];
        } else if (configParams["clientId"] !== undefined) {
          queryParams["clientId"] = configParams["clientId"];
        }
        else {
          throw new Error('Missing required query parameter: clientId');
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
          "/organizations/{organizationId}/customers/actions/login",
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
      * Obtain the JSON Web Token (JWT) for registered customers whose credentials are stored using a third party system. Accepts loginId and clientId, returns a customer object in the response body and the JWT generated against the clientId in the response header.
      *
      * If you would like to get a raw Response object use the other authorizeTrustedSystem function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Customer.
      * 
      */
      authorizeTrustedSystem(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: TrustedSystemAuthRequest
        }>
      ): Promise<Customer>;
  
      /**
      * Obtain the JSON Web Token (JWT) for registered customers whose credentials are stored using a third party system. Accepts loginId and clientId, returns a customer object in the response body and the JWT generated against the clientId in the response header.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Customer otherwise.
      * 
      */
      authorizeTrustedSystem<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: TrustedSystemAuthRequest
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Customer>;
  
      /**
      * Obtain the JSON Web Token (JWT) for registered customers whose credentials are stored using a third party system. Accepts loginId and clientId, returns a customer object in the response body and the JWT generated against the clientId in the response header.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Customer otherwise.
      * 
      */
      async authorizeTrustedSystem(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: TrustedSystemAuthRequest
        }>,
        rawResponse?: boolean
      ): Promise<Response | Customer> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/trusted-system/actions/login",
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
      * Reset customer password.
      *
      * If you would like to get a raw Response object use the other resetPassword function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type void.
      * 
      */
      resetPassword(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: ResetPasswordRequest
        }>
      ): Promise<void>;
  
      /**
      * Reset customer password.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      resetPassword<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: ResetPasswordRequest
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : void>;
  
      /**
      * Reset customer password.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      async resetPassword(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: ResetPasswordRequest
        }>,
        rawResponse?: boolean
      ): Promise<Response | void> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/password/actions/reset",
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
      }
      /**
      * Get reset password token.
      *
      * If you would like to get a raw Response object use the other getResetPasswordToken function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type ResetPasswordToken.
      * 
      */
      getResetPasswordToken(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: ResetPasswordTokenRequest
        }>
      ): Promise<ResetPasswordToken>;
  
      /**
      * Get reset password token.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type ResetPasswordToken otherwise.
      * 
      */
      getResetPasswordToken<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: ResetPasswordTokenRequest
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : ResetPasswordToken>;
  
      /**
      * Get reset password token.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type ResetPasswordToken otherwise.
      * 
      */
      async getResetPasswordToken(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: ResetPasswordTokenRequest
        }>,
        rawResponse?: boolean
      ): Promise<Response | ResetPasswordToken> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/password/actions/create-reset-token",
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
      * Registers a new external profile for a customer. This endpoint is in closed beta, available to select few customers. Please get in touch with your Account Team if you'd like to participate in the beta program
      *
      * If you would like to get a raw Response object use the other registerExternalProfile function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type CustomerExternalProfile.
      * 
      */
      registerExternalProfile(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerExtProfileRequest
        }>
      ): Promise<CustomerExternalProfile>;
  
      /**
      * Registers a new external profile for a customer. This endpoint is in closed beta, available to select few customers. Please get in touch with your Account Team if you'd like to participate in the beta program
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerExternalProfile otherwise.
      * 
      */
      registerExternalProfile<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerExtProfileRequest
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : CustomerExternalProfile>;
  
      /**
      * Registers a new external profile for a customer. This endpoint is in closed beta, available to select few customers. Please get in touch with your Account Team if you'd like to participate in the beta program
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerExternalProfile otherwise.
      * 
      */
      async registerExternalProfile(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerExtProfileRequest
        }>,
        rawResponse?: boolean
      ): Promise<Response | CustomerExternalProfile> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/external-profile",
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
      * Gets the new external profile for a customer.This endpoint is in closed beta, available to select few customers. Please get in touch with your Account Team if you'd like to participate in the beta program
      *
      * If you would like to get a raw Response object use the other getExternalProfile function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param externalId - The External ID of the customer.
      * @param authenticationProviderId - The authentication Provider Id.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type CustomerExternalProfile.
      * 
      */
      getExternalProfile(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            externalId: string
            authenticationProviderId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<CustomerExternalProfile>;
  
      /**
      * Gets the new external profile for a customer.This endpoint is in closed beta, available to select few customers. Please get in touch with your Account Team if you'd like to participate in the beta program
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param externalId - The External ID of the customer.
      * @param authenticationProviderId - The authentication Provider Id.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerExternalProfile otherwise.
      * 
      */
      getExternalProfile<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            externalId: string
            authenticationProviderId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : CustomerExternalProfile>;
  
      /**
      * Gets the new external profile for a customer.This endpoint is in closed beta, available to select few customers. Please get in touch with your Account Team if you'd like to participate in the beta program
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param externalId - The External ID of the customer.
      * @param authenticationProviderId - The authentication Provider Id.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerExternalProfile otherwise.
      * 
      */
      async getExternalProfile(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            externalId: string
            authenticationProviderId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | CustomerExternalProfile> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["externalId"] !== undefined) {
          queryParams["externalId"] = optionParams["externalId"];
        } else if (configParams["externalId"] !== undefined) {
          queryParams["externalId"] = configParams["externalId"];
        }
        else {
          throw new Error('Missing required query parameter: externalId');
        }
        if (optionParams["authenticationProviderId"] !== undefined) {
          queryParams["authenticationProviderId"] = optionParams["authenticationProviderId"];
        } else if (configParams["authenticationProviderId"] !== undefined) {
          queryParams["authenticationProviderId"] = configParams["authenticationProviderId"];
        }
        else {
          throw new Error('Missing required query parameter: authenticationProviderId');
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
          "/organizations/{organizationId}/customers/external-profile",
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
      * Gets a customer with all existing addresses and payment instruments associated with the requested customer.
      *
      * If you would like to get a raw Response object use the other getCustomer function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type Customer.
      * 
      */
      getCustomer(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<Customer>;
  
      /**
      * Gets a customer with all existing addresses and payment instruments associated with the requested customer.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Customer otherwise.
      * 
      */
      getCustomer<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Customer>;
  
      /**
      * Gets a customer with all existing addresses and payment instruments associated with the requested customer.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Customer otherwise.
      * 
      */
      async getCustomer(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | Customer> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["customerId"] !== undefined) {
          pathParams["customerId"] = optionParams["customerId"];
        } else if (configParams["customerId"] !== undefined) {
          pathParams["customerId"] = configParams["customerId"];
        }
        else {
          throw new Error('Missing required path parameter: customerId');
        }
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/{customerId}",
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
      * Updates a customer.
      *
      * If you would like to get a raw Response object use the other updateCustomer function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type Customer.
      * 
      */
      updateCustomer(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Customer
        }>
      ): Promise<Customer>;
  
      /**
      * Updates a customer.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type Customer otherwise.
      * 
      */
      updateCustomer<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Customer
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : Customer>;
  
      /**
      * Updates a customer.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type Customer otherwise.
      * 
      */
      async updateCustomer(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: Customer
        }>,
        rawResponse?: boolean
      ): Promise<Response | Customer> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["customerId"] !== undefined) {
          pathParams["customerId"] = optionParams["customerId"];
        } else if (configParams["customerId"] !== undefined) {
          pathParams["customerId"] = configParams["customerId"];
        }
        else {
          throw new Error('Missing required path parameter: customerId');
        }
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/{customerId}",
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
      * Creates a new address with the given name for the given customer.
      *
      * If you would like to get a raw Response object use the other createCustomerAddress function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type CustomerAddress.
      * 
      */
      createCustomerAddress(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerAddress
        }>
      ): Promise<CustomerAddress>;
  
      /**
      * Creates a new address with the given name for the given customer.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerAddress otherwise.
      * 
      */
      createCustomerAddress<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerAddress
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : CustomerAddress>;
  
      /**
      * Creates a new address with the given name for the given customer.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerAddress otherwise.
      * 
      */
      async createCustomerAddress(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerAddress
        }>,
        rawResponse?: boolean
      ): Promise<Response | CustomerAddress> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["customerId"] !== undefined) {
          pathParams["customerId"] = optionParams["customerId"];
        } else if (configParams["customerId"] !== undefined) {
          pathParams["customerId"] = configParams["customerId"];
        }
        else {
          throw new Error('Missing required path parameter: customerId');
        }
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/{customerId}/addresses",
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
      * Retrieves a customer's address by address name.
      *
      * If you would like to get a raw Response object use the other getCustomerAddress function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param addressName - The name of the address to update.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type CustomerAddress.
      * 
      */
      getCustomerAddress(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            addressName: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<CustomerAddress>;
  
      /**
      * Retrieves a customer's address by address name.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param addressName - The name of the address to update.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerAddress otherwise.
      * 
      */
      getCustomerAddress<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            addressName: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : CustomerAddress>;
  
      /**
      * Retrieves a customer's address by address name.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param addressName - The name of the address to update.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerAddress otherwise.
      * 
      */
      async getCustomerAddress(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            addressName: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | CustomerAddress> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["customerId"] !== undefined) {
          pathParams["customerId"] = optionParams["customerId"];
        } else if (configParams["customerId"] !== undefined) {
          pathParams["customerId"] = configParams["customerId"];
        }
        else {
          throw new Error('Missing required path parameter: customerId');
        }
        if (optionParams["addressName"] !== undefined) {
          pathParams["addressName"] = optionParams["addressName"];
        } else if (configParams["addressName"] !== undefined) {
          pathParams["addressName"] = configParams["addressName"];
        }
        else {
          throw new Error('Missing required path parameter: addressName');
        }
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/{customerId}/addresses/{addressName}",
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
      * Deletes a customer's address by address name.
      *
      * If you would like to get a raw Response object use the other removeCustomerAddress function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param addressName - The name of the address to update.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type void.
      * 
      */
      removeCustomerAddress(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            addressName: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<void>;
  
      /**
      * Deletes a customer's address by address name.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param addressName - The name of the address to update.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      removeCustomerAddress<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            addressName: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : void>;
  
      /**
      * Deletes a customer's address by address name.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param addressName - The name of the address to update.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      async removeCustomerAddress(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            addressName: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | void> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["customerId"] !== undefined) {
          pathParams["customerId"] = optionParams["customerId"];
        } else if (configParams["customerId"] !== undefined) {
          pathParams["customerId"] = configParams["customerId"];
        }
        else {
          throw new Error('Missing required path parameter: customerId');
        }
        if (optionParams["addressName"] !== undefined) {
          pathParams["addressName"] = optionParams["addressName"];
        } else if (configParams["addressName"] !== undefined) {
          pathParams["addressName"] = configParams["addressName"];
        }
        else {
          throw new Error('Missing required path parameter: addressName');
        }
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/{customerId}/addresses/{addressName}",
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
      * Updates a customer's address by address name.
      *
      * If you would like to get a raw Response object use the other updateCustomerAddress function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param addressName - The name of the address to update.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type CustomerAddress.
      * 
      */
      updateCustomerAddress(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            addressName: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerAddress
        }>
      ): Promise<CustomerAddress>;
  
      /**
      * Updates a customer's address by address name.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param addressName - The name of the address to update.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerAddress otherwise.
      * 
      */
      updateCustomerAddress<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            addressName: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerAddress
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : CustomerAddress>;
  
      /**
      * Updates a customer's address by address name.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param addressName - The name of the address to update.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerAddress otherwise.
      * 
      */
      async updateCustomerAddress(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            addressName: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerAddress
        }>,
        rawResponse?: boolean
      ): Promise<Response | CustomerAddress> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["customerId"] !== undefined) {
          pathParams["customerId"] = optionParams["customerId"];
        } else if (configParams["customerId"] !== undefined) {
          pathParams["customerId"] = configParams["customerId"];
        }
        else {
          throw new Error('Missing required path parameter: customerId');
        }
        if (optionParams["addressName"] !== undefined) {
          pathParams["addressName"] = optionParams["addressName"];
        } else if (configParams["addressName"] !== undefined) {
          pathParams["addressName"] = configParams["addressName"];
        }
        else {
          throw new Error('Missing required path parameter: addressName');
        }
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/{customerId}/addresses/{addressName}",
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
      * Gets the baskets of a customer.
      *
      * If you would like to get a raw Response object use the other getCustomerBaskets function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type BasketsResult.
      * 
      */
      getCustomerBaskets(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<BasketsResult>;
  
      /**
      * Gets the baskets of a customer.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type BasketsResult otherwise.
      * 
      */
      getCustomerBaskets<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : BasketsResult>;
  
      /**
      * Gets the baskets of a customer.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type BasketsResult otherwise.
      * 
      */
      async getCustomerBaskets(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | BasketsResult> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["customerId"] !== undefined) {
          pathParams["customerId"] = optionParams["customerId"];
        } else if (configParams["customerId"] !== undefined) {
          pathParams["customerId"] = configParams["customerId"];
        }
        else {
          throw new Error('Missing required path parameter: customerId');
        }
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/{customerId}/baskets",
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
      * Returns a pageable list of all customer's orders. The default page size is 10.
      *
      * If you would like to get a raw Response object use the other getCustomerOrders function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param crossSites - 
      * @param from - 
      * @param until - 
      * @param status - 
      * @param siteId - 
      * @param offset - 
      * @param limit - Maximum records to retrieve per request, not to exceed 50. Defaults to 10.
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type CustomerOrderResult.
      * 
      */
      getCustomerOrders(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            crossSites?: boolean
            from?: string
            until?: string
            status?: string
            siteId: string
            offset?: any
            limit?: number
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<CustomerOrderResult>;
  
      /**
      * Returns a pageable list of all customer's orders. The default page size is 10.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param crossSites - 
      * @param from - 
      * @param until - 
      * @param status - 
      * @param siteId - 
      * @param offset - 
      * @param limit - Maximum records to retrieve per request, not to exceed 50. Defaults to 10.
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerOrderResult otherwise.
      * 
      */
      getCustomerOrders<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            crossSites?: boolean
            from?: string
            until?: string
            status?: string
            siteId: string
            offset?: any
            limit?: number
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : CustomerOrderResult>;
  
      /**
      * Returns a pageable list of all customer's orders. The default page size is 10.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param crossSites - 
      * @param from - 
      * @param until - 
      * @param status - 
      * @param siteId - 
      * @param offset - 
      * @param limit - Maximum records to retrieve per request, not to exceed 50. Defaults to 10.
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerOrderResult otherwise.
      * 
      */
      async getCustomerOrders(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            crossSites?: boolean
            from?: string
            until?: string
            status?: string
            siteId: string
            offset?: any
            limit?: number
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | CustomerOrderResult> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["customerId"] !== undefined) {
          pathParams["customerId"] = optionParams["customerId"];
        } else if (configParams["customerId"] !== undefined) {
          pathParams["customerId"] = configParams["customerId"];
        }
        else {
          throw new Error('Missing required path parameter: customerId');
        }
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["crossSites"] !== undefined) {
          queryParams["crossSites"] = optionParams["crossSites"];
        } else if (configParams["crossSites"] !== undefined) {
          queryParams["crossSites"] = configParams["crossSites"];
        }
        if (optionParams["from"] !== undefined) {
          queryParams["from"] = optionParams["from"];
        } else if (configParams["from"] !== undefined) {
          queryParams["from"] = configParams["from"];
        }
        if (optionParams["until"] !== undefined) {
          queryParams["until"] = optionParams["until"];
        } else if (configParams["until"] !== undefined) {
          queryParams["until"] = configParams["until"];
        }
        if (optionParams["status"] !== undefined) {
          queryParams["status"] = optionParams["status"];
        } else if (configParams["status"] !== undefined) {
          queryParams["status"] = configParams["status"];
        }
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
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
          "/organizations/{organizationId}/customers/{customerId}/orders",
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
      * Updates the customer's password.
      *
      * If you would like to get a raw Response object use the other updateCustomerPassword function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type void.
      * 
      */
      updateCustomerPassword(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: PasswordChangeRequest
        }>
      ): Promise<void>;
  
      /**
      * Updates the customer's password.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      updateCustomerPassword<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: PasswordChangeRequest
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : void>;
  
      /**
      * Updates the customer's password.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      async updateCustomerPassword(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: PasswordChangeRequest
        }>,
        rawResponse?: boolean
      ): Promise<Response | void> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["customerId"] !== undefined) {
          pathParams["customerId"] = optionParams["customerId"];
        } else if (configParams["customerId"] !== undefined) {
          pathParams["customerId"] = configParams["customerId"];
        }
        else {
          throw new Error('Missing required path parameter: customerId');
        }
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/{customerId}/password",
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
      * Adds a payment instrument to the customer information.
      *
      * If you would like to get a raw Response object use the other createCustomerPaymentInstrument function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type CustomerPaymentInstrument.
      * 
      */
      createCustomerPaymentInstrument(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerPaymentInstrumentRequest
        }>
      ): Promise<CustomerPaymentInstrument>;
  
      /**
      * Adds a payment instrument to the customer information.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerPaymentInstrument otherwise.
      * 
      */
      createCustomerPaymentInstrument<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerPaymentInstrumentRequest
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : CustomerPaymentInstrument>;
  
      /**
      * Adds a payment instrument to the customer information.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerPaymentInstrument otherwise.
      * 
      */
      async createCustomerPaymentInstrument(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerPaymentInstrumentRequest
        }>,
        rawResponse?: boolean
      ): Promise<Response | CustomerPaymentInstrument> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["customerId"] !== undefined) {
          pathParams["customerId"] = optionParams["customerId"];
        } else if (configParams["customerId"] !== undefined) {
          pathParams["customerId"] = configParams["customerId"];
        }
        else {
          throw new Error('Missing required path parameter: customerId');
        }
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/{customerId}/payment-instruments",
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
      * Deletes a customer's payment instrument.
      *
      * If you would like to get a raw Response object use the other deleteCustomerPaymentInstrument function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param paymentInstrumentId - The ID of the payment instrument to be retrievedCustomer.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type void.
      * 
      */
      deleteCustomerPaymentInstrument(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            paymentInstrumentId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<void>;
  
      /**
      * Deletes a customer's payment instrument.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param paymentInstrumentId - The ID of the payment instrument to be retrievedCustomer.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      deleteCustomerPaymentInstrument<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            paymentInstrumentId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : void>;
  
      /**
      * Deletes a customer's payment instrument.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param paymentInstrumentId - The ID of the payment instrument to be retrievedCustomer.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      async deleteCustomerPaymentInstrument(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            paymentInstrumentId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | void> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["customerId"] !== undefined) {
          pathParams["customerId"] = optionParams["customerId"];
        } else if (configParams["customerId"] !== undefined) {
          pathParams["customerId"] = configParams["customerId"];
        }
        else {
          throw new Error('Missing required path parameter: customerId');
        }
        if (optionParams["paymentInstrumentId"] !== undefined) {
          pathParams["paymentInstrumentId"] = optionParams["paymentInstrumentId"];
        } else if (configParams["paymentInstrumentId"] !== undefined) {
          pathParams["paymentInstrumentId"] = configParams["paymentInstrumentId"];
        }
        else {
          throw new Error('Missing required path parameter: paymentInstrumentId');
        }
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/{customerId}/payment-instruments/{paymentInstrumentId}",
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
      * Retrieves a customer's payment instrument by its ID.
      *
      * If you would like to get a raw Response object use the other getCustomerPaymentInstrument function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param paymentInstrumentId - The ID of the payment instrument to be retrievedCustomer.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type CustomerPaymentInstrument.
      * 
      */
      getCustomerPaymentInstrument(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            paymentInstrumentId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<CustomerPaymentInstrument>;
  
      /**
      * Retrieves a customer's payment instrument by its ID.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param paymentInstrumentId - The ID of the payment instrument to be retrievedCustomer.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerPaymentInstrument otherwise.
      * 
      */
      getCustomerPaymentInstrument<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            paymentInstrumentId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : CustomerPaymentInstrument>;
  
      /**
      * Retrieves a customer's payment instrument by its ID.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param paymentInstrumentId - The ID of the payment instrument to be retrievedCustomer.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerPaymentInstrument otherwise.
      * 
      */
      async getCustomerPaymentInstrument(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            paymentInstrumentId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | CustomerPaymentInstrument> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["customerId"] !== undefined) {
          pathParams["customerId"] = optionParams["customerId"];
        } else if (configParams["customerId"] !== undefined) {
          pathParams["customerId"] = configParams["customerId"];
        }
        else {
          throw new Error('Missing required path parameter: customerId');
        }
        if (optionParams["paymentInstrumentId"] !== undefined) {
          pathParams["paymentInstrumentId"] = optionParams["paymentInstrumentId"];
        } else if (configParams["paymentInstrumentId"] !== undefined) {
          pathParams["paymentInstrumentId"] = configParams["paymentInstrumentId"];
        }
        else {
          throw new Error('Missing required path parameter: paymentInstrumentId');
        }
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/{customerId}/payment-instruments/{paymentInstrumentId}",
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
      * Returns all customer product lists.
      *
      * If you would like to get a raw Response object use the other getCustomerProductLists function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type CustomerProductListResult.
      * 
      */
      getCustomerProductLists(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<CustomerProductListResult>;
  
      /**
      * Returns all customer product lists.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerProductListResult otherwise.
      * 
      */
      getCustomerProductLists<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : CustomerProductListResult>;
  
      /**
      * Returns all customer product lists.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerProductListResult otherwise.
      * 
      */
      async getCustomerProductLists(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | CustomerProductListResult> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["customerId"] !== undefined) {
          pathParams["customerId"] = optionParams["customerId"];
        } else if (configParams["customerId"] !== undefined) {
          pathParams["customerId"] = configParams["customerId"];
        }
        else {
          throw new Error('Missing required path parameter: customerId');
        }
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/{customerId}/product-lists",
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
      * Creates a customer product list.
      *
      * If you would like to get a raw Response object use the other createCustomerProductList function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type CustomerProductList.
      * 
      */
      createCustomerProductList(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerProductList
        }>
      ): Promise<CustomerProductList>;
  
      /**
      * Creates a customer product list.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerProductList otherwise.
      * 
      */
      createCustomerProductList<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerProductList
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : CustomerProductList>;
  
      /**
      * Creates a customer product list.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerProductList otherwise.
      * 
      */
      async createCustomerProductList(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerProductList
        }>,
        rawResponse?: boolean
      ): Promise<Response | CustomerProductList> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["customerId"] !== undefined) {
          pathParams["customerId"] = optionParams["customerId"];
        } else if (configParams["customerId"] !== undefined) {
          pathParams["customerId"] = configParams["customerId"];
        }
        else {
          throw new Error('Missing required path parameter: customerId');
        }
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/{customerId}/product-lists",
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
      * Deletes a customer product list.
      *
      * If you would like to get a raw Response object use the other deleteCustomerProductList function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param listId - The product list ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type void.
      * 
      */
      deleteCustomerProductList(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            listId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<void>;
  
      /**
      * Deletes a customer product list.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param listId - The product list ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      deleteCustomerProductList<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            listId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : void>;
  
      /**
      * Deletes a customer product list.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param listId - The product list ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      async deleteCustomerProductList(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            listId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | void> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["customerId"] !== undefined) {
          pathParams["customerId"] = optionParams["customerId"];
        } else if (configParams["customerId"] !== undefined) {
          pathParams["customerId"] = configParams["customerId"];
        }
        else {
          throw new Error('Missing required path parameter: customerId');
        }
        if (optionParams["listId"] !== undefined) {
          pathParams["listId"] = optionParams["listId"];
        } else if (configParams["listId"] !== undefined) {
          pathParams["listId"] = configParams["listId"];
        }
        else {
          throw new Error('Missing required path parameter: listId');
        }
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/{customerId}/product-lists/{listId}",
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
      * Returns a customer product list of the given customer and the items in the list.
      *
      * If you would like to get a raw Response object use the other getCustomerProductList function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param listId - The product list ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type CustomerProductList.
      * 
      */
      getCustomerProductList(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            listId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<CustomerProductList>;
  
      /**
      * Returns a customer product list of the given customer and the items in the list.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param listId - The product list ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerProductList otherwise.
      * 
      */
      getCustomerProductList<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            listId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : CustomerProductList>;
  
      /**
      * Returns a customer product list of the given customer and the items in the list.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param listId - The product list ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerProductList otherwise.
      * 
      */
      async getCustomerProductList(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            listId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | CustomerProductList> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["customerId"] !== undefined) {
          pathParams["customerId"] = optionParams["customerId"];
        } else if (configParams["customerId"] !== undefined) {
          pathParams["customerId"] = configParams["customerId"];
        }
        else {
          throw new Error('Missing required path parameter: customerId');
        }
        if (optionParams["listId"] !== undefined) {
          pathParams["listId"] = optionParams["listId"];
        } else if (configParams["listId"] !== undefined) {
          pathParams["listId"] = configParams["listId"];
        }
        else {
          throw new Error('Missing required path parameter: listId');
        }
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/{customerId}/product-lists/{listId}",
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
      * Changes a product list. Changeable properties are the name, description, and if the list is public.
      *
      * If you would like to get a raw Response object use the other updateCustomerProductList function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param listId - The product list ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type CustomerProductList.
      * 
      */
      updateCustomerProductList(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            listId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerProductList
        }>
      ): Promise<CustomerProductList>;
  
      /**
      * Changes a product list. Changeable properties are the name, description, and if the list is public.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param listId - The product list ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerProductList otherwise.
      * 
      */
      updateCustomerProductList<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            listId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerProductList
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : CustomerProductList>;
  
      /**
      * Changes a product list. Changeable properties are the name, description, and if the list is public.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param listId - The product list ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerProductList otherwise.
      * 
      */
      async updateCustomerProductList(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            listId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerProductList
        }>,
        rawResponse?: boolean
      ): Promise<Response | CustomerProductList> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["customerId"] !== undefined) {
          pathParams["customerId"] = optionParams["customerId"];
        } else if (configParams["customerId"] !== undefined) {
          pathParams["customerId"] = configParams["customerId"];
        }
        else {
          throw new Error('Missing required path parameter: customerId');
        }
        if (optionParams["listId"] !== undefined) {
          pathParams["listId"] = optionParams["listId"];
        } else if (configParams["listId"] !== undefined) {
          pathParams["listId"] = configParams["listId"];
        }
        else {
          throw new Error('Missing required path parameter: listId');
        }
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/{customerId}/product-lists/{listId}",
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
      * Adds an item to the customer's product list. Considered values from the request body are:
  
  type: A valid type, mandatory. This is the type of the item to be added to the customer's product.
  list.
  priority: This is the priority of the item to be added to the customer's product list.
  public: This is the flag whether the item to be added to the customer's product list is public.
  product_id: A valid product ID, used for product item type only. This is the ID (SKU)
  of the product related to the item to be added to the customer's product list. It is mandatory for
  product item type, and it must be a valid product id, otherwise
  ProductListProductIdMissingException or ProductListProductNotFoundException
  will be thrown.
  quantity: Used for product item type only. This is the quantity of the item to be
  added to the customer's product list.
  custom properties in the form c_\<CUSTOM_NAME\>: The custom property must correspond to a custom
  attribute (\<CUSTOM_NAME\>) defined for ProductListItem. The value of this property must be valid for the
  type of custom attribute defined for ProductListItem.
      *
      * If you would like to get a raw Response object use the other createCustomerProductListItem function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param listId - The product list ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type CustomerProductListItem.
      * 
      */
      createCustomerProductListItem(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            listId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerProductListItem
        }>
      ): Promise<CustomerProductListItem>;
  
      /**
      * Adds an item to the customer's product list. Considered values from the request body are:
  
  type: A valid type, mandatory. This is the type of the item to be added to the customer's product.
  list.
  priority: This is the priority of the item to be added to the customer's product list.
  public: This is the flag whether the item to be added to the customer's product list is public.
  product_id: A valid product ID, used for product item type only. This is the ID (SKU)
  of the product related to the item to be added to the customer's product list. It is mandatory for
  product item type, and it must be a valid product id, otherwise
  ProductListProductIdMissingException or ProductListProductNotFoundException
  will be thrown.
  quantity: Used for product item type only. This is the quantity of the item to be
  added to the customer's product list.
  custom properties in the form c_\<CUSTOM_NAME\>: The custom property must correspond to a custom
  attribute (\<CUSTOM_NAME\>) defined for ProductListItem. The value of this property must be valid for the
  type of custom attribute defined for ProductListItem.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param listId - The product list ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerProductListItem otherwise.
      * 
      */
      createCustomerProductListItem<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            listId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerProductListItem
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : CustomerProductListItem>;
  
      /**
      * Adds an item to the customer's product list. Considered values from the request body are:
  
  type: A valid type, mandatory. This is the type of the item to be added to the customer's product.
  list.
  priority: This is the priority of the item to be added to the customer's product list.
  public: This is the flag whether the item to be added to the customer's product list is public.
  product_id: A valid product ID, used for product item type only. This is the ID (SKU)
  of the product related to the item to be added to the customer's product list. It is mandatory for
  product item type, and it must be a valid product id, otherwise
  ProductListProductIdMissingException or ProductListProductNotFoundException
  will be thrown.
  quantity: Used for product item type only. This is the quantity of the item to be
  added to the customer's product list.
  custom properties in the form c_\<CUSTOM_NAME\>: The custom property must correspond to a custom
  attribute (\<CUSTOM_NAME\>) defined for ProductListItem. The value of this property must be valid for the
  type of custom attribute defined for ProductListItem.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param listId - The product list ID.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerProductListItem otherwise.
      * 
      */
      async createCustomerProductListItem(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            listId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerProductListItem
        }>,
        rawResponse?: boolean
      ): Promise<Response | CustomerProductListItem> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["customerId"] !== undefined) {
          pathParams["customerId"] = optionParams["customerId"];
        } else if (configParams["customerId"] !== undefined) {
          pathParams["customerId"] = configParams["customerId"];
        }
        else {
          throw new Error('Missing required path parameter: customerId');
        }
        if (optionParams["listId"] !== undefined) {
          pathParams["listId"] = optionParams["listId"];
        } else if (configParams["listId"] !== undefined) {
          pathParams["listId"] = configParams["listId"];
        }
        else {
          throw new Error('Missing required path parameter: listId');
        }
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/{customerId}/product-lists/{listId}/items",
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
      * Removes an item from a customer product list.
      *
      * If you would like to get a raw Response object use the other deleteCustomerProductListItem function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param listId - The product list ID.
      * @param itemId - The ID of the product list item to update.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type void.
      * 
      */
      deleteCustomerProductListItem(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            listId: string
            itemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<void>;
  
      /**
      * Removes an item from a customer product list.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param listId - The product list ID.
      * @param itemId - The ID of the product list item to update.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      deleteCustomerProductListItem<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            listId: string
            itemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : void>;
  
      /**
      * Removes an item from a customer product list.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param listId - The product list ID.
      * @param itemId - The ID of the product list item to update.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type void otherwise.
      * 
      */
      async deleteCustomerProductListItem(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            listId: string
            itemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | void> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["customerId"] !== undefined) {
          pathParams["customerId"] = optionParams["customerId"];
        } else if (configParams["customerId"] !== undefined) {
          pathParams["customerId"] = configParams["customerId"];
        }
        else {
          throw new Error('Missing required path parameter: customerId');
        }
        if (optionParams["listId"] !== undefined) {
          pathParams["listId"] = optionParams["listId"];
        } else if (configParams["listId"] !== undefined) {
          pathParams["listId"] = configParams["listId"];
        }
        else {
          throw new Error('Missing required path parameter: listId');
        }
        if (optionParams["itemId"] !== undefined) {
          pathParams["itemId"] = optionParams["itemId"];
        } else if (configParams["itemId"] !== undefined) {
          pathParams["itemId"] = configParams["itemId"];
        }
        else {
          throw new Error('Missing required path parameter: itemId');
        }
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/{customerId}/product-lists/{listId}/items/{itemId}",
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
      * Returns an item of a customer product list and the actual product details like image, availability and price.
      *
      * If you would like to get a raw Response object use the other getCustomerProductListItem function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param listId - The product list ID.
      * @param itemId - The ID of the product list item to update.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type CustomerProductListItem.
      * 
      */
      getCustomerProductListItem(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            listId: string
            itemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<CustomerProductListItem>;
  
      /**
      * Returns an item of a customer product list and the actual product details like image, availability and price.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param listId - The product list ID.
      * @param itemId - The ID of the product list item to update.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerProductListItem otherwise.
      * 
      */
      getCustomerProductListItem<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            listId: string
            itemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : CustomerProductListItem>;
  
      /**
      * Returns an item of a customer product list and the actual product details like image, availability and price.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param listId - The product list ID.
      * @param itemId - The ID of the product list item to update.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerProductListItem otherwise.
      * 
      */
      async getCustomerProductListItem(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            listId: string
            itemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | CustomerProductListItem> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["customerId"] !== undefined) {
          pathParams["customerId"] = optionParams["customerId"];
        } else if (configParams["customerId"] !== undefined) {
          pathParams["customerId"] = configParams["customerId"];
        }
        else {
          throw new Error('Missing required path parameter: customerId');
        }
        if (optionParams["listId"] !== undefined) {
          pathParams["listId"] = optionParams["listId"];
        } else if (configParams["listId"] !== undefined) {
          pathParams["listId"] = configParams["listId"];
        }
        else {
          throw new Error('Missing required path parameter: listId');
        }
        if (optionParams["itemId"] !== undefined) {
          pathParams["itemId"] = optionParams["itemId"];
        } else if (configParams["itemId"] !== undefined) {
          pathParams["itemId"] = configParams["itemId"];
        }
        else {
          throw new Error('Missing required path parameter: itemId');
        }
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/{customerId}/product-lists/{listId}/items/{itemId}",
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
      * Updates an item of a customer's product list.
  Considered values from the request body are:
  
  priority: This is the priority of the customer's product list item.
  public: This is the flag whether the customer's product list item is public.
  quantity: This is the quantity of
  the customer's product list item. Used for product item type only. 
  custom properties in the form c_\<CUSTOM_NAME\>: The custom property
  must correspond to a custom attribute (\<CUSTOM_NAME\>) defined for ProductListItem.
  The value of this property must be valid for the type of custom attribute defined for ProductListItem.
      *
      * If you would like to get a raw Response object use the other updateCustomerProductListItem function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param listId - The product list ID.
      * @param itemId - The ID of the product list item to update.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      *
      * @returns A promise of type CustomerProductListItem.
      * 
      */
      updateCustomerProductListItem(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            listId: string
            itemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerProductListItem
        }>
      ): Promise<CustomerProductListItem>;
  
      /**
      * Updates an item of a customer's product list.
  Considered values from the request body are:
  
  priority: This is the priority of the customer's product list item.
  public: This is the flag whether the customer's product list item is public.
  quantity: This is the quantity of
  the customer's product list item. Used for product item type only. 
  custom properties in the form c_\<CUSTOM_NAME\>: The custom property
  must correspond to a custom attribute (\<CUSTOM_NAME\>) defined for ProductListItem.
  The value of this property must be valid for the type of custom attribute defined for ProductListItem.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param listId - The product list ID.
      * @param itemId - The ID of the product list item to update.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerProductListItem otherwise.
      * 
      */
      updateCustomerProductListItem<T extends boolean>(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            listId: string
            itemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerProductListItem
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : CustomerProductListItem>;
  
      /**
      * Updates an item of a customer's product list.
  Considered values from the request body are:
  
  priority: This is the priority of the customer's product list item.
  public: This is the flag whether the customer's product list item is public.
  quantity: This is the quantity of
  the customer's product list item. Used for product item type only. 
  custom properties in the form c_\<CUSTOM_NAME\>: The custom property
  must correspond to a custom attribute (\<CUSTOM_NAME\>) defined for ProductListItem.
  The value of this property must be valid for the type of custom attribute defined for ProductListItem.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param customerId - The customer ID.
      * @param listId - The product list ID.
      * @param itemId - The ID of the product list item to update.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param body - The data to send as the request body.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type CustomerProductListItem otherwise.
      * 
      */
      async updateCustomerProductListItem(
        options: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            customerId: string
            listId: string
            itemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
          body: CustomerProductListItem
        }>,
        rawResponse?: boolean
      ): Promise<Response | CustomerProductListItem> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["customerId"] !== undefined) {
          pathParams["customerId"] = optionParams["customerId"];
        } else if (configParams["customerId"] !== undefined) {
          pathParams["customerId"] = configParams["customerId"];
        }
        else {
          throw new Error('Missing required path parameter: customerId');
        }
        if (optionParams["listId"] !== undefined) {
          pathParams["listId"] = optionParams["listId"];
        } else if (configParams["listId"] !== undefined) {
          pathParams["listId"] = configParams["listId"];
        }
        else {
          throw new Error('Missing required path parameter: listId');
        }
        if (optionParams["itemId"] !== undefined) {
          pathParams["itemId"] = optionParams["itemId"];
        } else if (configParams["itemId"] !== undefined) {
          pathParams["itemId"] = configParams["itemId"];
        }
        else {
          throw new Error('Missing required path parameter: itemId');
        }
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/customers/{customerId}/product-lists/{listId}/items/{itemId}",
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
      * Retrieves all public product lists as defined by the given search term (for example, email OR first name and last name).
      *
      * If you would like to get a raw Response object use the other getPublicProductListsBySearchTerm function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param email - The email address of the customer the product lists belong to.
      * @param firstName - The first name of the customer the product lists belong to.
      * @param lastName - The last name of the customer the product lists belong to.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type PublicProductListResult.
      * 
      */
      getPublicProductListsBySearchTerm(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            email?: string
            firstName?: string
            lastName?: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<PublicProductListResult>;
  
      /**
      * Retrieves all public product lists as defined by the given search term (for example, email OR first name and last name).
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param email - The email address of the customer the product lists belong to.
      * @param firstName - The first name of the customer the product lists belong to.
      * @param lastName - The last name of the customer the product lists belong to.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type PublicProductListResult otherwise.
      * 
      */
      getPublicProductListsBySearchTerm<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            email?: string
            firstName?: string
            lastName?: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : PublicProductListResult>;
  
      /**
      * Retrieves all public product lists as defined by the given search term (for example, email OR first name and last name).
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param email - The email address of the customer the product lists belong to.
      * @param firstName - The first name of the customer the product lists belong to.
      * @param lastName - The last name of the customer the product lists belong to.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type PublicProductListResult otherwise.
      * 
      */
      async getPublicProductListsBySearchTerm(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            email?: string
            firstName?: string
            lastName?: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | PublicProductListResult> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["email"] !== undefined) {
          queryParams["email"] = optionParams["email"];
        } else if (configParams["email"] !== undefined) {
          queryParams["email"] = configParams["email"];
        }
        if (optionParams["firstName"] !== undefined) {
          queryParams["firstName"] = optionParams["firstName"];
        } else if (configParams["firstName"] !== undefined) {
          queryParams["firstName"] = configParams["firstName"];
        }
        if (optionParams["lastName"] !== undefined) {
          queryParams["lastName"] = optionParams["lastName"];
        } else if (configParams["lastName"] !== undefined) {
          queryParams["lastName"] = configParams["lastName"];
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
          "/organizations/{organizationId}/product-lists",
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
      * Retrieves a public product list by ID and the items under that product list.
      *
      * If you would like to get a raw Response object use the other getPublicProductList function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param listId - The ID of the list.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type PublicProductList.
      * 
      */
      getPublicProductList(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            listId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<PublicProductList>;
  
      /**
      * Retrieves a public product list by ID and the items under that product list.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param listId - The ID of the list.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type PublicProductList otherwise.
      * 
      */
      getPublicProductList<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            listId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : PublicProductList>;
  
      /**
      * Retrieves a public product list by ID and the items under that product list.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param listId - The ID of the list.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type PublicProductList otherwise.
      * 
      */
      async getPublicProductList(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            listId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | PublicProductList> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["listId"] !== undefined) {
          pathParams["listId"] = optionParams["listId"];
        } else if (configParams["listId"] !== undefined) {
          pathParams["listId"] = configParams["listId"];
        }
        else {
          throw new Error('Missing required path parameter: listId');
        }
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/product-lists/{listId}",
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
      * Retrieves an item from a public product list and the actual product details like product, image, availability and price.
      *
      * If you would like to get a raw Response object use the other getProductListItem function.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param listId - The ID of the list.
      * @param itemId - The ID of the item.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      *
      * @returns A promise of type PublicProductListItem.
      * 
      */
      getProductListItem(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            listId: string
            itemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>
      ): Promise<PublicProductListItem>;
  
      /**
      * Retrieves an item from a public product list and the actual product details like product, image, availability and price.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param listId - The ID of the list.
      * @param itemId - The ID of the item.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      * @returns A promise of type Response if rawResponse is true, a promise of type PublicProductListItem otherwise.
      * 
      */
      getProductListItem<T extends boolean>(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            listId: string
            itemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: T
      ): Promise<T extends true ? Response : PublicProductListItem>;
  
      /**
      * Retrieves an item from a public product list and the actual product details like product, image, availability and price.
      *
      * @param options - An object containing the options for this method.
      * @param parameters - An object containing the parameters for this method.
      * @param organizationId - 
      * @param listId - The ID of the list.
      * @param itemId - The ID of the item.
      * @param siteId - 
      * @param headers - An object literal of key value pairs of the headers to be
      * sent with this request.
      * @param rawResponse - Set to true to return entire Response object instead of DTO.
      *
      * @returns A promise of type Response if rawResponse is true, a promise of type PublicProductListItem otherwise.
      * 
      */
      async getProductListItem(
        options?: RequireParametersUnlessAllAreOptional<{
          parameters?: CompositeParameters<{
            organizationId: string
            listId: string
            itemId: string
            siteId: string
          }, ConfigParameters>,
          headers?: { [key: string]: string },
        }>,
        rawResponse?: boolean
      ): Promise<Response | PublicProductListItem> {
        const optionParams = options?.parameters || ({} as Partial<NonNullable<NonNullable<typeof options>["parameters"]>>);
        const configParams = this.clientConfig.parameters;
  
        const pathParams: ShopperCustomersPathParameters & Required<BaseUriParameters> = {
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
        if (optionParams["listId"] !== undefined) {
          pathParams["listId"] = optionParams["listId"];
        } else if (configParams["listId"] !== undefined) {
          pathParams["listId"] = configParams["listId"];
        }
        else {
          throw new Error('Missing required path parameter: listId');
        }
        if (optionParams["itemId"] !== undefined) {
          pathParams["itemId"] = optionParams["itemId"];
        } else if (configParams["itemId"] !== undefined) {
          pathParams["itemId"] = configParams["itemId"];
        }
        else {
          throw new Error('Missing required path parameter: itemId');
        }
  
        const queryParams: ShopperCustomersQueryParameters = {};
        if (optionParams["siteId"] !== undefined) {
          queryParams["siteId"] = optionParams["siteId"];
        } else if (configParams["siteId"] !== undefined) {
          queryParams["siteId"] = configParams["siteId"];
        }
        else {
          throw new Error('Missing required query parameter: siteId');
        }
  
        const url = new TemplateURL(
          "/organizations/{organizationId}/product-lists/{listId}/items/{itemId}",
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
