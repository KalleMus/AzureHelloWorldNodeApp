const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    console.log("Someone visited index.");
    console.log("req", req);
    res.render("pages/index", {
        port: PORT
    });
});

app.listen(PORT, () => {
    console.log(`AzureHelloWorldApp listening on port: ${PORT}`);
});