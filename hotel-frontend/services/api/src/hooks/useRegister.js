import { gql, useMutation } from "@apollo/client";

export const mutation = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
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
  const [func, ...rest] = useMutation(mutation, { errorPolicy: "all" });

  const newSelectPost = (name, email, password) => {
    func({
      variables: { name, email, password },
    });
  };

  return [newSelectPost, ...rest];
};
