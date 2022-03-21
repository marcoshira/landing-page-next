import { screen } from '@testing-library/react';
import { SectionBackground } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<SectionBackground />', () => {
  it('should render without background and text color and match snapshot', () => {
    const { container } = renderTheme(
      <SectionBackground background={undefined} color={undefined}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with else background and text color and match snapshot', () => {
    const { container } = renderTheme(
      <SectionBackground background={'oi'} color={'oi'}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with background and text color default and match snapshot', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container.firstChild).toHaveStyle({
      background: theme.colors.white,
      color: theme.colors.navy,
    });
    expect(container).toMatchSnapshot();
  });

  it('should render with background and text color wrong thus default and match snapshot', () => {
    const { container } = renderTheme(
      <SectionBackground background={undefined} color={undefined}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container.firstChild).toHaveStyle({
      background: theme.colors.white,
      color: theme.colors.navy,
    });
    expect(container).toMatchSnapshot();
  });

  it('should render with background and text color crimson and match snapshot', () => {
    const { container } = renderTheme(
      <SectionBackground background={'crimson'} color={'crimson'}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container.firstChild).toHaveStyle({
      background: theme.colors.crimson,
      color: theme.colors.crimson,
    });
    expect(container).toMatchSnapshot();
  });

  it('should render with background and text color blue', () => {
    const { container } = renderTheme(
      <SectionBackground background={'blue'} color={'blue'}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container.firstChild).toHaveStyle({
      background: theme.colors.blue,
      color: theme.colors.blue,
    });
  });

  it('should render with background and text color white', () => {
    const { container } = renderTheme(
      <SectionBackground background={'white'} color={'white'}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container.firstChild).toHaveStyle({
      background: theme.colors.white,
      color: theme.colors.white,
    });
  });

  it('should render with background and text color navy', () => {
    const { container } = renderTheme(
      <SectionBackground background={'navy'} color={'navy'}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container.firstChild).toHaveStyle({
      background: theme.colors.navy,
      color: theme.colors.navy,
    });
  });

  it('should render with background and text color black', () => {
    const { container } = renderTheme(
      <SectionBackground background={'black'} color={'black'}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container.firstChild).toHaveStyle({
      background: theme.colors.black,
      color: theme.colors.black,
    });
  });

  it('should render with background and text color orange', () => {
    const { container } = renderTheme(
      <SectionBackground background={'orange'} color={'orange'}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container.firstChild).toHaveStyle({
      background: theme.colors.orange,
      color: theme.colors.orange,
    });
  });

  it('should render with background and text color green', () => {
    const { container } = renderTheme(
      <SectionBackground background={'green'} color={'green'}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container.firstChild).toHaveStyle({
      background: theme.colors.green,
      color: theme.colors.green,
    });
  });

  it('should render with background and text color lightBlue', () => {
    const { container } = renderTheme(
      <SectionBackground background={'lightBlue'} color={'lightBlue'}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container.firstChild).toHaveStyle({
      background: theme.colors.lightBlue,
      color: theme.colors.lightBlue,
    });
  });

  it('should render with background and text color purple', () => {
    const { container } = renderTheme(
      <SectionBackground background={'purple'} color={'purple'}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container.firstChild).toHaveStyle({
      background: theme.colors.purple,
      color: theme.colors.purple,
    });
  });

  it('should render with background and text color pink', () => {
    const { container } = renderTheme(
      <SectionBackground background={'pink'} color={'pink'}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container.firstChild).toHaveStyle({
      background: theme.colors.pink,
      color: theme.colors.pink,
    });
  });

  it('should render with background and text color yellow', () => {
    const { container } = renderTheme(
      <SectionBackground background={'yellow'} color={'yellow'}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container.firstChild).toHaveStyle({
      background: theme.colors.yellow,
      color: theme.colors.yellow,
    });
  });

  it('should render with background and text color brown', () => {
    const { container } = renderTheme(
      <SectionBackground background={'brown'} color={'brown'}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container.firstChild).toHaveStyle({
      background: theme.colors.brown,
      color: theme.colors.brown,
    });
  });

  it('should render with background and text color grey', () => {
    const { container } = renderTheme(
      <SectionBackground background={'grey'} color={'grey'}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container.firstChild).toHaveStyle({
      background: theme.colors.grey,
      color: theme.colors.grey,
    });
  });
});
