import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";
import getSortBy from "../utils/getSortBy";

const useRepositories = (sortBy, filterText) => {
  const variables = getSortBy(sortBy);
  const queryOptions = {
    ...variables,
    searchKeyword: filterText,
  };

  const { data, loading } = useQuery(GET_REPOSITORIES, {
    variables: queryOptions,
    fetchPolicy: "cache-and-network",
  });

  return { repositories: data ? data.repositories : undefined, loading };
};

export default useRepositories;
