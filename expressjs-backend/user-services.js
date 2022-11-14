const mongoose = require("mongoose");
const User = require("./user");
mongoose.set("debug", true);

let connected = false;

mongoose
  .connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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
//module.exports.addUser = addUser;