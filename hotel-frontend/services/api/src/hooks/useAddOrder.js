import { gql, useMutation } from "@apollo/client";

export const mutation = gql`
  mutation createOrder($order: [OrderValue]!) {
    createOrder(order: $order) {
      success
      data {
        id
        user {
          name
        }
      }
    }
  }
`;

export default () => {
  const [func, ...rest] = useMutation(mutation, { errorPolicy: "all" });

  const newSelectPost = (order) => {
    func({
      variables: { order },
    });
  };

  return [newSelectPost, ...rest];
};
