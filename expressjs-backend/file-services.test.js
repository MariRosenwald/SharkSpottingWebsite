const FileSchema = require("./file").FileSchema;
const fileServices = require("./file-services");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;
let conn;
let fileModel;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  conn = await fileServices.getDbConnection(uri);
  fileModel = conn.model("File", FileSchema);
});

afterAll(async () => {
  await conn.dropDatabase();
  await conn.close();
  await mongoServer.stop();
});

beforeEach(async () => {
  let dummyFile = {
    title: "sharks title",
    location: "shark location",
    description: "shark test"
  };
  let result = new fileModel(dummyFile);
  await result.save();

  dummyFile = {
    title: "boats title",
    location: "boats location",
    description: "boat test"
  };
  result = new fileModel(dummyFile);
  await result.save();
});

afterEach(async () => {
  await fileModel.deleteMany();
});

// getUsers

test("Fetching all users", async () => {
  const files = await fileServices.getAllFiles();
  expect(files).toBeDefined();
  expect(files.length).toBeGreaterThan(0);
});

test("Adding a valid file", async () => {
    const dummyFile = {
      title: "sharks title test",
      location: "shark location test",
      description: "shark test 2"
    };
    const result = await fileServices.addFile(dummyFile);
    expect(result).toBeTruthy();
    expect(result.title).toBe(dummyFile.title);
    expect(result.location).toBe(dummyFile.location);
    expect(result.description).toBe(dummyFile.description);
    expect(result).toHaveProperty("_id");
})