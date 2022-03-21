import { screen } from '@testing-library/react';
import { GridImage } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import mock from './mock';

describe('<GridImage />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without background and text color', () => {
    const { container } = renderTheme(
      <GridImage {...mock} background={undefined} color={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
