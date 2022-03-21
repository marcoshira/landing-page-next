import { mapAttributes, mapData } from './map-data';

describe('map-data', () => {
  it('should map data even if there is no data', () => {
    const pagesData = mapData()[0];
    expect(pagesData.attributes.footerHtml).toBe('');
    expect(pagesData.attributes.slug).toBe('');
    expect(pagesData.attributes.title).toBe('');
  });
  it('should map data', () => {
    const pagesData = mapData([
      {
        attributes: {
          footer_text: '<p>Oi</p>',
          slug: 'landing-page',
          title: 'Landing Page',
        },
      },
    ])[0];
    expect(pagesData.attributes.footerHtml).toBe('<p>Oi</p>');
    expect(pagesData.attributes.slug).toBe('landing-page');
    expect(pagesData.attributes.title).toBe('Landing Page');
  });

  it('should map attributes', () => {
    const attributes = mapAttributes({
      footer_text: '<p>Oi</p>',
      slug: 'landing-page',
      title: 'Landing Page',
    });
    expect(attributes.footerHtml).toBe('<p>Oi</p>');
    expect(attributes.slug).toBe('landing-page');
    expect(attributes.title).toBe('Landing Page');
  });

  it('should map attributes with no data', () => {
    const attributes = mapAttributes();
    expect(attributes.footerHtml).toBe('');
    expect(attributes.slug).toBe('');
    expect(attributes.title).toBe('');
  });
});
