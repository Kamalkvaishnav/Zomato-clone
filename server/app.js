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
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", checkJwt, indexRouter);
app.use("/users", usersRouter);

module.exports = app;
