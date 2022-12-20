import { Meta, StoryFn } from '@storybook/html';
import {
  GuxButtonAccentOptions,
  GuxButtonTypeOptions
} from './gux-button.types';

interface storyArgs {
  accent: string;
  slot: string;
  disabled: boolean;
  guxTitle: string;
  type: string;
}

export default {
  title: 'Stable/Button',
  component: 'gux-button',
  parameters: { actions: { handles: ['click gux-button'] } },
  args: {
    accent: 'secondary',
    slot: 'Click me',
    disabled: false,
    type: 'button',
    guxTitle: 'The component title'
  },
  argTypes: {
    accent: {
      control: 'select',
      options: GuxButtonAccentOptions
    },
    type: {
      control: 'select',
      options: GuxButtonTypeOptions
    }
  }
} as unknown as Meta;

const Template = ({ accent, slot, disabled, type, guxTitle }: storyArgs) =>
  `<gux-button accent="${accent}" type="${type}"${
    guxTitle && ` gux-title="${guxTitle}"`
  }${disabled ? ' disabled' : ''}>${slot}</gux-button>`;

export const Basic: StoryFn = Template.bind({});
