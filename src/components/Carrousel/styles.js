import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    > ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`;

export const Flex = styled.div`
  ${({ theme }) => css`
    overflow: hidden;

    width: 61.75%;
    height: 50rem;
    white-space: nowrap;
    position: relative;
    /* border: 8px solid red; */
    left: 19.3%;
    padding: 0;

    @media ${theme.media.lteMedium} {
      width: 100%;
      left: 0%;
    }
  `}
`;

export const FlexElement = styled.div`
  ${({ theme, imageCounter }) => css`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    transition: all 300ms linear;

    :nth-of-type(${imageCounter}) {
      visibility: visible;
      opacity: 1;
      position: static;
      border: none;
      /* display: none; */
    }
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    transition: all 300ms ease-in-out;
    &:hover {
      transform: scale(1.2) rotate(10deg);
    }
  `}
`;

export const ButtonLeft = styled.button`
  ${({ theme }) => css`
    z-index: 4;
    /* position: fixed; */
    width: 4rem;
    height: 4rem;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.mediumGray};
    opacity: 75%;

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
    /*
    position: absolute;
    display: inline; */
    position: relative;
    top: 27rem;
    left: calc(15% -4rem);

    /* @media ${theme.media.lteMedium} {
      top: 45rem;
    } */
    @media ${theme.media.lteSmall} {
      top: 20rem;
      left: -5%;
    }
  `}
`;

export const ButtonRight = styled.button`
  ${({ theme }) => css`
    z-index: 4;
    /* position: fixed; */
    width: 4rem;
    height: 4rem;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.mediumGray};
    opacity: 75%;

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
    position: relative;
    top: 27rem;
    left: calc(95% - 3vw);

    @media ${theme.media.lteMedium} {
      left: 80%;
    }

    @media ${theme.media.lteSmall} {
      top: 20rem;
      left: 82%;
    }
  `}
`;
