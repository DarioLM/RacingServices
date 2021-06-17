# Project general information

# `First launch`

Remember to execute **npm install** in both /server and /client folders.

## `From /server`

### `npm run dev`

This is the standard development mode. The client is configured to proxy all the calls prefixed by "/api/" to the server which will launch by default at port `5000`. Check `setupProxy.js` on client side for further details.

Runs the app, starting both server and client side.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Hot reload is enabled by default.

### `npm run client`

If you only want to start the react app.

### `npm run server`

If you only want to start the node app.

## `From /client`

### `npm run test`

Will launch the test utility on watch mode.
