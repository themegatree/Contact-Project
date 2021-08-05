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

app.post('/contacts', async(req, res) => {
    await models.Contacts.create({
        name: req.body.nameInput,
        email: req.body.emailInput,
        dofb: req.body.dobInput
    })
    res.redirect('/contacts')
})

app.post("/contacts/edit/:id", async(req, res) => {
    console.log('Post')
    app.locals.currentID = req.params.id; 
    res.render('edit',{
        id: req.params.id
    })
})

app.put("/contacts", async(req, res) => {
    console.log("Put")
    await models.Contacts.update(
        {
            name: req.body.nameInput,
            email: req.body.emailInput,
            dofb: req.body.dobInput
        },{

        where:{
            id:app.locals.currentID
        }
    })
    res.redirect("/contacts")
})

app.delete("/contacts/:id", async(req, res) => {

    await models.Contacts.destroy({
        where: {id: req.params.id}
    })

    res.redirect("/contacts")
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/contacts`)
});