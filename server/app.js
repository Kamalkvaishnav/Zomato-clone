const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const mongoose = require("mongoose");
const ManagementClient = require("auth0").ManagementClient;
const StatusCodes = require("http-status-codes").StatusCodes;
const ReasonPhrases = require("http-status-codes").ReasonPhrases;

dotenv.config();

const app = express();

const { DOMAIN, AUDIENCE, CLIENT_SECRET, CLIENT_ID, PORT = 5000 } = process.env;

var auth0 = new ManagementClient({
  domain: DOMAIN,
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  scope: "update:users",
  audience: "https://dev-k0hwa40u.us.auth0.com/api/v2/",
  tokenProvider: {
    enableCache: true,
    cacheTTLInSeconds: 10,
  },
});

if (!DOMAIN || !AUDIENCE) {
  throw new Error("Please make sure that DOMAIN and AUDIENCE is set in your .env file");
}

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const restaurantsRouter = require("./routes/restaurants");
const restaurantRouter = require("./Restaurants/routes/restaurant");

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
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

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
  },
);

app.use("/", indexRouter);

app.use("/users", usersRouter);

app.post("/signup", (req, res) => {
  var params = { id: req.body.id };
  const role = req.body.role;
  let roleId = "";
  if (role == "customer") {
    roleId = "rol_IqsqD5q88fIIarRg";
  } else if (role == "restraunt-owner") {
    roleId = "rol_KM73shAnTKJQpuXN";
  } else {
    res.status(StatusCodes.BAD_REQUEST).send("invalid role");
  }
  var data = { roles: [roleId] };

  auth0
    .updateUser(params, { name: req.body.fullname })
    .then((user) => {
      auth0
        .assignRolestoUser(params, data)
        .then((val) => {
          res.status(StatusCodes.OK).send(user);
        })
        .catch((err) => res.status(StatusCodes.BAD_REQUEST).send(err));
    })
    .catch((err) => res.status(StatusCodes.BAD_REQUEST).send(err));
});

app.use("/restaurants", restaurantsRouter);

app.use("/api/restaurant", restaurantRouter);

module.exports = app;
