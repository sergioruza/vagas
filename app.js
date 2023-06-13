const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const teste1 = require("./src/controllers/teste1");
const teste2 = require("./src/controllers/teste2");
const teste3 = require("./src/controllers/teste3");
const teste4 = require("./src/controllers/teste4");
const teste5 = require("./src/controllers/teste5");

const verifyToken = require('./src/middlewares/verifyToken');
const { checkNameQueryParam, checkIdQueryParam } = require('./src/middlewares/checkQuery');
const checkBody = require('./src/middlewares/checkBody');

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get("/user", checkNameQueryParam, teste1.getUser);
app.get("/users", teste1.getUsers);
app.post("/users", checkBody, teste2.createUser);
app.delete("/users", verifyToken, checkNameQueryParam, teste3.deleteUser);
app.put("/users", verifyToken, checkIdQueryParam, checkBody, teste4.updateUserById);
app.get("/users/access", checkNameQueryParam, teste5.getUserAccessCount);

module.exports = app;
