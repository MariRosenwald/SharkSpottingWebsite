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
    

async function getUsers() {
  const userModel = (await getDbConnection()).model("User", UserSchema); 
  return await userModel.find();
}

async function getUser(email) {
  let filteredUsers = await findUserByEmail(email);
  if (filteredUsers.length > 0) {
    // return the first user with that email
    return filteredUsers[0];
  }
  // if no user is found return undefined
  return undefined;
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

async function isAdmin(email) {
  let user = await getUser(email);
  if (user == undefined) {
    return false;
  }
  return user.admin;
}

async function findUserByEmail(email) {
  const userModel = (await getDbConnection()).model("User", UserSchema);
  return await userModel.find({ email: email });
}

async function updateUserToken(email, token) {
  const userModel = (await getDbConnection()).model("User", UserSchema);
  await userModel.updateOne({email: email}, {token: token});
}

module.exports = { getUsers, addUser, getDbConnection, updateUserToken, getUser, isAdmin };