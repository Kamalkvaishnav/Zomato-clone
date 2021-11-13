<<<<<<< HEAD
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

dotenv.config();

const app = express();

const { DOMAIN, AUDIENCE, PORT = 5000 } = process.env;

if (!DOMAIN || !AUDIENCE) {
  throw new Error("Please make sure that DOMAIN and AUDIENCE is set in your .env file");
}

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 60,
    jwksUri: `https://${DOMAIN}/.well-known/jwks.json`,
  }),
  audience: AUDIENCE,
  issuer: "https://${DOMAIN}/",
  algorithms: ["RS256"],
});

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

app.use(logger("dev"));
app.use(express.json());
=======
var express = require("express");
// var path = require("path");
var PORT = process.env.PORT || 5000;
var cookieParser = require("cookie-parser");
// var logger = require("morgan");
var mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const restaurantRouter = require("./Restaurants/routes/restaurant");
var app = express();

// app.use(logger("dev"));
>>>>>>> main
app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.use(cookieParser());
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, "public")));

app.use("/", checkJwt, indexRouter);
app.use("/users", usersRouter);
=======
// app.use(express.static(path.join(__dirname, "public")));

const DBURI = "mongodb://localhost:27017/zomato";
mongoose.connect(
  DBURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("Failed to connect database " + err);
    } else {
      console.log("Database connected successfully");
    }
  }
);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/restaurant", restaurantRouter);
>>>>>>> main

app.listen(PORT, () => {
  console.log(`Server is live at ${PORT}..`);
});
