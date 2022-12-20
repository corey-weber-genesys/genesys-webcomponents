import { Meta, Story } from '@storybook/html';
import { legacyIconNames } from './legacy-icon-names';
import { iconNameMap } from './icon-name-map';
import './story.css';

interface storyArgs {
  iconName: string;
  decorative: boolean;
  screenreaderText: string;
}

const iconNamesList = Object.values(iconNameMap);

export default {
  title: 'Stable/Icons',
  component: 'gux-icon',
  argTypes: {
    iconName: {
      name: 'icon-name',
      options: iconNamesList,
      control: { type: 'select' }
    },
    decorative: { control: 'boolean' },
    screenreaderText: { name: 'screenreader-text' }
  },
  decorators: [
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-call
    (Story: () => unknown) => `<div id="icon-story">${Story()}</div>`
  ]
} as unknown as Meta;

const Template = (args: storyArgs) => {
  return `<gux-icon icon-name="${args.iconName}"${
    args.decorative ? ' decorative' : ''
  } screenreader-text="${args.screenreaderText}"></gux-icon>`;
};

export const Icons: Story = Template.bind({});
Icons.args = {
  iconName: iconNamesList[0],
  screenreaderText: 'This text is announced by screenreaders',
  decorative: false
};

export const Legacy: Story = Template.bind({});
Legacy.args = {
  ...Icons.args,
  iconName: legacyIconNames[0]
};
Legacy.argTypes = {
  iconName: {
    name: 'icon-name',
    options: legacyIconNames
  }
};
