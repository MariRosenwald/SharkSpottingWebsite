const cors = require('cors');
const express = require('express');
const app = express();
const port = 5050;
const userServices = require('./user-services');
const uuid = require('uuid');

// Setup

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || port, () => {
    if (process.env.PORT) {
        console.log(`REST API is listening on port ${process.env.PORT}`);
    }
    else {
        console.log(`REST API is listening on port ${port}`);
    }
});

// Data (for testing)

const users = { 
    users_list :
    [
       { 
          email : 'pkmarsh@calpoly.edu',
          pwd : 'dog',
          admin : false
       },
       {
          email : 'mari@mari.com',
          pwd : 'cat',
          admin : true
       } 
    ]
}


const requests = {
  request_list: []
};

const data = {
    data_list: [
      {
        title: 'shark pics',
        location: 'https://google.com',
        description: 'test'
      },
      {
        title: 'boat pics',
        location: 'https://www.yahoo.com/?guccounter=1',
        description: 'backend validation'
      }
    ]
  };

// API Endpoints

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/user', (req, res) => {
    res.send(data);
});
  
app.get('/login', (req, res) => {
    res.send(users);
});


app.get('/requests', (req, res) => {
  res.send(requests);
});

app.get('/auth', async (req, res) => {
    const email = req.query.email;
    const pwd = req.query.pwd;
    if (email === undefined) {
        res.status(500).send("No email specified").end();
    } else if (pwd === undefined) {
        res.status(500).send('No password specified').end();
    }
    else {
        let auth, user
        try {
            //eslint-disable-next-line
            [ auth, user ] = await authenticate(email, pwd)
            res.status(201).send(auth).end();
        }
        catch {
            res.status(404).send(`No user '${email}' found`).end();
        }
    }   
});

app.post('/requests', (req, res) => {
  const request = req.body;
  const updatedRequest = addRequest(request);
  res.status(201).send(updatedRequest).end();
});

function addRequest(request) {
  const requestWithID = {
    name: request.name,
    description: request.description
  };
  requests['request_list'].push(requestWithID);
  return requestWithID;
}

app.post('/auth', async (req, res) => {
    const user = req.body;
    const savedUser = await userServices.addUser(user);
    if (savedUser)
        res.status(201).send(savedUser);
    else
        res.status(500).end();
});

// Helper functions

async function authenticate(email, pwd) {
    let authenticated = false

    let filteredUsers = await userServices.getUsers(email);
        
    if (filteredUsers === undefined) {
        // Mongodb is not conected, load users from backend.js for testing purposes
        console.log("mongodb is not connected, loading users from backend.js")
        filteredUsers = users['users_list'].filter((user) => user['email'] === email);
    }

    if (filteredUsers.length < 1) {
        throw new Error(`User not found`)
    }

    let user = filteredUsers[0]
    let user_pwd = user.pwd
    if (user_pwd == pwd) {
        authenticated = true
    }

    return [ authenticated, user ]
}



// Might use later

/*
function generateRandomUniqueID() {
    allowedCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    id = "";
    id_length = 6;
    do {
        for (i = 0; i < id_length; i++) {
            index = Math.floor(Math.random()*allowedCharacters.length);
            id += allowedCharacters[index];
        }
    } while (users.users_list.filter(user => user.id == id).length > 0)
    return id;
}

function addUser(user){
    user['id'] = generateRandomUniqueID();
    users['users_list'].push(user);
    return user;
}

app.delete('/users', (req, res) => {
    const id = req.query.id;
    if (id === undefined) {
        res.status(500).send("No ID specified").end();
    } else {
        console.log(users.users_list);
        index = users.users_list.findIndex(user => user.id == id);
        if (index == -1) { 
            res.status(404).statusMessage(`ID "${id}" does not exist`).end();
        }
        console.log(index);
        users.users_list.splice(index, 1);
        console.log(users.users_list);
    }
    res.status(204).end();
});
*/

