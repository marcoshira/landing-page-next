import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridTwoColumn = ({
  title,
  text,
  srcImg,
  background = 'white',
  color = 'navy',
  sectionId = '',
}) => {
  return (
    <SectionBackground
      background={background}
      sectionId={sectionId}
      color={color}
    >
      <Styled.Container background={background}>
        <Styled.TextContainer>
          <Heading uppercase as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={srcImg} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumn.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
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
