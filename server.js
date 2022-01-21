const express = require('express');
const cors = require('cors');

var app = express()

app.use(cors({
    origin: '*'
}));

app.use(express.static(__dirname + '/dist/om'));
app.get('/*', cors(), function(req,res) {
res.sendFile(path.join(__dirname+'/dist/om/index.html'));});
app.listen(process.env.PORT || 8080);
