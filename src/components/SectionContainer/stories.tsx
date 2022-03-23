import { Meta, Story } from '@storybook/react';
import { SectionContainer, SectionContainerProps } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dolore
          accusantium numquam quaerat voluptas explicabo commodi exercitationem
          laudantium porro quia accusamus pariatur fuga perspiciatis, quis iure
          ducimus voluptatum id qui.
        </p>
      </div>
    ),
  },
} as Meta;

export const Template: Story<SectionContainerProps> = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
