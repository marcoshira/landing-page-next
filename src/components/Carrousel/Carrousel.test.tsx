import { fireEvent, screen } from '@testing-library/react';
import { Carrousel } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<Carrousel />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Carrousel {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without background and text color', () => {
    const { container } = renderTheme(
      <Carrousel
        {...mock}
        background={undefined}
        color={undefined}
        description={undefined}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render next and past image btns', () => {
    const { container } = renderTheme(<Carrousel {...mock} />);
    const button1 = screen.getByLabelText('Next Image');
    expect(button1).toBeInTheDocument();
    const button2 = screen.getByLabelText('Past Image');
    expect(button2).toBeInTheDocument();
    fireEvent.click(button1);
    fireEvent.click(button1);
    fireEvent.click(button1);
    fireEvent.click(button1);
    expect(container).toMatchSnapshot();
    fireEvent.click(button2);
    fireEvent.click(button2);
    fireEvent.click(button2);
    fireEvent.click(button2);
    expect(container).toMatchSnapshot();
    // const { debug } = renderTheme(<Carrousel {...mock} />);
    // debug();
  });
});
