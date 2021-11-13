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
app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.use(cookieParser());
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

app.listen(PORT, () => {
  console.log(`Server is live at ${PORT}..`);
});
