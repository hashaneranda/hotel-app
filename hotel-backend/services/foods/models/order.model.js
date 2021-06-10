const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const orderItemSchema = mongoose.Schema({
  food: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Food",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    order: [orderItemSchema],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
orderSchema.plugin(toJSON);

/**
 * @typedef User
 */
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
