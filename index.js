const express = require('express')
const app = express()
const path = require('path');
const port = 3000

// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/components', express.static('components'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))