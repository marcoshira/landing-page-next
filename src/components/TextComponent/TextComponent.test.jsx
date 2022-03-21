import { screen } from '@testing-library/react';
import { TextComponent } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<TextComponent />', () => {
  it('should render with medium font', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByText('Children')).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <div>
        <p
          class="c0"
        >
          Children
        </p>
      </div>
    `);
  });
});
