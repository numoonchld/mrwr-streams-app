# mrwr-streams-app

## Intro

Twitch Like Application with React, Redux, React Router and Google Authentication

- React Router
- Google OAuth
- Redux Forms
- CRUD Operation with React-Redux

## Setup

### Client 

#### Redux, Router and Axios Setup
- `npm install --save react-router-dom`
- `npm install --save redux react-redux`
- `npm install --save redux-form`
- `npm install --save axios redux-thunk`
- `npm install --save lodash`

#### Video Player Setup
- `npm install --save flv.js`

### API
- `npm install --save json-server`

- configure `package.json` start script for API server
  - ```
    "scripts": {
      "start": "json-server -p 3001 -w db.json"
    },
    ```

- create `db.json` file with `streams` field initialized with one stream

### Real Time Messaging Protocol Server (RTMP Server)
- `npm install --save node-media-server`

## Running The App

- in `api`, `client`, `rtmpserver` folders, run `npm start` from the CLI 

### Straming from OBS

- start OBS ()

# Reference

- [Google Sign-In JavaScript client reference](https://developers.google.com/identity/sign-in/web/reference)
- [When 'Not' to Use Arrow Functions](https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/)
- [Wait, you’re not using <React.StrictMode>?!](https://medium.com/nmc-techblog/wait-youre-not-using-react-strictmode-a9713927a33b)
- [Node-Media-Server](https://github.com/illuspas/Node-Media-Server#npm-version-recommended)