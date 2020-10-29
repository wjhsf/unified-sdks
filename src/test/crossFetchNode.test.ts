/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import nock from 'nock';
import { ShopperCustomers, ShopperSearch } from '../lib';
import config from '../environment/config';

/**
 * Validation of integration and use of cross-fetch when run in a node environment.
 * As these tests want to ensure the correct integration of cross-fetch, responses are mocked
 * out at the http layer via nock.
 * Both POST and GET are exercised to ensure compatibility.
 */

const customerClient = new ShopperCustomers(config);
const searchClient = new ShopperSearch(config);

beforeEach(async () => {
  nock.cleanAll();
});

test('test getting a token with a post operation', async () => {
  nock('https://localhost:3000')
    .post(`/customer/shopper-customers/v1/organizations/${config.parameters.organizationId}/customers/actions/login`)
    .query({ siteId: config.parameters.siteId, clientId: config.parameters.clientId })
    .reply(200, {
      authType: 'guest',
      customerId: 'test-customer-id',
      preferredLocale: 'en_US',
    }, { Authorization: 'Bearer test-auth' });

  //  Start by requesting an authorization
  const authResponse = await customerClient.authorizeCustomer({ body: { type: 'guest' } }, true);
  // Get the authorization token and validate it is correct
  const token = await authResponse.headers.get('authorization');
  expect(token).toEqual('Bearer test-auth');
});

test('performing a search with a get operation', async () => {
  // Specific response to be returned by search
  const mockSearchResponse = {
    limit: 1,
    hits: [
      {
        currency: 'USD',
        hitType: 'bundle',
        image: {
          alt: 'Playstation 3 Bundle, , large',
          disBaseLink: 'https://localhost/on/demandware.static/-/Sites-electronics-m-catalog/default/dw794b23a6/images/large/sony-ps3-bundle.jpg',
          link: 'https://localhost/on/demandware.static/-/Sites-electronics-m-catalog/default/dw794b23a6/images/large/sony-ps3-bundle.jpg',
          title: 'Playstation 3 Bundle, ',
        },
        orderable: true,
        price: 449.00,
        productId: 'sony-ps3-bundleM',
        productName: 'Playstation 3 Bundle',
        productType: {
          bundle: true,
          option: true,
        },
        representedProduct: {
          id: 'sony-ps3-consoleM',
        },
        representedProducts: [
          {
            id: 'sony-ps3-consoleM',
          },
        ],
      },
    ],
    query: 'sony',
    offset: 0,
    total: 27,
  };

  nock('https://localhost:3000')
    .get(`/search/shopper-search/v1/organizations/${config.parameters.organizationId}/product-search?siteId=${config.parameters.siteId}&q=sony`)
    .matchHeader('authorization', 'Bearer test-auth')
    .reply(200, mockSearchResponse, { 'content-type': 'application-json charset=UTF-8' });

  const searchResponse = await searchClient.productSearch({
    parameters: { q: 'sony' }, headers: { authorization: 'Bearer test-auth' },
  });

  expect(searchResponse).toEqual(mockSearchResponse);
});