# **How to Run**

- Install dependencies for server (backend)

  ```bash
  npm install
  ```

- Install dependencies for client (frontend)

  ```bash
  cd src-client
  npm install
  ```

- Start the app

  ```bash
  cd SharkSpottingWebsite
  npm run dev-all
  ```

- The website should now be running at localhost:8080

- Run linter

```bash
npm run es-lint
```

- Run prettier text formatter

```bash
npx prettier -write "file_name"
```

## **Folder Structure**

| Name                     | Description                                                     |
| ------------------------ | --------------------------------------------------------------- |
| **src**                  | Source code for server (Express)                                |
| **src-client**           | Source code for client (React)                                  |
| **public**               | Contains static html pages                                      |
| **src**/server.ts        | Entry point to server application                               |
| **src-client**/index.tsx | Entry point to client                                           |
| **.vscode**              | Contains VS Code specific settings                              |
| **dist**                 | Contains the output from TypeScript build for server (Node).    |
| **public/dist**          | Contains the output from TypeScript build for client            |
| **node_modules**         | Contains all node dependencies                                  |
| tsconfig.json            | Config settings for compiling server code written in TypeScript |
| tslint.json              | Config settings for TSLint code style checking                  |

## **NPM Scripts**

| Npm Script   | Description                                                                             |
| ------------ | --------------------------------------------------------------------------------------- |
| `start`      | Runs node on `dist/server.js` which is the app entry point at localhost:                |
| `dev`        | Runs backend server in watch mode at localhost:3000.                                    |
| `build`      | Runs build tasks for backend                                                            |
| `lint`       | Lint backend TS files                                                                   |
| `dev:client` | Runs frontend server in watch mode at localhost:8080.                                   |
| `dev-all`    | Runs project (backend at localhost:3000 and frontend at localhost:8080]) in watch mode. |
| `build-all`  | Full build. Runs ALL build tasks for backend and frontend                               |
| `es-lint`    | Lint frontend and backend TS files                                                      |

## **VS Code Debugging**

### Launch All:

Starts debug configuration `Launch Server` and `Launch Browser`.
