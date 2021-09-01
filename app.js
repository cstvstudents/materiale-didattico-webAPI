const fs = require("fs");
const express = require("express");
const app = express();

app.use(express.json());

const ROOT = "./data";

app.get("/*", (req, res) => {
    const paTh = ROOT + req.originalUrl;
    const dirContent = fs.readdirSync( paTh )
    console.log( dirContent );
    res.json( dirContent );
});

app.listen(5555);
