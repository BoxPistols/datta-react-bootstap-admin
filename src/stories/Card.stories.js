import React from 'react';
import { CardStyle } from './Card';

export default {
  title: 'Example/Card',
  component: CardStyle,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <CardStyle {...args} />;

export const Base = Template.bind({});
Base.args = {
  title: '祇園精舎の鐘の音',
  label: '確認する',
};

export const En = Template.bind({});
En.args = {
  title: 'Best Contents',
  dummyText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam veniam officia porro?',
  label: 'Agree',
};