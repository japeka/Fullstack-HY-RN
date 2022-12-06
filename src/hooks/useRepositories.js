import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";
import getSortBy from "../utils/getSortBy";

const useRepositories = (sortBy) => {
  const sortVariables = getSortBy(sortBy);

  const { data, loading } = useQuery(GET_REPOSITORIES, {
    variables: sortVariables,
    fetchPolicy: "cache-and-network",
  });

  return { repositories: data ? data.repositories : undefined, loading };
};

export default useRepositories;
