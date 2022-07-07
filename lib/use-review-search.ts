import { allReviews } from '.contentlayer/generated';
import { useMemo } from 'react';
import { getReviewTags } from './contentlayer-utils';
import search from './match-sorter';
import useSearchParams from './use-search-params';

export default function useReviewSearch() {
  const { setParams, searchString, addFilter, removeFilter, filters, setFilters } =
    useSearchParams();

  const results = useMemo(() => {
    return search(allReviews, ['title', 'description', 'tags', 'host'], searchString);
  }, [searchString]);

  const resultsByTags = useMemo(() => {
    if (filters.length === 0) return results;
    return results.filter((result) => result.tags.some((tag) => filters.includes(tag)));
  }, [results, filters]);

  return {
    isEmptyResult: resultsByTags.length === 0,
    results: resultsByTags,
    setParams,
    addTag: addFilter,
    removeTag: removeFilter,
    defaultValue: searchString || '',
    tags: getReviewTags(resultsByTags),
    allTags: getReviewTags(),
    filters,
  };
}
