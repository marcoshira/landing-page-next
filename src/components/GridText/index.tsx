import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export type GridTextElementProps = {
  title: string;
  description: string;
};

export type GridTextProps = {
  title: string;
  description: string;
  grid: GridTextElementProps[];
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

export const GridText = ({
  title,
  description,
  color = 'navy',
  grid,
  background = 'white',
  sectionId = '',
}: GridTextProps) => {
  return (
    <SectionBackground
      background={background}
      sectionId={sectionId}
      color={color}
    >
      <Styled.Container>
        <Heading size="huge" uppercase as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={el.title}>
              <Heading size="medium" as="h3">
                {el.title}
              </Heading>
              <TextComponent>{el.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};
