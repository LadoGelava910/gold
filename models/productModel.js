const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    weight: {
      type: String,
      required: true,
      trim: true,
    },
    prob: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    // images: {
    //   type: Object,
    //   required: true,
    // },
    images: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    sold: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, //important
  }
);

module.exports = mongoose.model("Products", productSchema);
