import Head from 'next/head';

import {
  GridTwoColumn,
  GridTwoColumnProps,
} from '../../components/GridTwoColumn';
import { GridContent, GridContentProps } from '../../components/GridContent';
import { GridText, GridTextProps } from '../../components/GridText';
import { GridImage, GridImageProps } from '../../components/GridImage';
import { Carrousel, CarrouselProps } from '../../components/Carrousel';

import { Base } from '../Base';

import config from '../../config';
import { LogoLinkProps } from '../../components/LogoLink';
import { MenuLinkProps } from '../../components/MenuLink';

export type PageData = {
  title: string;
  slug: string;
  footerHtml: string;
  menu: LogoLinkProps & { links: MenuLinkProps[] };
  sections: SectionProps[];
};

export type Attributes = {
  attributes: PageData;
};

export type SectionProps =
  | GridImageProps
  | GridTextProps
  | GridTwoColumnProps
  | GridContentProps
  | CarrouselProps;

export type HomeProps = {
  data: Attributes[];
};

function Home({ data }: HomeProps) {
  // if (!data || !data.length) {
  //   return <PageNotFound />;
  // }

  const { menu, sections, footerHtml, slug, title } = data[0].attributes;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      <Head>
        <title>
          {title} | {config.siteName}
        </title>
      </Head>
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return (
            <GridTwoColumn key={key} {...(section as GridTwoColumnProps)} />
          );
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...(section as GridContentProps)} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...(section as GridTextProps)} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...(section as GridImageProps)} />;
        }

        if (component === 'section.section-carrousel') {
          return <Carrousel key={key} {...(section as CarrouselProps)} />;
        }
      })}
    </Base>
  );
}

export default Home;
