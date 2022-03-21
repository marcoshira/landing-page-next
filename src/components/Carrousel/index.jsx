import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { useState } from 'react';

import { ChevronRight } from '@styled-icons/material-outlined/ChevronRight';
import { ChevronLeft } from '@styled-icons/material-outlined/ChevronLeft';

export const Carrousel = ({
  background = 'white',
  color = 'navy',
  title,
  description = '',
  flex,
  sectionId = '',
}) => {
  const [imageState, setImageState] = useState(1);

  const testImagePos = () => {
    if (imageState === flex.length) {
      setImageState(1);
    } else {
      setImageState(imageState + 1);
    }
  };

  const testImageNeg = () => {
    if (imageState === 1) {
      setImageState(flex.length);
    } else {
      setImageState(imageState - 1);
    }
  };

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
        <Styled.ButtonRight
          onClick={() => testImagePos()}
          aria-label="Next Image"
        >
          <ChevronRight></ChevronRight>
        </Styled.ButtonRight>
        <Styled.ButtonLeft
          onClick={() => testImageNeg()}
          aria-label="Past Image"
        >
          <ChevronLeft></ChevronLeft>
        </Styled.ButtonLeft>
        <Styled.Flex>
          {flex.map((el) => (
            <Styled.FlexElement
              key={`${el.srcImg}${el.altText}`}
              imageCounter={imageState}
            >
              <Styled.Image src={el.srcImg} alt={el.altText} id={el.altText} />
            </Styled.FlexElement>
          ))}
        </Styled.Flex>
      </Styled.Container>
    </SectionBackground>
  );
};

Carrousel.propTypes = {
  title: P.string.isRequired,
  description: P.string,
  flex: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
      imageDescription: P.string,
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
