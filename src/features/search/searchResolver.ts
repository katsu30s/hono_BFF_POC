import {SEARCH_CATEGORIES, type SearchResponse} from "./searchTypes.ts";

export const searchQueryResolvers = {
  Query: {
    getSearchCount: async (_: any): Promise<SearchResponse> => {
      return {
        [SEARCH_CATEGORIES.CATEGORY]: 10,
        [SEARCH_CATEGORIES.ARCHIVES]: 20,
        [SEARCH_CATEGORIES.LIVES]: 30,
        [SEARCH_CATEGORIES.TEACHERS]: 40,
      }
    },
    getEachCount: async (_: any, { query }: { query: string }): Promise<number> => {
      // queryによって実際は変動する
      return 15;
    },
    getCourseCountByKeyword: async (_: any, { query }: { query: string }): Promise<number> => {
      return 10;
    },
    getArchiveCountByKeyword: async (_: any, { query }: { query: string }): Promise<number> => {
      return 20;
    }
  },
};
