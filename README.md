![main](https://github.com/MariRosenwald/SharkSpottingWebsite/actions/workflows/react-frontend.js.yml/badge.svg)
![main](https://github.com/MariRosenwald/SharkSpottingWebsite/actions/workflows/expressjs-backend.js.yml/badge.svg)

# **Description**

This website is designed to operate as the central database and reference point for the Drones for Marine Science and Agriculture research team at Cal Poly. It allows the team to release information about current developments and discoveries by the team for public viewing. It also gives team members an easier way to access files and resources for training models that can be used to detect sharks and cows more accurately. There is already a basic landing page for the team, but this adds greater functionality and will allow the team to have a dynamic resource that can change as needed for future use. 


To find our original UI prototpe, [click here](https://www.figma.com/file/IAe6rOpFXjs3MEIfuflc56/Shark-Spotting-Website-UI-Prototype).

To access our wiki, [click here](https://github.com/MariRosenwald/SharkSpottingWebsite/wiki).


# **How to Run**

- Install dependencies for server (backend)

  ```bash
  cd expressjs-backend
  npm install
  ```

- Install dependencies for client (frontend)

  ```bash
  cd react-frontend
  npm install
  ```
 
 - Database Access
 
   If running locally, create a .env file in your main expressjs-backend directory and add the following:
 
   ```bash
   MONGO_USER=your_username
   MONGO_PWD=your_password
   MONGO_DB=users
   MONGO_CLUSTER=sharkspotting.ulo0c7e.mongodb.net
   ```
   This information can be found on the mongoDB website when accepting the access invite via email

- Start the frontend

  ```bash
  cd react-frontend
  npm start
  ```

- Start the backend

  ```bash
  cd expressjs-backend
  npm start
  ```

- The website should now be running

- Run linter

```bash
cd react-frontend
npm run lint
```

- Run prettier text formatter

```bash
cd react-frontend
npm run format
```

## **Folder Structure**

| Name                     | Description                                                     |
| ------------------------ | --------------------------------------------------------------- |
| **expressjs-backend**    | Source code for server (Express)                                |
| ---/backend.js           | Entry point to server application                               |
| **react-frontend**       | Source code for client (React)                                  |
| ---/index.js             | Entry point to client                                           |
| ---/.eslintrc.json       | Config settings for ESLint code style checking                  |
| ---/.prettierrc          | Config settings for Prettier formatter                          |
| ---**/public**           | Contains static html pages                                      |
| ------**/resources**     | Images/static page data                                         |

## **NPM Scripts**

### Frontend

| Npm Script   | Description                                                                             |
| ------------ | --------------------------------------------------------------------------------------- |
| `start`      | Runs node on `index.js` which is the app entry point                                    |
| `lint`       | Lint frontend JS files                                                                  |
| `format`     | Format frontend JS files                                                                |

### Backend

| Npm Script   | Description                                                                             |
| ------------ | --------------------------------------------------------------------------------------- |
| `start`      | Runs node on `backend.js` which is the backend entry point                              |
