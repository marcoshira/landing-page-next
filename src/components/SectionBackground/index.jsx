import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export const SectionBackground = ({
  children,
  background = 'white',
  sectionId = '',
  color = 'navy',
}) => {
  return (
    <Styled.Container background={background} id={sectionId} color={color}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.oneOf([
    'crimson',
    'blue',
    'navy',
    'white',
    'black',
    'pink',
    'purple',
    'orange',
    'green',
    'lightBlue',
    'yellow',
    'brown',
    'grey',
    'oi',
  ]),
  sectionId: P.string,
  color: P.oneOf([
    'crimson',
    'blue',
    'navy',
    'white',
    'black',
    'pink',
    'purple',
    'orange',
    'green',
    'lightBlue',
    'yellow',
    'brown',
    'grey',
    'oi',
  ]),
};
