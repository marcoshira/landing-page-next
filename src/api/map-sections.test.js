import {
  mapSectionCarrousel,
  mapSectionContent,
  mapSectionImageGrid,
  mapSections,
  mapSectionTextGrid,
  mapSectionTwoColumns,
} from './map-sections';

import pagesFakeData from './dados.json';

describe('map-sections', () => {
  it('should map section two columns with predetermined values', () => {
    const data = mapSectionTwoColumns();
    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.text).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.background).toBe('white');
    expect(data.sectionId).toBe('');
  });

  it('should map section two columns', () => {
    const data = mapSectionTwoColumns({
      id: 2,
      __component: 'section.section-two-columns',
      title: 'January brings us Firefox 85',
      description: 'abc',
      image: {
        data: {
          id: 2,
          attributes: {
            name: 'javascript.svg',
            alternativeText: 'Pessoas segurando logos',
            caption: 'javascript',
            width: 1030,
            height: 730,
            formats: null,
            hash: 'javascript_ff2534e419',
            ext: '.svg',
            mime: 'image/svg+xml',
            size: 30.31,
            url: 'a.svg',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'javascript_ff2534e419',
              resource_type: 'image',
            },
            createdAt: '2022-02-11T20:05:48.394Z',
            updatedAt: '2022-02-13T13:41:25.992Z',
          },
        },
      },
      metadata: {
        id: 4,
        name: 'Home',
        section_id: 'home',
        background: 'white',
      },
    });
    expect(data.component).toBe('section.section-two-columns');
    expect(data.title).toBe('January brings us Firefox 85');
    expect(data.text).toBe('abc');
    expect(data.srcImg).toBe('a.svg');
    expect(data.background).toBe('white');
    expect(data.sectionId).toBe('home');
  });

  it('should map section content with predetermined values', () => {
    const data = mapSectionContent();
    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.html).toBe('');
    expect(data.background).toBe('white');
    expect(data.sectionId).toBe('');
  });

  it('should map section content', () => {
    const data = mapSectionContent({
      id: 2,
      __component: 'section.section-content',
      title: 'News coverage and some surprises',
      content: '<p>abc</p>',
      metadata: {
        id: 5,
        name: 'intro',
        section_id: 'intro',
        background: 'white',
      },
    });
    expect(data.component).toBe('section.section-content');
    expect(data.title).toBe('News coverage and some surprises');
    expect(data.html).toBe('<p>abc</p>');
    expect(data.background).toBe('white');
    expect(data.sectionId).toBe('intro');
  });

  it('should map section text grid with predetermined values', () => {
    const data = mapSectionTextGrid();
    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe('white');
    expect(data.sectionId).toBe('');
  });

  it('should map section text grid', () => {
    const data = mapSectionTextGrid({
      __component: 'section.section-grid',
      title: 'My Grid',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias.',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'Lorem ipsum dolor sit,',
        },
        {
          title: 'Teste 2',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
        },
      ],
      metadata: {
        section_id: 'grid-one',
        background: 'white',
        color: 'navy',
      },
    });
    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('My Grid');
    expect(data.description).toBe(
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias.',
    );
    expect(data.background).toBe('white');
    expect(data.color).toBe('navy');
    expect(data.sectionId).toBe('grid-one');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('Lorem ipsum dolor sit,');
  });

  it('should map section image grid with predetermined values', () => {
    const data = mapSectionImageGrid();
    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe('white');
    expect(data.sectionId).toBe('');
  });

  it('should map section image grid', () => {
    const data = mapSectionImageGrid({
      __component: 'section.section-grid',
      title: 'Gallery',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias',
      image_grid: [
        {
          id: 6,
          image: {
            data: {
              attributes: {
                url: 'a.jpg',
                alternativeText: 'Imagem aleatoria 2',
              },
            },
          },
        },
      ],
      text_grid: [],
      metadata: {
        section_id: 'gallery',
        background: 'white',
      },
    });
    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('Gallery');
    expect(data.description).toBe(
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias',
    );
    expect(data.background).toBe('white');
    expect(data.sectionId).toBe('gallery');
    expect(data.grid[0].srcImg).toBe('a.jpg');
    expect(data.grid[0].altText).toBe('Imagem aleatoria 2');
  });

  it('should render a section with predetermined data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render a section', () => {
    const data = mapSections(pagesFakeData[0].attributes.sections);
    expect(data[0].component).toBe('section.section-content');
  });

  it('should render a section with fake data', () => {
    const data = mapSections([1, 2]);
    expect(data).toEqual([1, 2]);
  });

  it('should render a section grid', () => {
    const data = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);
  });

  it('should render empty text grids', () => {
    const data = mapSections([
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
    ]);
  });

  it('should render empty image grids', () => {
    const data = mapSections([
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
    ]);
  });

  it('should map section carrousel', () => {
    const data = mapSectionCarrousel({
      __component: 'section.section-carrousel',
      title: 'Carrousel',
      description: '',
      carrousel_item: [
        {
          id: 1,
          image_description: null,
          image: {
            data: {
              attributes: {
                alternativeText: 'imagem 1',
                url: 'abc.jpg',
              },
            },
          },
        },
        {
          id: 2,
          image_description: null,
          image: {
            data: {
              attributes: {
                alternativeText: 'imagem 2',
                url: 'bca.jpg',
              },
            },
          },
        },
      ],
      metadata: {
        section_id: 'carrousel',
        background: 'white',
        color: 'navy',
      },
    });
    expect(data.component).toBe('section.section-carrousel');
    expect(data.title).toBe('Carrousel');
    expect(data.description).toBe('');
    expect(data.background).toBe('white');
    expect(data.color).toBe('navy');
    expect(data.sectionId).toBe('carrousel');
    expect(data.flex[0].srcImg).toBe('abc.jpg');
    expect(data.flex[0].altText).toBe('imagem 1');
  });

  it('should map section carrousel with predetermined values', () => {
    const data = mapSectionCarrousel();
    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe('white');
    expect(data.color).toBe('navy');
    expect(data.sectionId).toBe('');
  });

  it('should render empty carrousel', () => {
    const data = mapSections([
      {
        __component: 'section.section-carrousel',
        carrousel_item: [{}],
      },
    ]);
  });
});
