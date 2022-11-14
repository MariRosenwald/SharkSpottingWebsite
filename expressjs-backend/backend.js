const cors = require('cors');
const express = require('express');
const app = express();
const port = 5050;
const userServices = require('./user-services');

const users = { 
    users_list :
    [
       { 
          email : 'pkmarsh@calpoly.edu',
          pwd : 'dog'
       },
       {
          email : 'mari@mari.com',
          pwd : 'cat'
       } 
    ]
}

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// app.get('/user', (req, res) => {
//     res.send(data);
// });
  
// app.get('/login', (req, res) => {
//     res.send(users);
// });

app.get('/auth', async (req, res) => {
    const email = req.query.email;
    const pwd = req.query.pwd;
    if (email === undefined) {
        res.status(500).send("No email specified").end();
    } else if (pwd === undefined) {
        res.status(500).send('No password specified').end();
    }
    
    else {
        let authenticated = false
        let filteredUsers = await userServices.getUsers(email);
        
        if (filteredUsers === undefined) {
            // Mongodb is not conected, load users from backend.js for testing purposes
            console.log("mongodb is not connected, loading users from backend.js")
            filteredUsers = users['users_list'].filter((user) => user['email'] === email);
        }

        if (filteredUsers.length < 1) {
            res.status(404).send(`No user '${email}' found`).end();
        }
        let user = filteredUsers[0]
        let user_pwd = user.pwd
        if (user_pwd == pwd) {
            authenticated = true
        }
        res.send(authenticated).end();
    }   
});

app.post('/auth', async (req, res) => {
    const user = req.body;
    const savedUser = await userServices.addUser(user);
    if (savedUser)
        res.status(201).send(savedUser);
    else
        res.status(500).end();
});

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

// eslint-disable-next-line
app.listen(process.env.PORT || port, () => {
    // eslint-disable-next-line
    if (process.env.PORT) {
        // eslint-disable-next-line
        console.log(`REST API is listening on port ${process.env.PORT}`);
    }
    else {
        console.log(`REST API is listening on port ${port}`);
    }
});
