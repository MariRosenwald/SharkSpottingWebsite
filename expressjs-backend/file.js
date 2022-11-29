const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
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
  { collection: "file_list" }
);

const File = mongoose.model("File", FileSchema);

module.exports = { File, FileSchema };