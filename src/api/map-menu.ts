import { MenuLinkProps } from '../components/MenuLink';
import { PageData } from '../templates/Home';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const mapMenu = (menu = {} as any): PageData['menu'] => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    // logo: { data: { attributes: { url: srcImg = '' } = '' } = '' } = '',
    menu_link: links = [],
  } = menu;

  const srcImg =
    menu.logo && menu.logo.data.attributes.url
      ? menu.logo.data.attributes.url
      : '';

  return {
    newTab,
    text,
    srcImg,
    link,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = [] as any[]): MenuLinkProps[] => {
  return links.map((item) => {
    const {
      open_in_new_tab: newTab = false,
      url: link = '',
      link_text: children = '',
    } = item;

    return {
      newTab,
      children,
      link,
    };
  });
};
