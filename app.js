require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;

const {models, sequelize} = require("./models");

var methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

app.get("/contacts", async (req, res) => {
    const contacts = await models.Contacts.findAll({});
    res.render("index",{contacts: contacts})
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/contacts`)
});