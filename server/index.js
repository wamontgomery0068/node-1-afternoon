const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/messages_controller');

const app = express ();

app.use( bodyParser.json () );
app.use( express.static( __dirname + '/../public/build'));

const messagesBaseUr1 = "/api/messages";
app.post( messagesBaseUr1, mc.create);
app.get( messagesBaseUr1, mc.read);
app.put ( `${messagesBaseUr1}/:id`, mc.update);
app.delete (`${messagesBaseUr1}/:id`, mc.delete);

const port = 3001;
app.listen ( port, () => { console.log(`Server listening on port ${port}`); } );