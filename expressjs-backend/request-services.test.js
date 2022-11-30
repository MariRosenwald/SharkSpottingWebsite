const RequestSchema = require("./request").RequestSchema;
const requestServices = require("./request-services");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;
let conn;
let requestModel;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  conn = await requestServices.getDbConnection(uri);
  requestModel = conn.model("Request", RequestSchema);
});

afterAll(async () => {
  await conn.dropDatabase();
  await conn.close();
  await mongoServer.stop();
});

beforeEach(async () => {
  let dummyRequest = {
    request: "sharks title",
    description: "shark test"
  };
  let result = new requestModel(dummyRequest);
  await result.save();

  dummyRequest = {
    request: "boats title",
    description: "boat test"
  };
  result = new requestModel(dummyRequest);
  await result.save();
});

afterEach(async () => {
  await requestModel.deleteMany();
});

// getUsers

test("Fetching all requests", async () => {
  const requests = await requestServices.getAllRequests();
  expect(requests).toBeDefined();
  expect(requests.length).toBeGreaterThan(0);
});

test("Adding a valid request", async () => {
    const dummyRequest = {
      request: "sharks title test",
      description: "shark test 2"
    };
    const result = await requestServices.addRequest(dummyRequest);
    expect(result).toBeTruthy();
    expect(result.request).toBe(dummyRequest.request);
    expect(result.description).toBe(dummyRequest.description);
    expect(result).toHaveProperty("_id");
})

test("Deleting a request", async () => {
  await requestServices.deleteRequest("boats location");
  for (const request in await requestServices.getAllRequests()) {
    expect(request.location == "boats location").toBeFalsy();
  }
});