/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Build as BUILD, ComponentInterface, getElement } from '@stencil/core';

declare type OnFocusinOutsideDecorator = (
  target: ComponentInterface,
  propertyKey: string
) => void;

declare type OnFocusinOutsideCallback = (event: FocusEvent) => void;

const listenerEvent = 'focusin';
const listenerOptions = false;

export function OnFocusinOutside(): OnFocusinOutsideDecorator {
  return (proto: ComponentInterface, methodName: string) => {
    // this is to resolve the 'compiler optimization issue':
    // lifecycle events not being called when not explicitly declared in at least one of components from bundle
    // More info here: https://medium.com/stencil-tricks/stenciljs-creating-custom-decorators-d4d8e78c5717
    (BUILD as any).connectedCallback = true;
    (BUILD as any).disconnectedCallback = true;

    const { connectedCallback, disconnectedCallback } = proto;

    const store = new Map<unknown, OnFocusinOutsideCallback>();

    proto.connectedCallback = function () {
      const element = getElement(this);
      const callback = this[methodName] as OnFocusinOutsideCallback;

      const listener = (event: FocusEvent) => {
        if (!element.contains(event.target as Node)) {
          if (element.isConnected) {
            callback.call(this, event);
          }
        }
      };

      registerListener(store, this, listener);

      return connectedCallback && connectedCallback.call(this);
    };

    proto.disconnectedCallback = function () {
      deregisterListener(store, this);

      return disconnectedCallback && disconnectedCallback.call(this);
    };
  };
}

function registerListener(
  store: Map<unknown, OnFocusinOutsideCallback>,
  key: unknown,
  listenerCallback: OnFocusinOutsideCallback
) {
  if (store.has(key)) {
    deregisterListener(store, key);
  }

  store.set(key, listenerCallback);

  window.addEventListener(listenerEvent, listenerCallback, listenerOptions);

  console.log('registerListener', { store });
}

function deregisterListener(
  store: Map<unknown, OnFocusinOutsideCallback>,
  key: unknown
) {
  if (store.has(key)) {
    window.removeEventListener(listenerEvent, store.get(key), listenerOptions);
    store.delete(key);
    console.log('deregisterListener', { store });
  }
}
