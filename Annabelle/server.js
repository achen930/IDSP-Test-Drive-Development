const express = require("express");

const app = express();
const port = 3000;

const bodyParser = require("body-parser"); //angus: we can use this directly from express without the body-parser package
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));  

app.set("view engine", "ejs");

app.use(express.json());

const validateUsername = require("./validateUsername");

app.get("/users", (req, res) => {
    res.render("index");
})

app.post("/users", (req, res) => {
    const { username, password } = req.body;

    const validUsername = validateUsername(username);

    if (validUsername) {
        res.send({ message: "Valid User" });
    } else {
        res.send({ error: "Invalid username" });
    }

})

app.listen(port, () => console.log(`Listening on port ${port}`))
