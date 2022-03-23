import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export type SectionBackgroundProps = {
  children: React.ReactNode;
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

  sectionId?: string;
  color?:
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

export const SectionBackground = ({
  children,
  background = 'white',
  sectionId = '',
  color = 'navy',
}: SectionBackgroundProps) => {
  return (
    <Styled.Container background={background} id={sectionId} color={color}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};
