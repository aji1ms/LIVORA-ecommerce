const express = require("express");
const app = express();
const path = require("path");
const env = require("dotenv").config();
const db = require("./config/db");
const userRouter = require("./routes/userRoute");
db();

app.use(express.json());
app.use(express.urlencoded());

app.set("view engine", "ejs");
app.set("views", [path.join(__dirname, 'views/user'), path.join(__dirname, 'views/admin')]);
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", userRouter)

app.listen(process.env.PORT, () => {
    console.log("server running...")
})  