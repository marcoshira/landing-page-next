import { CarrouselElementProps, CarrouselProps } from '../components/Carrousel';
import { GridContentProps } from '../components/GridContent';
import { GridImageElementProps, GridImageProps } from '../components/GridImage';
import { GridTextElementProps, GridTextProps } from '../components/GridText';
import { GridTwoColumnProps } from '../components/GridTwoColumn';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;
      if (text_grid.length > 0) {
        return mapSectionTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapSectionImageGrid(section);
      }
    }
    if (section.__component === 'section.section-carrousel') {
      return mapSectionCarrousel(section);
    }
    return section;
  });
};

export const mapSectionTwoColumns = (
  section = {} as any,
): GridTwoColumnProps => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { data: { attributes: { url: srcImg = '' } = '' } = '' } = '',
    metadata: {
      background = 'white',
      section_id: sectionId = '',
      color = 'navy',
    } = false,
  } = section;

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
    color,
  };
};

export const mapSectionContent = (section = {} as any): GridContentProps => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: {
      background = 'white',
      section_id: sectionId = '',
      color = 'navy',
    } = false,
  } = section;
  return {
    component,
    title,
    html,
    background,
    sectionId,
    color,
  };
};

export const mapSectionTextGrid = (section = {} as any): GridTextProps => {
  const {
    title = '',
    description = '',
    text_grid: grid = [],
    metadata: {
      background = 'white',
      section_id: sectionId = '',
      color = 'navy',
    } = false,
  } = section;
  return {
    component: 'section.section-grid-text',
    title,
    description,
    background,
    color,
    sectionId,
    grid: grid.map((text: any): GridTextElementProps => {
      const { title = '', description = '' } = text;
      return { title, description };
    }),
  };
};

export const mapSectionImageGrid = (section = {} as any): GridImageProps => {
  const {
    title = '',
    description = '',
    image_grid: grid = [],
    metadata: {
      background = 'white',
      section_id: sectionId = '',
      color = 'navy',
    } = false,
  } = section;
  return {
    component: 'section.section-grid-image',
    title,
    description,
    background,
    sectionId,
    color,
    grid: grid.map((img: any): GridImageElementProps => {
      const {
        image: {
          data: {
            attributes: {
              url: srcImg = '',
              alternativeText: altText = '',
            } = '',
          } = '',
        } = '',
      } = img;
      return {
        srcImg,
        altText,
      };
    }),
  };
};

export const mapSectionCarrousel = (section = {} as any): CarrouselProps => {
  const {
    __component: component = '',
    title = '',
    description = '',
    carrousel_item: flex = [],
    // image: { data: { attributes: { url: srcImg = '' } = '' } = '' } = '',
    metadata: {
      background = 'white',
      section_id: sectionId = '',
      color = 'navy',
    } = false,
  } = section;

  return {
    component,
    title,
    description,
    background,
    sectionId,
    color,
    flex: flex.map((img: any): CarrouselElementProps => {
      const {
        image: {
          data: {
            attributes: {
              url: srcImg = '',
              alternativeText: altText = '',
            } = '',
          } = '',
        } = '',
      } = img;
      return {
        srcImg,
        altText,
      };
    }),
  };
};
