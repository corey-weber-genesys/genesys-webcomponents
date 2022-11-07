/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { Build as BUILD, ComponentInterface, getElement } from '@stencil/core';

declare type OnResizeDecorator = (
  target: ComponentInterface,
  propertyKey: string
) => void;

export function OnResize(): OnResizeDecorator {
  return (proto: ComponentInterface, methodName: string) => {
    // this is to resolve the 'compiler optimization issue':
    // lifecycle events not being called when not explicitly declared in at least one of components from bundle
    (BUILD as any).connectedCallback = true;
    (BUILD as any).disconnectedCallback = true;

    const { connectedCallback, disconnectedCallback } = proto;
    let onMutationObserver: ResizeObserver;

    proto.connectedCallback = function () {
      const host = getElement(this);
      const method = this[methodName];

      onMutationObserver = new ResizeObserver(method.bind(this));
      onMutationObserver.observe(host);

      return connectedCallback && connectedCallback.call(this);
    };

    proto.disconnectedCallback = function () {
      onMutationObserver.disconnect();

      return disconnectedCallback && disconnectedCallback.call(this);
    };
  };
}