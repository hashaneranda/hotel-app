const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const foodSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
foodSchema.plugin(toJSON);

/**
 * @typedef User
 */
const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
