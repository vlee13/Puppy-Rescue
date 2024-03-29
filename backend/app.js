require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const passport = require("./config/passport");

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://val:pnv050212@cluster0.mgb3j.mongodb.net/Dogs?retryWrites=true&w=majority";
console.log("Connecting DB to ", MONGODB_URI);

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "https://houseofpaws.herokuapp.com"], //Swap this with the client url
  })
);

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "secret",
    cookie: { maxAge: 1000 * 60 * 60 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger("dev"));

const index = require("./routes/index");
const auth = require("./routes/auth");
app.use("/api", index);
app.use("/api", auth);

// Uncomment this line for production
app.get("*", (req, res, next) => {
  if (req.headers.host.includes("heroku")) {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
  } else {
    next();
  }
});
console.log("puppy");
module.exports = app;
