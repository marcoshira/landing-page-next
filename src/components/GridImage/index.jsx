import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridImage = ({
  background = 'white',
  color = 'navy',
  title,
  description,
  grid,
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
            <Styled.GridElement key={`${el.srcImg}${el.altText}`}>
              <Styled.Image src={el.srcImg} alt={el.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
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
