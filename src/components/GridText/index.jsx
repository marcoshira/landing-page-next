import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridText = ({
  title,
  description,
  color = 'navy',
  grid,
  background = 'white',
  sectionId = '',
}) => {
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

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
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
  ]),
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
  ]),
  sectionId: P.string,
};
