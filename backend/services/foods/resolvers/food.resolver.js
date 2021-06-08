const { combineResolvers } = require("graphql-resolvers");

// middleware
const { isAuthenticated } = require("../middleware/auth");

//services
const foodService = require("../services/food.service");

module.exports = {
  Food: {
    addedBy(food) {
      return { __typename: "User", id: food.addedBy };
    },
  },
  Query: {
    fetchAllFoods: combineResolvers(isAuthenticated, async (_, args) => {
      let foods = await foodService.getAllFood();

      return {
        success: !!foods,
        data: foods,
      };
    }),
  },
  Mutation: {
    createFood: combineResolvers(isAuthenticated, async (_, args, { me }) => {
      let food = await foodService.createFood({ ...args, addedBy: me.id });

      return {
        success: !!food,
        data: food,
      };
    }),
  },
};
