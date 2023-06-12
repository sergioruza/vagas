const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const teste1 = require("./controllers/teste1");
const teste2 = require("./controllers/teste2");
const teste3 = require("./controllers/teste3");
const teste4 = require("./controllers/teste4");
const teste5 = require("./controllers/teste5");

const verifyToken = require('./middlewares/verifyToken');
const { checkNameQueryParam, checkIdQueryParam } = require('./middlewares/checkQuery');
const checkBody = require('./middlewares/checkBody');

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get("/user", checkNameQuery, teste1.getUser);
app.get("/users", checkNameQuery, teste1.getUsers);
app.post("/users", checkBody, teste2.createUser)
app.delete("/users", verifyToken, checkNameQueryParam, teste3.deleteUser)
app.put("/users", verifyToken, checkIdQueryParam, checkBody, teste4.updateUserById)
app.get("/users/access", checkNameQueryParam, teste5);

module.exports = app;