const mongoose = require("mongoose");
const RequestSchema = require("./request").RequestSchema;
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
    

async function getAllRequests() {
  const requestModel = (await getDbConnection()).model("Request", RequestSchema);
  let result;
  result = await requestModel.find();
  return result;
}

async function addRequest(request) {
  const requestModel = (await getDbConnection()).model("Request", RequestSchema);
  const requestToAdd = new requestModel(request);
  const savedRequest = await requestToAdd.save();
  return savedRequest;
}

async function deleteRequest(requestLocation) {
  const requestModel = (await getDbConnection()).model("Request", RequestSchema);
  await requestModel.deleteOne({location: requestLocation});
}

module.exports = { getAllRequests, addRequest, getDbConnection, deleteRequest };