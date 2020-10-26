import React from 'react';
import { CardStyle,CardStyleGroup } from './Card';

export default {
  title: 'Example/Card/CardStyleGroup',
  component: CardStyleGroup,
}

const Template = (args) => <CardStyleGroup {...args} />;

export const flex = Template.bind({});