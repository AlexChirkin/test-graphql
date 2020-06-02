import gql from "graphql-tag";

const GET_POOL = gql`
  query($qs: String!, $before: String, $after: String, $first: Int, $last: Int) {
    search(query: $qs, type: REPOSITORY, before: $before, after: $after, first: $first, last: $last) {
      repositoryCount
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          ... on Repository {
            id
            name
            url
            primaryLanguage {
              name
            }
            licenseInfo {
              name
              key
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`;

const GET_LICENSE = gql`
  query {
    licenses {
      name
      key
    }
  }
`;

export { GET_POOL, GET_LICENSE };
