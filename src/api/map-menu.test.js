import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu', () => {
  it('should return predetermined object if no data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.srcImg).toBe('');
    expect(menu.link).toBe('');
    expect(menu.links).toEqual([]);
  });

  it('should map menu data', () => {
    const menu = mapMenu({
      open_in_new_tab: true,
      logo_text: 'logo',
      logo_link: '#home',
      logo: { data: { attributes: { url: 'img.svg' } } },
      menu_link: [
        {
          open_in_new_tab: false,
          url: '#contact',
          link_text: 'contact',
        },
      ],
    });
    expect(menu.newTab).toBe(true);
    expect(menu.text).toBe('logo');
    expect(menu.srcImg).toBe('img.svg');
    expect(menu.link).toBe('#home');
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe('contact');
    expect(menu.links[0].link).toBe('#contact');
  });

  it('should return an empty array if no links', () => {
    const links = mapMenuLinks([]);
    expect(links).toEqual([]);
  });

  it('should map links', () => {
    const links = mapMenuLinks([
      {
        open_in_new_tab: false,
        url: '#contact',
        link_text: 'contact',
      },
    ]);
    expect(links[0].newTab).toBe(false);
    expect(links[0].link).toBe('#contact');
    expect(links[0].children).toBe('contact');
  });

  it('should map links', () => {
    const links = mapMenuLinks([{}]);
    expect(links[0].newTab).toBe(false);
    expect(links[0].link).toBe('');
    expect(links[0].children).toBe('');
  });

  it('should map links with no links', () => {
    const links = mapMenuLinks();
  });
});
