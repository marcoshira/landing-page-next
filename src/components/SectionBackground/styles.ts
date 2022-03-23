import styled, { css } from 'styled-components';

type Background = {
  background?:
    | 'crimson'
    | 'blue'
    | 'navy'
    | 'white'
    | 'black'
    | 'pink'
    | 'purple'
    | 'orange'
    | 'green'
    | 'lightBlue'
    | 'yellow'
    | 'brown'
    | 'grey'
    | 'oi';
};

export const Container = styled.div<Background>`
  ${({ theme, background, color }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${backgroundcolor(theme, background)};
    ${textcolor(theme, color)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;

const backgroundcolor = (theme, background) => {
  if (background === 'crimson') {
    return css`
      background: ${theme.colors.crimson};
    `;
  }
  if (background === 'white') {
    return css`
      background: ${theme.colors.white};
    `;
  }
  if (background === 'blue') {
    return css`
      background: ${theme.colors.blue};
    `;
  }
  if (background === 'navy') {
    return css`
      background: ${theme.colors.navy};
    `;
  }
  if (background === 'black') {
    return css`
      background: ${theme.colors.black};
    `;
  }
  if (background === 'pink') {
    return css`
      background: ${theme.colors.pink};
    `;
  }
  if (background === 'purple') {
    return css`
      background: ${theme.colors.purple};
    `;
  }
  if (background === 'orange') {
    return css`
      background: ${theme.colors.orange};
    `;
  }
  if (background === 'green') {
    return css`
      background: ${theme.colors.green};
    `;
  }
  if (background === 'lightBlue') {
    return css`
      background: ${theme.colors.lightBlue};
    `;
  }
  if (background === 'yellow') {
    return css`
      background: ${theme.colors.yellow};
    `;
  }
  if (background === 'brown') {
    return css`
      background: ${theme.colors.brown};
    `;
  }
  if (background === 'grey') {
    return css`
      background: ${theme.colors.grey};
    `;
  } else {
    return css`
      background: ${theme.colors.white};
    `;
  }
};

export const textcolor = (theme, color) => {
  if (color === 'crimson') {
    return css`
      color: ${theme.colors.crimson};
    `;
  }
  if (color === 'white') {
    return css`
      color: ${theme.colors.white};
    `;
  }
  if (color === 'blue') {
    return css`
      color: ${theme.colors.blue};
    `;
  }
  if (color === 'navy') {
    return css`
      color: ${theme.colors.navy};
    `;
  }
  if (color === 'black') {
    return css`
      color: ${theme.colors.black};
    `;
  }
  if (color === 'pink') {
    return css`
      color: ${theme.colors.pink};
    `;
  }
  if (color === 'purple') {
    return css`
      color: ${theme.colors.purple};
    `;
  }
  if (color === 'orange') {
    return css`
      color: ${theme.colors.orange};
    `;
  }
  if (color === 'green') {
    return css`
      color: ${theme.colors.green};
    `;
  }
  if (color === 'lightBlue') {
    return css`
      color: ${theme.colors.lightBlue};
    `;
  }
  if (color === 'yellow') {
    return css`
      color: ${theme.colors.yellow};
    `;
  }
  if (color === 'brown') {
    return css`
      color: ${theme.colors.brown};
    `;
  }
  if (color === 'grey') {
    return css`
      color: ${theme.colors.grey};
    `;
  } else {
    return css`
      color: ${theme.colors.navy};
    `;
  }
};
