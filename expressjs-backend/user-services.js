const mongoose = require("mongoose");
const User = require("./user");
const dotenv = require("dotenv");
mongoose.set("debug", true);

let connected = false;

dotenv.config();

mongoose
.connect(
  "mongodb+srv://" +
    process.env.MONGO_USER +
    ":" +
    process.env.MONGO_PWD +
    "@" +
    process.env.MONGO_CLUSTER +
    "/" +
    process.env.MONGO_DB +
    "?retryWrites=true&w=majority",
  // "mongodb://localhost:27017/users",
  {
    useNewUrlParser: true, //useFindAndModify: false,
    useUnifiedTopology: true,
  }
)
  .then(() => {
    connected = true
  })
  .catch((error) => console.log(error));

async function getUsers(name) {
  if (connected) {
    let result;
    if (name === undefined) {
      result = await User.find();
    } else {
      result = await findUserByName(name);
    }
    return result;
  }
}

async function addUser(user) {
  if (connected) {
    try {
      const userToAdd = new User(user);
      const savedUser = await userToAdd.save();
      return savedUser;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

async function findUserByName(name) {
  if (connected) {
    return await User.find({ email: name });
  }
}

module.exports = { getUsers, addUser };