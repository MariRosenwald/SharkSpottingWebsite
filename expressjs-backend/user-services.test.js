const UserSchema = require("./user").UserSchema;
const userServices = require("./user-services");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;
let conn;
let userModel;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  conn = await userServices.getDbConnection(uri);
  userModel = conn.model("User", UserSchema);
});

afterAll(async () => {
  await conn.dropDatabase();
  await conn.close();
  await mongoServer.stop();
});

beforeEach(async () => {
  let dummyUser = {
    email: "harrypotter@hogwarts.com",
    pwd: "wizard",
    admin: true
  };
  let result = new userModel(dummyUser);
  await result.save();

  dummyUser = {
    email: "peterpan@neverland.com",
    pwd: "fly",
    admin: false
  };
  result = new userModel(dummyUser);
  await result.save();
});

afterEach(async () => {
  await userModel.deleteMany();
});

// getUsers

test("Fetching all users", async () => {
  const users = await userServices.getUsers();
  expect(users).toBeDefined();
  expect(users.length).toBeGreaterThan(0);
});

// getUser

test("Fetching user by email", async () => {
  const userEmail = "harrypotter@hogwarts.com";
  const user = await userServices.getUser(userEmail);
  expect(user).toBeDefined();
  expect(user.email).toBe(userEmail);
});

test("Try fetching user that doesnt exist", async () => {
  const userEmail = "randomemail@randomemails.com";
  const user = await userServices.getUser(userEmail);
  expect(user).toBeUndefined();
});

// addUser

test("Adding a valid user", async () => {
    const dummyUser = {
        email: "johnoliver@tonightshow.com",
        pwd: "brittan",
        admin: false
    };
    const result = await userServices.addUser(dummyUser);
    expect(result).toBeTruthy();
    expect(result.email).toBe(dummyUser.email);
    expect(result.pwd).toBe(dummyUser.pwd);
    expect(result).toHaveProperty("_id");
})

test("Adding an invalid user", async () => {
    const dummyUser = {
        email: "harrypotter@hogwarts.com",
        pwd: "password",
        admin: true
    };
    const result = await userServices.addUser(dummyUser);
    expect(result).toBeFalsy();
})

// isAdmin

test("Checking if a valid user is an admin", async () => {
  let isAdmin = await userServices.isAdmin("harrypotter@hogwarts.com");
  expect(isAdmin).toBeTruthy();
  isAdmin = await userServices.isAdmin("peterpan@neverland.com");
  expect(isAdmin).toBeFalsy();
});

test("Looking up a nonexistent user with isAdmin", async () => {
  let isAdmin = await userServices.isAdmin("randomuser@random.com");
  expect(isAdmin).toBeFalsy()
});

// updateUserToken

test("Updating/adding a users token", async () => {
  const email = "harrypotter@hogwarts.com";
  const token = "example_token" 
  await userServices.updateUserToken(email, token);
  const users = await userServices.getUsers(email);
  expect(users[0].token).toBeDefined();
  expect(users[0].token).toBe(token);
})