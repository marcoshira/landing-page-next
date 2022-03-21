import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Debitis cupiditate voluptates, qui provident rem maiores,
      praesentium deserunt quaerat eveniet minima enim commodi
      eum accusantium eligendi, error in ad. Deleniti, culpa.
    `,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
