# Typescript Node React Starter

Server:

![dependencies Status](https://img.shields.io/david/deskoh/Typescript-Node-React-Starter.svg?style=flat)
![devDependencies Status](https://img.shields.io/david/dev/deskoh/Typescript-Node-React-Starter.svg?style=flat)

Client:

![dependencies Status](https://img.shields.io/david/deskoh/Typescript-Node-React-Starter.svg?path=src-client&style=flat)
![devDependencies Status](https://img.shields.io/david/dev/deskoh/Typescript-Node-React-Starter.svg?path=src-client&style=flat)

Starter project for Node and React written in Typescript.

## Install Dependencies

* Install dependencies for server (backend)

  ```bash
  npm install
  ```

* Install dependencies for client (frontend)

  ```bash
  cd src-client
  npm install
  ```

## Folder Structure

| Name | Description |
| ------------------------ | ------------------------------------------------------------------------------------------ |
| **.vscode**              | Contains VS Code specific settings                                                         |
| **dist**                 | Contains the output from TypeScript build for server (Node).                               |
| **public**               | Static assets that will be used client side.                                               |
| **public/dist**          | Contains the output from TypeScript build for client (React).                              |
| **node_modules**         | Contains all your npm dependencies                                                         |
| **src**                  | Contains your source code for server (Node) that will be compiled to the dist dir          |
| **src**/server.ts        | Entry point to your express app                                                            |
| tsconfig.json            | Config settings for compiling server code written in TypeScript                            |
| **src-client**           | Contains your source code for client (React) that will be compiled to the public/dist dir  |
| **src-client**/tsconfig.json | Config settings for compiling server code written in TypeScript                     |
| tslint.json              | Config settings for TSLint code style checking                                             |

## VS Code Debug Configuration

### Launch Server

For debugging server / backend Typescript source in `src` folder. No JavaScript files will be transpiled to disk.

### Launch Server (Watch)

Same as `Launch Server` configuration but in watch mode. Server will restart and VS code will re-attach when source has changed.

> Note: In launch configuration `"program": "${workspaceFolder}/node_modules/nodemon/bin/nodemon"` can be replaced by `runtimeExecutable": "nodemon"`, however the `nodemon` process will not be terminated when debugging is stopped.

### Launch Browser

Debug source files in `src-client` in Google Chrome browser. `webpack dev server` has to be started first (using `npm run dev:client`).

### Launch All

Starts debug configuration `Launch Server` and `Launch Browser`.

## NPM Scripts

| Npm Script          | Description                                                                             |
| ------------------- | --------------------------------------------------------------------------------------- |
| `start`             | Runs node on `dist/server.js` which is the app entry point at localhost:
            |
| `dev`               | Runs backend server in watch mode at localhost:3000.                                    |
| `build`             | Runs build tasks for backend                                                            |
| `lint`              | Lint backend TS files                                                                   |
| `dev:client`        | Runs frontend server in watch mode at localhost:8080.                                   |
| `dev-all`           | Runs project (backend at localhost:3000 and frontend at localhost:8080]) in watch mode. |
| `build-all`         | Full build. Runs ALL build tasks for backend and frontend                               |
| `lint-all`          | Lint frontend and backend TS files                                                      |
