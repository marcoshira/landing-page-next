import { Carrousel } from '.';
import mock from './mock';

export default {
  title: 'Carrousel',
  component: Carrousel,
  args: mock,
};

export const Template = (args) => {
  return (
    <div>
      <Carrousel {...args} />
    </div>
  );
};
