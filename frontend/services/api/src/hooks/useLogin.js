import { gql, useLazyQuery } from "@apollo/client";

export const query = gql`
  query loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      success
      token {
        token
        expires
      }
      user {
        id
        name
        email
      }
    }
  }
`;

export default () => {
  const [func, ...rest] = useLazyQuery(query);

  const newloginQuery = (email, password) => {
    func({
      variables: { email, password },
      errorPolicy: "all",
    });
  };

  return [newloginQuery, ...rest];
};
