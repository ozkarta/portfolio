// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
// Initial and Config Server.
const app = express();
const server = http.Server(app);





// Point static path to "build" (react app)
app.use(express.static(path.join(__dirname, '')));


// Get our API routes
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    next();
});


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
/*** Get port from environment and store in Express.*/
const port = process.env.PORT || 4000;
app.set('port', port);

server.listen(port, () => console.log(`Our server is running on: ${port}`));

// let wss =new WebSocketServer({ server: server });
// wss.on('connection', chatServerHandler);
