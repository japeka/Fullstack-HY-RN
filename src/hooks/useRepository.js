import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";

import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  const [repository, setRepository] = useState();
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    variables: { id },
    //fetchPolicy: "cache-and-network",
    // onCompleted: (data) => {
    //   setRepository(data.repository);
    // },
  });

  useEffect(() => {
    if (error) return console.log("errors", error);
    if (data) {
      setRepository(data);
    }
  }, [data]);
  return { repository, loading, error };
};

export default useRepository;
