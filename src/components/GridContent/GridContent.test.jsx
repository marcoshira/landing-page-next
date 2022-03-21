import { screen } from '@testing-library/react';
import { GridContent } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import mock from './mock';

describe('<GridContent />', () => {
  it('should match snapshot and have default bg and color', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveStyle({
      background: theme.colors.white,
      color: theme.colors.navy,
    });
  });

  it('should render with out background and color', () => {
    const { container } = renderTheme(
      <GridContent {...mock} background={undefined} color={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
