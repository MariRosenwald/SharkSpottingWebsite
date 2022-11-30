const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema(
  {
    request: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "request_list" }
);

const Request = mongoose.model("Request", RequestSchema);

module.exports = { Request, RequestSchema };