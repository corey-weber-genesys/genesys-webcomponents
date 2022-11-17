// import { defineCustomElements } from '../dist/loader';

// defineCustomElements();

import {
  extractArgTypes,
  extractComponentDescription,
  setStencilDocJson
} from '@pxtrn/storybook-addon-docs-stencil';
import docJson from './docs.json';
if (docJson) setStencilDocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    },
    hideNoControlsWarning: true
  },
  docs: {
    extractArgTypes,
    extractComponentDescription
  }
};
