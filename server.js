const app = require('./app');

app.get('/', function (req, res) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

const port = 3000;
app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
