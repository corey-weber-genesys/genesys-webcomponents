import { Component, JSX, h, Prop, Element, Listen } from '@stencil/core';
import '@a11y/focus-trap';
import { FocusTrap } from '@a11y/focus-trap';

import { trackComponent } from '@utils/tracking/usage';

@Component({
  tag: 'gux-focus-trap-beta',
  shadow: true
})
export class GuxFocusTrap {
  focusTrap: FocusTrap;

  @Element()
  root: HTMLElement;

  @Prop()
  active: boolean = true;

  // focusFirstElement: (() => void);
  // focusLastElement: (() => void);
  // getFocusableElements: (() => HTMLElement[]);

  @Listen('keydown')
  handleKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Home': {
        event.preventDefault();
        this.focusTrap.focusFirstElement();
        break;
      }
      case 'End': {
        event.preventDefault();
        this.focusTrap.focusLastElement();
        break;
      }
    }
  }

  componentWillLoad(): void {
    trackComponent(this.root);
  }

  render() {
    return (
      <focus-trap
        ref={(el: FocusTrap) => (this.focusTrap = el)}
        inactive={!this.active}
      >
        <slot></slot>
      </focus-trap>
    ) as JSX.Element;
  }
}
