const express = require ("express");
const path = require ("path");
const bodyParser = require ("body-parser");
const app = express ();
const port = process.env.PORT || 3000;

app.use(express.static("firstPage"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/firstPage/steam.html"))
});

app.listen(port, function () {
    console.log("My files is reside on port server " + port + " !")
});

