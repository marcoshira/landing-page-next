import P from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useState } from 'react';

export const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Button
        onClick={() => setVisible(!visible)}
        aria-label="Open/Close Menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close Menu" />
        ) : (
          <MenuIcon aria-label="Open Menu" />
        )}
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(!visible)}>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
