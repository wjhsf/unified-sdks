/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* eslint-disable no-console */
import path from 'path';

import {copySync} from 'fs-extra';

import {registerHelpers, registerPartials, setupApis} from './utils';

const WHICH_SDK = process.argv[2];
if (!WHICH_SDK) throw new Error('Please specify an SDK.');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const API_DIRECTORY = path.join(PROJECT_ROOT, 'apis');
const COMMON_STATIC_DIRECTORY = path.join(PROJECT_ROOT, 'src', 'static');
const SDK_STATIC_DIRECTORY = path.join(PROJECT_ROOT, 'src', WHICH_SDK);
const OUTPUT_DIRECTORY = path.join(PROJECT_ROOT, `dist-${WHICH_SDK}`);
const STATIC_OUTPUT = path.join(OUTPUT_DIRECTORY, 'static');

registerHelpers();
registerPartials();

console.log(`Creating ${WHICH_SDK} SDK for ${API_DIRECTORY}`);

const skipTestFiles = (src: string): boolean => !/\.test\.[a-z]+$/.test(src);
copySync(COMMON_STATIC_DIRECTORY, STATIC_OUTPUT, {
  filter: skipTestFiles,
});
copySync(SDK_STATIC_DIRECTORY, STATIC_OUTPUT, {
  filter: skipTestFiles,
});

setupApis(API_DIRECTORY, OUTPUT_DIRECTORY)
  .then(async apis => {
    await apis.render();
  })
  .catch(console.error);
