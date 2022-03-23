import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export type GridContentProps = {
  title: string;
  html: string;
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
  component?: string;
};

export const GridContent = ({
  title,
  html,
  background = 'white',
  sectionId = '',
  color = 'navy',
}: GridContentProps) => {
  return (
    <SectionBackground
      background={background}
      sectionId={sectionId}
      color={color}
    >
      <Styled.Container>
        <Heading uppercase as="h2">
          {title}
        </Heading>
        <Styled.Html>
          <TextComponent>{html}</TextComponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
};
