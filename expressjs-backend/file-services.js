const mongoose = require("mongoose");
const FileSchema = require("./file").FileSchema;
const dotenv = require("dotenv");
mongoose.set("debug", true);

dotenv.config();

let mongoURL = "mongodb+srv://" +
  process.env.MONGO_USER +
  ":" +
  process.env.MONGO_PWD +
  "@" +
  process.env.MONGO_CLUSTER +
  "/" +
  process.env.MONGO_DB +
  "?retryWrites=true&w=majority";

let dbConnection;

async function getDbConnection(local_url) {
  if (!dbConnection) {
    if (local_url) {
      mongoURL = local_url;
    }
    dbConnection = await mongoose.createConnection(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  }
  return dbConnection;
}
    

async function getAllFiles() {
  const fileModel = (await getDbConnection()).model("File", FileSchema);
  let result;
  result = await fileModel.find();
  return result;
}

async function addFile(file) {
  const fileModel = (await getDbConnection()).model("File", FileSchema);
  const fileToAdd = new fileModel(file);
  const savedFile = await fileToAdd.save();
  return savedFile;
  /*try {
    const fileToAdd = new fileModel(file);
    const savedFile = await fileToAdd.save();
    return savedFile;
  } catch (error) {
    console.log(error);
    return false;
  }*/
}

async function deleteFile(fileLocation) {
  const fileModel = (await getDbConnection()).model("File", FileSchema);
  await fileModel.deleteOne({location: fileLocation});
}

module.exports = { getAllFiles, addFile, getDbConnection, deleteFile };