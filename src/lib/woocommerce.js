class WooGraphQLClient {
  static getProductsQuery(limit = 10) {
    return `query GetProducts {
      products(first: ${limit}) {
        nodes {
          id
          databaseId
          name
          slug
          ... on SimpleProduct { price regularPrice }
        }
      }
    }`;
  }
}
if (typeof module !== 'undefined') module.exports = WooGraphQLClient;
