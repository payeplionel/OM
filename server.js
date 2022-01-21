const express = require('express');

var cors = require('cors')
var app = express()

app.use(cors())

const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/om'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/om/index.html'));});
app.listen(process.env.PORT || 8080);
