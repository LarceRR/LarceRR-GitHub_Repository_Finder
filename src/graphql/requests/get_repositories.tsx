import { gql } from "@apollo/client";

// GraphQL запрос
export const GET_REPOSITORIES = gql`
  query getRepositories ($request: String! $before: String $after: String) { 
  search(query: $request, type: REPOSITORY, first: 50 after: $after before: $before) {
    pageInfo {
      endCursor
      startCursor
      hasNextPage
      hasPreviousPage
    }
    repositoryCount
    edges {
      node {
        ... on Repository {
          name
          updatedAt
          forkCount
          stargazerCount
          primaryLanguage {
            name
          }
          languages(first: 5) {
            edges {
              node {
                name
              }
            }
          }
          licenseInfo {
            name
          }
          id
        }
      }
    }
  }
}`