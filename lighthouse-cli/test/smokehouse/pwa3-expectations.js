/**
 * @license Copyright 2016 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/**
 * Expected Lighthouse audit values for various sites with stable(ish) PWA
 * results.
 */
module.exports = [
  {
    requestedUrl: 'https://pwa.rocks',
    finalUrl: 'https://pwa.rocks/',
    audits: {
      'is-on-https': {
        score: 1,
      },
      'redirects-http': {
        score: 1,
      },
      'service-worker': {
        score: 1,
      },
      'works-offline': {
        score: 1,
      },
      'viewport': {
        score: 1,
      },
      'without-javascript': {
        score: 1,
      },
      'load-fast-enough-for-pwa': {
        // Ignore speed test; just verify that it ran .
      },
      'webapp-install-banner': {
        score: 1,
        extendedInfo: {
          value: {
            manifestValues: {
              allChecks: [
                {id: 'hasStartUrl', passing: true},
                {id: 'hasIconsAtLeast192px', passing: true},
                {id: 'hasIconsAtLeast512px', passing: false},
                {id: 'hasPWADisplayValue', passing: true},
                {id: 'hasBackgroundColor', passing: true},
                {id: 'hasThemeColor', passing: true},
                {id: 'hasShortName', passing: true},
                {id: 'shortNameLength', passing: true},
                {id: 'hasName', passing: true},
              ],
            },
          },
        },
      },
      'splash-screen': {
        score: 0,
        extendedInfo: {
          value: {
            manifestValues: {
              allChecks: [
                {id: 'hasStartUrl', passing: true},
                {id: 'hasIconsAtLeast192px', passing: true},
                {id: 'hasIconsAtLeast512px', passing: false},
                {id: 'hasPWADisplayValue', passing: true},
                {id: 'hasBackgroundColor', passing: true},
                {id: 'hasThemeColor', passing: true},
                {id: 'hasShortName', passing: true},
                {id: 'shortNameLength', passing: true},
                {id: 'hasName', passing: true},
              ],
            },
          },
        },
      },
      'themed-omnibox': {
        score: 0,
        extendedInfo: {
          value: {
            manifestValues: {
              allChecks: [
                {id: 'hasStartUrl', passing: true},
                {id: 'hasIconsAtLeast192px', passing: true},
                {id: 'hasIconsAtLeast512px', passing: false},
                {id: 'hasPWADisplayValue', passing: true},
                {id: 'hasBackgroundColor', passing: true},
                {id: 'hasThemeColor', passing: true},
                {id: 'hasShortName', passing: true},
                {id: 'shortNameLength', passing: true},
                {id: 'hasName', passing: true},
              ],
            },
          },
        },
      },
      'content-width': {
        score: 1,
      },

      // "manual" audits. Just verify in the results.
      'pwa-cross-browser': {
        score: null,
        scoreDisplayMode: 'manual',
      },
      'pwa-page-transitions': {
        score: null,
        scoreDisplayMode: 'manual',
      },
      'pwa-each-page-has-url': {
        score: null,
        scoreDisplayMode: 'manual',
      },
    },
  },
];
