const cors = require('cors');
const express = require('express');
const app = express();
const port = 5050;
const userServices = require('./user-services');
const fileServices = require('./file-services');

// Setup

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || port, () => {
  if (process.env.PORT) {
    console.log(`REST API is listening on port ${process.env.PORT}`);
  } else {
    console.log(`REST API is listening on port ${port}`);
  }
});

const requests = {
  request_list: []
};

// API Endpoints

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// User

// Requires admin authorization
app.get('/user', async (req, res) => {
  const email = req.query.email;
  const token = req.query.token;

  if (!await checkToken(email, token, true)) {
    // 401 unauthorized
    res.status(401).end();
  } else {

    try {
      let users = await userServices.getUsers();
      res.status(200).send(users).end()
    }
    catch {
      res.status(404).send('Could not connect').end();
    }
  }
});

app.post('/user', async (req, res) => {
  const newUserEmail = req.body.email;
  const email = req.query.email;
  const token = req.query.token;
  
  if (!await checkToken(email, token, true)) {
    // 401 unauthorized
    res.status(401).end();
  } else {
    console.log(newUserEmail)
    if (newUserEmail === undefined || newUserEmail === "") {
      res.status(500).send("No email specified").end();
    } else {
      const newUser = {
        email: newUserEmail,
        pwd: generatePassword(),
        admin: false
      };
      const user = await userServices.addUser(newUser);
      if (user) {
        res.status(200).end();
      } else {
        res.status(500).send(`Could not create user '${newUserEmail}'`).end();
      }
      
    }
  }
})

app.delete('/user', async (req, res) => {
  const emailToRemove = req.body.emailToRemove;
  const email = req.body.email;
  const token = req.body.token;

  if (!await checkToken(email, token, true)) {
    // 401 unauthorized
    res.status(401).end();
  } else {
    await userServices.deleteUser(emailToRemove);
  }
  res.status(200).end();
});

app.get('/requests', (req, res) => {
  res.send(requests);
});

// Files

app.get('/files', async (req, res) => {

  const email = req.query.email;
  const token = req.query.token;

  if (!await checkToken(email, token)) {
    // 401 unauthorized
    res.status(401).end();
  } else {

    try {
      let files = await fileServices.getAllFiles();
      res.status(200).send(files).end()
    }
    catch {
      res.status(404).send('Could not connect').end();
    }
  }
});

app.post('/files', async (req, res) => {
  const file = req.body;
  const savedFile = await fileServices.addFile(file);
  if (savedFile) res.status(201).send(savedFile);
  else res.status(500).end();
});

app.delete('/files', async (req, res) => {
  const fileLocation = req.body.location;
  const email = req.body.email;
  const token = req.body.token;

  if (!await checkToken(email, token, true)) {
    // 401 unauthorized
    res.status(401).end();
  } else {
    await fileServices.deleteFile(fileLocation);
  }
  res.status(200).end();
});

// Authorization

app.get('/auth', async (req, res) => {

  // Required query parameters
  const email = req.query.email;
  const pwd = req.query.pwd;

  // Check required query parameters
  if (email === undefined) {
    res.status(500).send('No email specified').end();
  } else if (pwd === undefined) {
    res.status(500).send('No password specified').end();
  } else {
    // Email and pwd are both defined
    let auth;
    try {
      auth = await checkPassword(email, pwd);
      if (auth) {

        // Generate and send back an access token to be stored as a cookie
        let token = generateToken();
        await userServices.updateUserToken(email, token);

        if (await userServices.isAdmin(email)) {
          // User is an admin
          res.status(202).send(token).end();
        } else {
          // User is not an admin
          res.status(200).send(token).end();
        }

      } else {

        // Unauthorized (401)
        res.status(401).send('Incorrect password').end();
      }
    } catch {
      res.status(404).send(`No user '${email}' found`).end();
    }
  }
});

// Requests

app.get('/requests', (req, res) => {
  res.send(requests);
});

app.post('/requests', (req, res) => {
  const request = req.body;
  const updatedRequest = addRequest(request);
  res.status(201).send(updatedRequest).end();
});

// Helper functions

function addRequest(request) {
  const requestWithID = {
    name: request.name,
    description: request.description
  };
  requests['request_list'].push(requestWithID);
  return requestWithID;
}

async function checkPassword(email, pwd) {

  let user = await userServices.getUser(email);

  if (user === undefined) {
    // no user with a matching email was found
    return false;
  }

  return user.pwd == pwd;
}

async function checkToken(email, token, admin = false) {
  if (email == undefined || token == undefined) {
    return false;
  }
  let user = await userServices.getUser(email);
  if (user === undefined) {
    // no user with a matching email was found
    return false;
  }
  if (admin) {
    console.log(user.admin)
    console.log(user.token)
    console.log(token)
    return user.token === token && user.admin;
  }
  return user.token === token;
}

function generateToken() {
    return randomString(30);
}

function generatePassword() {
  return randomString(8);
}

function randomString(length) {
  const  allowedCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomString = "";
  for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random()*allowedCharacters.length);
      randomString += allowedCharacters[index];
  }
  return randomString;
}

// function randompass(){
//   characters = "zxcvbnm,./asdfghjkl;'qwertyuiop[]`1234567890-=ZXCVBNM<>?ASDFGHJKL:QWERTYUIOP{}|!@#$%^&*()_+"; 
//   pass = ""; 
//   pass_len = 6; 
  
//   for(i = 0; i < pass_len; i++){
//     ix = Math.floor(Math.random()*characters.length); 
//     pass+=characters[ix]; 
//   }

//   return pass
// }

