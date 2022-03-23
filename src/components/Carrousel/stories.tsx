import { Meta, Story } from '@storybook/react';
import { Carrousel, CarrouselProps } from '.';
import mock from './mock';

export default {
  title: 'Carrousel',
  component: Carrousel,
  args: mock,
} as Meta;

export const Template: Story<CarrouselProps> = (args) => {
  return (
    <div>
      <Carrousel {...args} />
    </div>
  );
};
