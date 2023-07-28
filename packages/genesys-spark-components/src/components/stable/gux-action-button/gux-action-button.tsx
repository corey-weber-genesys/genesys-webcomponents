import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  JSX,
  Listen,
  Prop,
  Watch
} from '@stencil/core';

import { OnClickOutside } from '@utils/decorator/on-click-outside';
import { whenEventIsFrom } from '@utils/dom/when-event-is-from';
import { afterNextRenderTimeout } from '@utils/dom/after-next-render';

import { trackComponent } from '@utils/tracking/usage';
import { buildI18nForComponent, GetI18nValue } from '../../../i18n';

import {
  GuxActionButtonAccent,
  GuxActionButtonType,
  getGuxActionButtonAccent
} from './gux-action-button.types';
import defaultResources from './i18n/en.json';

@Component({
  styleUrl: 'gux-action-button.scss',
  tag: 'gux-action-button',
  shadow: true
})
export class GuxActionButton {
  private dropdownButton: HTMLElement;
  private i18n: GetI18nValue;

  @Element()
  private root: HTMLElement;
  listElement: HTMLGuxListElement;

  /**
   * The component button type
   */
  @Prop()
  type: GuxActionButtonType = 'button';

  /**
   * Triggered when the menu is open
   */
  @Event()
  open: EventEmitter;

  /**
   * Triggered when the menu is close
   */
  @Event()
  close: EventEmitter;

  /**
   * Triggered when the action button is clicked
   */
  @Event()
  actionClick: EventEmitter;

  /**
   * The component text.
   */
  @Prop()
  text: string;

  /**
   * Disables the action button.
   */
  @Prop()
  disabled: boolean = false;

  @Prop()
  accent: GuxActionButtonAccent = 'secondary';

  /**
   * It is used to open or not the list.
   */
  @Prop({ mutable: true })
  isOpen: boolean = false;

  @Listen('keydown')
  handleKeydown(event: KeyboardEvent): void {
    const composedPath = event.composedPath();

    switch (event.key) {
      case 'Escape':
        this.isOpen = false;
        if (composedPath.includes(this.listElement)) {
          event.preventDefault();
          this.dropdownButton.focus();
        }
        break;
      case 'Tab': {
        this.isOpen = false;
        break;
      }
      case 'ArrowDown':
      case 'Enter':
        if (composedPath.includes(this.dropdownButton)) {
          event.preventDefault();
          this.isOpen = true;
          this.focusFirstItemInPopupList();
        }
        break;
    }
  }

  @Listen('keyup')
  handleKeyup(event: KeyboardEvent): void {
    switch (event.key) {
      case ' ': {
        const composedPath = event.composedPath();

        if (composedPath.includes(this.dropdownButton)) {
          this.isOpen = true;
          this.focusFirstItemInPopupList();
        }
        break;
      }
    }
  }

  @Watch('disabled')
  watchDisabled(disabled: boolean): void {
    if (disabled) {
      this.isOpen = false;
    }
  }

  @Watch('isOpen')
  watchValue(isOpen: boolean): void {
    if (isOpen) {
      this.open.emit();
    } else {
      this.close.emit();
    }
  }

  @OnClickOutside({ triggerEvents: 'click' })
  onClickOutside(event: MouseEvent): void {
    if (event.relatedTarget === null) {
      this.isOpen = false;
    }
  }

  private toggle(): void {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.focusPopupList();
      }
    }
  }

  private focusPopupList(): void {
    afterNextRenderTimeout(() => {
      this.listElement.focus && this.listElement.focus();
    });
  }

  private focusFirstItemInPopupList(): void {
    afterNextRenderTimeout(() => {
      void this.listElement.guxFocusFirstItem();
    });
  }

  private onActionClick(): void {
    if (!this.disabled) {
      this.isOpen = false;
      this.actionClick.emit();
    }
  }

  private onListClick(event: MouseEvent): void {
    whenEventIsFrom('gux-list-item', event, () => {
      this.isOpen = false;
      this.dropdownButton.focus();
    });
  }

  async componentWillLoad(): Promise<void> {
    trackComponent(this.root, { variant: this.type });
    this.i18n = await buildI18nForComponent(this.root, defaultResources);
  }

  render(): JSX.Element {
    return (
      <div class="gux-action-button-container">
        <gux-popup expanded={this.isOpen} disabled={this.disabled}>
          <div slot="target" class="gux-action-button-container">
            <gux-button-slot-beta
              class="gux-action-button"
              accent={getGuxActionButtonAccent(this.accent)}
            >
              <button
                type={this.type}
                disabled={this.disabled}
                onClick={() => this.onActionClick()}
              >
                {this.text}
              </button>
            </gux-button-slot-beta>

            <gux-button-slot-beta
              class="gux-dropdown-button"
              accent={getGuxActionButtonAccent(this.accent)}
            >
              <button
                type="button"
                disabled={this.disabled}
                ref={el => (this.dropdownButton = el)}
                onMouseUp={() => this.toggle()}
                aria-haspopup="true"
                aria-expanded={this.isOpen.toString()}
                aria-label={this.i18n('actionButtonDropdown', {
                  buttonTitle: this.text
                })}
              >
                <gux-icon decorative icon-name="chevron-small-down"></gux-icon>
              </button>
            </gux-button-slot-beta>
          </div>

          <div class="gux-list-container" slot="popup">
            <gux-list
              onClick={(e: MouseEvent) => this.onListClick(e)}
              ref={el => (this.listElement = el)}
            >
              <slot />
            </gux-list>
          </div>
        </gux-popup>
      </div>
    ) as JSX.Element;
  }
}
