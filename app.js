const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const teste1 = require("./teste1");
const teste2 = require("./teste2");
const teste3 = require("./teste3");
const teste4 = require("./teste4");
const teste5 = require("./teste5");

const verifyToken = require('./middlewares/verifyToken');


app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get("/user", teste1.getUser);
app.get("/users", teste1.getUsers);
app.post("/users", teste2.createUser)
app.delete("/users", verifyToken, teste3.deleteUser)
app.put("/users", verifyToken, teste4.updateUserById)
app.get("/users/access", teste5);

module.exports = app;