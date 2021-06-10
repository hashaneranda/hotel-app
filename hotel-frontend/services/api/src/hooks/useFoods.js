import { gql, useLazyQuery } from "@apollo/client";

export const query = gql`
  query fetchAllFoods {
    fetchAllFoods {
      success
      data {
        name
        price
        id
        image
        addedBy {
          name
          email
        }
      }
    }
  }
`;

export default () => {
  const [func, ...rest] = useLazyQuery(query);

  const newFuncQuery = () => {
    func({
      errorPolicy: "all",
    });
  };

  return [newFuncQuery, ...rest];
};
