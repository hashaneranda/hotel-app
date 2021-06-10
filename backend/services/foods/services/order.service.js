const { Order } = require("../models");

/**
 * Create a Order
 * @param {Object} body
 * @returns {Promise<Order>}
 */
const createOrder = async (body) => {
  const data = await Order.create(body);
  return data;
};

/**
 * Get Order by id
 * @param {ObjectId} id
 * @returns {Promise<Order>}
 */
const getOrderById = async (id) => {
  return Order.findById(id);
};

/**
 * Get Order by user
 * @param {ObjectId} userid
 * @returns {Promise<Order>}
 */
const getOrderByUser = async (user) => {
  return Order.find({ user }).populate("order.food");
};

/**
 * Get all Orders
 * @returns {Promise<Order>}
 */
const getAllOrder = async () => {
  return Order.find().populate("order.food");
};

module.exports = {
  createOrder,
  getOrderById,
  getAllOrder,
  getOrderByUser,
};
