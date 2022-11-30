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
  };
  let result = new userModel(dummyUser);
  await result.save();

  dummyUser = {
    email: "peterpan@neverland.com",
    pwd: "fly",
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

test("Fetching users by email", async () => {
  const userEmail = "harrypotter@hogwarts.com";
  const users = await userServices.getUsers(userEmail);
  expect(users).toBeDefined();
  expect(users.length).toBeGreaterThan(0);
  users.forEach((user) => expect(user.email).toBe(userEmail));
});

// addUser

test("Adding a valid user", async () => {
    const dummyUser = {
        email: "johnoliver@tonightshow.com",
        pwd: "brittan",
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
    };
    const result = await userServices.addUser(dummyUser);
    expect(result).toBeFalsy();
})

test("Adding a token to user", async () => {
  const email = "harrypotter@hogwarts.com";
  const token = "example_token" 
  await userServices.updateUserToken(email, token);
  const users = await userServices.getUsers(email);
  expect(users[0].token).toBeDefined();
  expect(users[0].token).toBe(token);
})