const express = require('express');
// Node uses require to import packages. Here we bring in express and save it to a variable.
const bodyParser = require('body-parser');
// We bring in the package body-parser that we will use to convert the incoming request's body to a js object.
const mc = require('./controllers/messages_controller');

const app = express ();
// We name our express application app. We creat a new application by invoking express.

app.use( bodyParser.json () );
app.use( express.static( __dirname + '/../public/build'));

const messagesBaseUr1 = "/api/messages";
app.post( messagesBaseUr1, mc.create);
app.get( messagesBaseUr1, mc.read);
app.put ( `${messagesBaseUr1}/:id`, mc.update);
app.delete (`${messagesBaseUr1}/:id`, mc.delete);

const port = 3001;
// We define the port that our server will run on. We will use it a bit later in our server.
app.listen ( port, () => { console.log(`Server listening on port ${port}`); } );