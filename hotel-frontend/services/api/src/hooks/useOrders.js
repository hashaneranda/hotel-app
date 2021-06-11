import { gql, useLazyQuery } from "@apollo/client";

export const query = gql`
  query fetchAllMyOrders {
    fetchAllMyOrders {
      success
      data {
        id
        createdAt
        order {
          food {
            id
            name
            price
            image
          }
          quantity
        }
        user {
          name
        }
      }
    }
  }
`;

export default () => {
  const [func, ...rest] = useLazyQuery(query);

  const newQuery = () => {
    func({
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  };

  return [newQuery, ...rest];
};
