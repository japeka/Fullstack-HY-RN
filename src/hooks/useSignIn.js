import { useMutation } from "@apollo/client";

import { SIGNIN } from "../graphql/mutations";

const useSignIn = () => {
  const [authenticate, result] = useMutation(SIGNIN, {
    onError: (error) => {
      console.log("ERROR", error.graphQLErrors[0].message);
    },
  });

  const signIn = async ({ username, password }) => {
    const data = authenticate({ variables: { username, password } });
    return data;
  };

  return [signIn, result];
};

export default useSignIn;
