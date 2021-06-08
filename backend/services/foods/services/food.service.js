const { Food } = require("../models");

/**
 * Create a Food item
 * @param {Object} body
 * @returns {Promise<Food>}
 */
const createFood = async (body) => {
  const data = await Food.create(body);
  return data;
};

/**
 * Get Food item by id
 * @param {ObjectId} id
 * @returns {Promise<Food>}
 */
const getFoodById = async (id) => {
  return Food.findById(id);
};

/**
 * Get all Food s
 * @returns {Promise<Food>}
 */
const getAllFood = async () => {
  return Food.find();
};

module.exports = {
  createFood,
  getFoodById,
  getAllFood,
};
