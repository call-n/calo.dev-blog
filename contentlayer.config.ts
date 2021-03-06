import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';
import { toKebabCase } from './lib/string-utils';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import siteConfig from './site.config';

const computedFields: ComputedFields = {
  readingTime: {
    type: 'json',
    resolve: (doc) => readingTime(doc.body.raw, { wordsPerMinute: 300 }),
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
  editUrl: {
    type: 'string',
    resolve: (doc) => `${siteConfig.repo.editUrl}${doc._id}`,
  },
  tweetUrl: {
    type: 'string',
    resolve: (doc) => {
      const slug = doc._raw.sourceFileName.replace(/\.mdx$/, '');
      return `https://twitter.com/intent/tweet?${new URLSearchParams({
        url: `https://calo.dev/${doc.type.toLowerCase()}/${slug}`,
        text: `I just read "${doc.title}" by @calodev\n\n`,
      })}`;
    },
  },
  params: {
    type: 'list',
    resolve: (doc) => doc._raw.flattenedPath.split('/'),
  },
};

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    featured: { type: 'boolean' },
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
  },
  computedFields: {
    ...computedFields,
    ogImageUrl: {
      type: 'string',
      resolve: (doc) => `https://calo.dev/static/images/og/${toKebabCase(doc.title)}.png`,
    },
  },
}));

const Review = defineDocumentType(() => ({
  name: 'Review',
  filePathPattern: 'reviews/*.mdx',
  contentType: 'mdx',
  fields: {
    featured: { type: 'boolean' },
    format: { type: 'string' },
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    image: { type: 'string', required: true },
    url: { type: 'string', required: true },
    product: { type: 'string' },
    tags: { type: 'list', required: true, of: { type: 'string' } },
  },
  computedFields,
}));

const Snippet = defineDocumentType(() => ({
  name: 'Snippet',
  filePathPattern: 'snippets/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    logo: { type: 'string', required: true },
    categories: { type: 'list', of: { type: 'string', required: true } },
  },
  computedFields,
}));

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/*.mdx',
  contentType: 'mdx',
  fields: {
    featured: { type: 'boolean' },
    title: { type: 'string', required: true },
    description: { type: 'string' },
    github: { type: 'string' },
    website: { type: 'string' },
    metadata: { type: 'json' },
    image: { type: 'string' },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog, Review, Snippet, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          test: ['h2', 'h3', 'h4', 'h5', 'h6'],
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});

export default contentLayerConfig;
