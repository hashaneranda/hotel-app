const { combineResolvers } = require("graphql-resolvers");

// middleware
const { isAuthenticated } = require("../middleware/auth");

//services
const orderService = require("../services/order.service");

module.exports = {
  Order: {
    user(order) {
      return { __typename: "User", id: order.user };
    },
    food(order) {
      return { __typename: "Food", id: order.order.food };
    },
  },
  OrderItem: {
    food(food) {
      return { __typename: "Food", id: food.food };
    },
  },
  Query: {
    fetchAllOrders: combineResolvers(isAuthenticated, async (_, args) => {
      let orders = await orderService.getAllOrder();
      console.log({ orders });

      return {
        success: !!orders,
        data: orders,
      };
    }),
    fetchAllMyOrders: combineResolvers(
      isAuthenticated,
      async (_, args, { me }) => {
        let orders = await orderService.getOrderByUser(me.id);

        console.log("orders", orders[0].order);

        return {
          success: !!orders,
          data: orders,
        };
      }
    ),
  },
  Mutation: {
    createOrder: combineResolvers(isAuthenticated, async (_, args, { me }) => {
      let order = await orderService.createOrder({ ...args, user: me.id });

      return {
        success: !!order,
        data: order,
      };
    }),
  },
};
