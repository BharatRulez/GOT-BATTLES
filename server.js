const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

// API file for interacting with MongoDB
const notes = require('./server/routes/rs_notes');
const battle = require('./server/routes/rs_battle');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));


require('./server/config/mongoose');
const router = express.Router();
// Setup logger
//app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
//app.use(express.static(path.resolve(__dirname, '..', 'build')));
//require('./loadCSV')(app);
// route middleware that will happen on every request

router.use((req, res, next) => {
    // log each request to the console
    console.log(req.method, req.url);
    next();
});

router.get('/', (req, res) => {
   res.send('Home');
});

app.use('/api', router);
app.use('/api/notes', notes);
app.use('/api/battle', battle);

// // API location
// app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
