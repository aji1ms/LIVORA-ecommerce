const User = require("../../models/userSchema");


// Page Not Found ----

const pageNotFound = async (req, res) => {
    try {
        return res.render("page-404")
    } catch (error) {
        res.redirect("/pageNotFound")
    }
}

// Home Page ----

const loadHomepage = async (req, res) => {
    try {
        return res.render("home")
    } catch (error) {
        console.log("Home page not found")
        res.status(500).send("server error")
    }
}

// signup Page ----

const loadSignup = async (req, res) => {
    try { 
        return res.render("signup")
    } catch (error) {
        console.log("Error Loading Signup pgae: ", error);
        res.status(500).send('server error');
    }
}

const signup = async (req, res) => {
    const { name, email, phone, password } = req.body;
    try {
        const newUser = new User({ name, email, phone, password });
        console.log(newUser);
        await newUser.save();
        return res.redirect("/signup")
    } catch (error) {
        console.error("Error for saving User: ", error);
        res.status(500).send("Internal Error");
    }
}

module.exports = {
    loadHomepage,
    pageNotFound,
    loadSignup,
    signup,
}