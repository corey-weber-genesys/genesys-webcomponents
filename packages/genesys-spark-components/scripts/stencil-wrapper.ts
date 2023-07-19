/* eslint @typescript-eslint/no-unsafe-call: 0 */

/**
 * This module defines a wrapper around stencil's custom element setup that incorporates
 * a CDN url for resource loading at build time. Because it depends on code generated
 * by stencil, it's built in a second pass after the stencil components.  It's normal
 * to see some errors here before building anything
 */
import { defineCustomElements } from '../dist/loader';

// Value templated out during build process (see scripts/wrap-stencil.js)
export const CDN_URL = '{{cdn_url}}';

// Default domain to load assets from
const DEFAULT_DOMAIN = 'mypurecloud.com';

// List of Genesys UI domains
const DOMAIN_LIST = [
  'apne2.pure.cloud',
  'aps1.pure.cloud',
  'cac1.pure.cloud',
  'euw2.pure.cloud',
  'inindca.com',
  'inintca.com',
  'mypurecloud.com.au',
  'mypurecloud.com',
  'mypurecloud.de',
  'mypurecloud.ie',
  'mypurecloud.jp',
  'sae1.pure.cloud',
  'use2.maximus-pure.cloud',
  // 'use2.us-gov-pure.cloud', Assets are not currently deployed to FedRAMP and should fallback to the default domain
  'usw2.pure.cloud'
];

export async function registerElements() {
  if (CDN_URL) {
    await defineCustomElements(window, {
      resourcesUrl: `https://${getDomain() + CDN_URL}`
    });
  } else {
    await defineCustomElements();
  }
}

/**
 * Returns the domain that web component assets should be loaded from.
 * Will use the domain of the current window if it matches a Genesys domain.
 */
function getDomain(): string {
  const domain = window.location.hostname;
  const matchedDomain = DOMAIN_LIST.find(regionDomain =>
    domain.endsWith(regionDomain)
  );

  return `app.${matchedDomain || DEFAULT_DOMAIN}`;
}
