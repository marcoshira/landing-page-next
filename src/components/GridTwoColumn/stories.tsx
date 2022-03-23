import { Meta, Story } from '@storybook/react';
import { GridTwoColumn, GridTwoColumnProps } from '.';
import mock from './mock';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: mock,
} as Meta;

export const Template: Story<GridTwoColumnProps> = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
