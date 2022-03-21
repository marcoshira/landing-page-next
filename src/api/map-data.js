import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const { attributes = {} } = data;

    return {
      attributes: mapAttributes(attributes),
    };
  });
};

export const mapAttributes = (attributes = {}) => {
  const {
    footer_text: footerHtml = '',
    slug = '',
    title = '',
    sections = [],
    menu = {},
  } = attributes;
  return {
    footerHtml,
    slug,
    title,
    sections: mapSections(sections),
    menu: mapMenu(menu),
  };
};
