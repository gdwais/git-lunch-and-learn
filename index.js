const express = require("express");
const app = express();
const pkg = require("./package.json");

// app.get("/ping", (req, res, next) => {
//     res.json({
//         status: "pong",
//         version: pkg.version
//     });
// });

app.listen(3000, () => {
 console.log("Server running on port 3000");
});