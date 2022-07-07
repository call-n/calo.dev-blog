import { allBlogs, allProjects, allSnippets, allReviews } from '.contentlayer/generated';

export function getBlogTags(data = allBlogs) {
  const values = data.flatMap((blog) => blog.tags);
  return Array.from(new Set(values));
}

export function getSnippetCategories(data = allSnippets) {
  const values = data.flatMap((snippet) => snippet.categories);
  return Array.from(new Set(values));
}

export function getReviewTags(data = allReviews) {
  const values = data.flatMap((blog) => blog.tags);
  return Array.from(new Set(values));
}

export const allFeaturedBlogs = allBlogs.filter((blog) => blog.featured);

export const allFeaturedProjects = allProjects.filter((project) => project.featured);

export const allFeaturedReviews = allReviews.filter((review) => review.featured);

