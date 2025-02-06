export const SEARCH_CATEGORIES = {
  CATEGORY: "category",
  ARCHIVES: "archives",
  LIVES: "lives",
  TEACHERS: "teachers",
} as const;

type SearchCategoryKeys = keyof typeof SEARCH_CATEGORIES;
export type SearchCategoryValues = typeof SEARCH_CATEGORIES[SearchCategoryKeys];

export type SearchResponse = {
  [values in SearchCategoryValues]?: number;
};