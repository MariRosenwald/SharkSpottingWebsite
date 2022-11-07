![main](https://github.com/MariRosenwald/SharkSpottingWebsite/actions/workflows/react-frontend.js.yml/badge.svg)


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
