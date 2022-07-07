import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from '.contentlayer/data';

async function generate() {
  const feed = new RSS({
    title: 'call-n',
    site_url: 'https://calo.dev',
    feed_url: 'https://calo.dev/feed.xml',
  });

  allBlogs.map((blog) => {
    feed.item({
      title: blog.title,
      url: `https://calo.dev/blog/${blog.slug}`,
      date: blog.publishedAt,
      description: blog.description,
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

console.log(allBlogs)

generate();
