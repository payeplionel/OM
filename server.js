const express = require('express');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
    next();
});

const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/om'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/om/index.html'));});
app.listen(process.env.PORT || 8080);
