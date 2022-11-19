import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (error) return console.log("errors", error);
    if (data) setRepositories(data);
  }, [data]);

  return { repositories, loading };
};

export default useRepositories;
