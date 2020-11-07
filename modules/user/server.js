const express = require('express');
const app = express();
const port = 8000;
const User = require('./index.js');

app.get('/:id/', function (req, res) {
  
    if (req.params.id == undefined) return res.status(400).send("Not all parameters given.");

    User.getUser(req.params.id).then(function (data) {

        if (data == null) return res.status(404).send("User not found.");
        return res.status(200).json(data);

    }).catch(function (error) {

        console.log(error);
        return res.status(500).send("Internal Server Error.");

    });

});

app.listen(port, () => {
  
    console.log(`Example app listening at http://localhost:${port}`);

});