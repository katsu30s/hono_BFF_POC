export const searchTypeDefs = `#graphql
  type SearchCountResponse {
    category: Int
    archives: Int
    lives: Int
    teachers: Int
  }

  type Query {
    getSearchCount: SearchCountResponse
    getEachCount: Int
    getCourseCountByKeyword: Int
    getArchiveCountByKeyword: Int
  }
`;
