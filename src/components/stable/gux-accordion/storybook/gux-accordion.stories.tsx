import { Meta, StoryFn } from '@storybook/html';

interface storyArgs {
  disabled: boolean;
  singleOpenSection: boolean;
}

export default {
  title: 'Stable/Accordion',
  component: 'gux-accordion',
  subcomponents: { GuxAccordionSection: 'gux-accordion-section' }
} as unknown as Meta;

const Template = (args: storyArgs) =>
  `<gux-accordion ${args.singleOpenSection ? 'single-open-section' : ''}>
    <gux-accordion-section>
      <h2 slot="header">First Section Beta</h2>
      <div slot="content">
        <span>I'm a span in a div.</span>
        <button>I'm the button.</button>
      </div>
    </gux-accordion-section>
    <gux-accordion-section>
      <h2 slot="header">First Section Beta</h2>
      <div slot="content">
        <span>I'm a span in a div.</span>
        <button>I'm the button.</button>
      </div>
    </gux-accordion-section>
    <gux-accordion-section>
      <h2 slot="header">First Section Beta</h2>
      <div slot="content">
        <span>I'm a span in a div.</span>
        <button>I'm the button.</button>
      </div>
    </gux-accordion-section>
  </gux-accordion>`;

export const Basic: StoryFn = Template.bind({});
