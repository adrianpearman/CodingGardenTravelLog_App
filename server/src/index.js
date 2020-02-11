const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
//Variables
const app = express();
const middlewares = require("./middlewares/middlewares");
const monogoConnection = require("./middlewares/mongoConnection");
const keys = require("../config/keys");
const routes = require("./apiRoutes/logs");
const PORT = process.env.PORT || 3001;

//Database
monogoConnection();

//Middlewares
app.use(morgan("common"));
app.use(helmet());
app.use(
  cors({
    origin: keys.CORS_ORIGIN
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello World"
  });
});

app.use("/api/logs", routes);

app.use(middlewares.unfoundRoute);
app.use(middlewares.generalErrorHandler);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

// curl --compressed https:://octo.win/twitch
