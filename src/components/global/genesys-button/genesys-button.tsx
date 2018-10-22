import { Element, Component, Prop, State } from '@stencil/core';

@Component({
  styleUrl: 'genesys-button.scss',
  tag: 'genesys-button'
})
export class GenesysButton {
  @Element() root: HTMLStencilElement
  /**
   * Indicate if the button is disabled or not
   */
  @Prop()
  disabled: boolean = false;

  /**
   * The component type (secondary or primary).
   */
  @Prop() 
  type: string = 'secondary';

  @State()
  title: string;

  /**
   * This function is to check type and return a default one
   */
  getType() {
    return this.type === 'primary' ? 'primary' : 'secondary'
  }

  componentDidLoad () {
    this.title = this.root.title
  }

  render() {
    return (
      <button title={this.title} 
              disabled={this.disabled} 
              class={'genesys-' + this.getType()}>
        <slot name='inner'>{this.title}</slot>
      </button>
    );
  }
}