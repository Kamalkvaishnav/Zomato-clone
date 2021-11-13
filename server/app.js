var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var jwt = require("express-jwt");
var jwks = require("jwks-rsa");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 60,
    jwksUri: "https://dev-k0hwa40u.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "http://localhost:5000/",
  issuer: "https://dev-k0hwa40u.us.auth0.com/",
  algorithms: ["RS256"],
});

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);
app.use(jwtCheck);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
