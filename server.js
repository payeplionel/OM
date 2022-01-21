const express = require('express');
const cors = require('cors');

app.use(cors({
    origin: ['https://om-momo.herokuapp.com/', 'https://www.google.com/']
}));

var app = express()



app.use(express.static(__dirname + '/dist/om'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/om/index.html'));});
app.listen(process.env.PORT || 8080);
