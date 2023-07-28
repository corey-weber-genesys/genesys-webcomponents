import { Component, Element, Prop, h, JSX } from '@stencil/core';

import { trackComponent } from '@utils/tracking/usage';

@Component({
  styleUrl: 'gux-page-loading-spinner.scss',
  tag: 'gux-page-loading-spinner',
  shadow: true
})
export class GuxPageLoadingSpinner {
  @Element()
  private root: HTMLElement;

  /**
   * Localized text to provide an accessible label for the component.
   * If no screenreader text is provided, the localized string "Loading" will be used by default
   */
  @Prop()
  screenreaderText: string;

  componentWillLoad(): void {
    trackComponent(this.root);
  }

  render(): JSX.Element {
    return (
      <gux-radial-loading
        class="gux-spinner"
        screenreader-text={this.screenreaderText}
        context="full-page"
      ></gux-radial-loading>
    ) as JSX.Element;
  }
}
