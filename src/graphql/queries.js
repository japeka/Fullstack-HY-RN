import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          name
          language
          ownerAvatarUrl
          description
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;