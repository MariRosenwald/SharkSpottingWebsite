const mongoose = require("mongoose");
//const User = require("./user").User;
const UserSchema = require("./user").UserSchema;
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
    

async function getUsers(name) {
  const userModel = (await getDbConnection()).model("User", UserSchema);
  let result;
  if (name === undefined) {
    result = await userModel.find();
  } else {
    result = await findUserByName(name);
  }
  return result;
}

async function addUser(user) {
  const userModel = (await getDbConnection()).model("User", UserSchema);
  try {
    const userToAdd = new userModel(user);
    const savedUser = await userToAdd.save();
    return savedUser;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function findUserByName(name) {
  const userModel = (await getDbConnection()).model("User", UserSchema);
  return await userModel.find({ email: name });
}

module.exports = { getUsers, addUser, getDbConnection };