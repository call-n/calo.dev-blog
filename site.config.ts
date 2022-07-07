export const tags = [
  'React.js',
  'TypeScipt',
  'JavaScript',
  'Next.js',
];

const shared = {
  name: 'call-n',
  repo: 'https://github.com/call-n/calo.dev-blog',
  editUrl: 'https://github.com/call-n/calo.dev-blog/tree/main/data',
  website: 'https://calo.dev',
  title:
    'call-n - Software Engineer, Designer and Gamer, lol',
  description:
    'Software Engineer passionate about New technology, the future and all the possibilities that comes with it.',
  image: 'https://calo.dev/static/images/banner.webp',
};

const siteConfig = {
  name: shared.name,
  image: shared.image,
  type: 'website',
  title: shared.title,
  titleTemplate: '%s - calo.dev',
  description: shared.description,
  siteUrl: shared.website,
  profiles: {
    github: 'https://github.com/call-n',
    twitter: 'https://twitter.com/calodev',
    email: 'mailto:calodev.contact@gmail.com',
  },
  repo: {
    url: shared.repo,
    editUrl: shared.editUrl,
  },
  twitter: {
    handle: '@calodev',
    site: '@calodev',
    cardType: 'summary_large_image',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: shared.website,
    title: shared.title,
    site_name: shared.name,
    description: shared.description,
    images: [
      {
        url: 'https://calo.dev/static/images/banner.webp',
        width: 1200,
        height: 630,
        alt: 'Calo - Software Engineer, Designer and Gamer, lol',
      },
    ],
  },
};

export default siteConfig;
