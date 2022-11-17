import { Meta, Story } from '@storybook/html';
import { GuxBadgeColorOptions } from './gux-badge.types';
import { iconNameMap } from '../../stable/gux-icon/icon-name-map';

interface storyArgs {
  color: string;
  bold: boolean;
  text: string;
  icon: string;
}

const iconNamesList = Object.values(iconNameMap);

export default {
  title: 'Components/Badge',
  component: 'gux-badge-beta',
  argTypes: {
    color: {
      control: 'radio',
      options: GuxBadgeColorOptions
    },
    bold: { control: 'boolean' },
    icon: {
      name: 'icon-name',
      options: iconNamesList,
      control: { type: 'select' }
    }
  }
} as unknown as Meta;

const Template = (args: storyArgs) =>
  `<gux-badge-beta color="${args.color}"${args.bold ? ' bold' : ''}>${
    args.text
  }</gux-badge-beta>`;

export const Basic: Story = Template.bind({});
Basic.args = {
  color: 'neutral',
  text: 'Example text',
  bold: false
};

const IconTemplate = (args: storyArgs) => `<gux-badge-beta color="${
  args.color
}"${args.bold ? ' bold' : ''}>
    <gux-icon icon-name="${args.icon}" decorative></gux-icon>${args.text}
  </gux-badge-beta>`;
export const WithIcon: Story = IconTemplate.bind({});
WithIcon.args = {
  color: 'neutral',
  bold: false,
  text: 'Example text',
  icon: 'subtract'
};
