import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3001;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => { 
    res.render("index.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/product", (req, res) => {
    res.render("Product.ejs");
});

app.get("/contact", (req, res) => {
    res.render("Contact.ejs");
});

app.get("/signup", (req, res) => {
    res.render("SignUp.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});