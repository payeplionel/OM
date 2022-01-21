const express = require('express');
const app = express();

const path = require('path');
const cors = require('cors');
app.use(cors());

app.use(express.static(__dirname+'/dist/om'));

app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/om/index.html'));
});

app.listen(process.env.PORT || 8080);