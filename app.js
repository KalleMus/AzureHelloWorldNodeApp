const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

let visitorCounter = 0;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    console.log("Someone visited index.");
    const userAgent = req.get('user-agent');
    visitorCounter++;
    console.log(`visitorCounter: ${visitorCounter}`);
    console.log(`userAgent: ${userAgent}`);
    res.render("pages/index", {
        port: PORT,
        visitorCounter: getFormattedCounter(visitorCounter),
        userAgent: userAgent
    });
});

app.listen(PORT, () => {
    console.log(`AzureHelloWorldApp listening on port: ${PORT}`);
});

const getFormattedCounter = (counter) => {
    switch (counter) {
        case 1:
            return counter + "st";
        case 2:
            return counter + "nd";
        case 3:
            return counter + "rd";
        default:
            return counter + "th";
    }
}