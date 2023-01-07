const express = require('express');
const app = express();

const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 8080;

/**
 * Middlewares
 */
app.use(
    express.urlencoded({
        extended: true
    })
);


/**
 * Routes
 */
app.get("/", (req, res) => {
    res.send("API is running fine!");
});

app.post("/", (req, res) => {
    res.json(req.body);
});

/**
 * Initialize Api
 */
app.listen(PORT, () => {
        console.log("Listening on port " + PORT);
    });
