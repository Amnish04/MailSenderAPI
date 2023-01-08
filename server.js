const express = require('express');
const email = require('./modules/EmailGenerator');
const app = express();
const path = require('path');

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
    email.sendEmail(req.body);
    res.sendFile(
        path.join(__dirname, 'views/success-page.html')
    );
});

/**
 * Initialize Api
 */
app.listen(PORT, 
    () => {
        console.log("Listening on port " + PORT);
    });
