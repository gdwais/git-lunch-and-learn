const express = require("express");
const app = express();
const pkg = require("./package.json");


app.listen(3000, () => {
 console.log("Server running on port 3000");
});