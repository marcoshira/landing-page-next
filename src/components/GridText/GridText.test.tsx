import { GridText } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<GridText />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without background and text color', () => {
    const { container } = renderTheme(
      <GridText {...mock} background={undefined} color={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
