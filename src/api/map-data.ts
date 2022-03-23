/* eslint-disable @typescript-eslint/no-explicit-any */
import { Attributes, PageData } from '../templates/Home';
import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data: any): Attributes => {
    const { attributes = {} } = data;

    return {
      attributes: mapAttributes(attributes),
    };
  });
};

export const mapAttributes = (attributes = {} as any): PageData => {
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
