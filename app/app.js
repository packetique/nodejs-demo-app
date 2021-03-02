const express = require('express');
const ip = require('ip');
const app = express();
const router = express.Router();
const path = __dirname + '/views/';
const port = 8899;


app.set('view engine', 'pug');

router.get('/', function(req,res){
  res.render('index', {title: 'Nodejs Hello World', message: 'Hello World!!!', description: 'Node.js demo application', server_ip: 'Server ip: ' + ip.address()});
});

outer.get('/info', function(req,res){
  res.render('info', {title: 'Information', os_type: 'OS type: ' + os.type(), release: "Release: " + os.release(),  server_ip: 'Server ip: ' + ip.address(), node_version: "Node.js version: " + process.version});
});

app.use(express.static(path));
app.use('/', router);
app.use('/info', router);
app.listen(port, function () {
  console.log('Demo app listening on port ' + port)
})
