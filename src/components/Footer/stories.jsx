import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<a href="https://marcoshirazawa.netlify.app/">Feito com ❤ por Marcos Hirazawa</a>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
