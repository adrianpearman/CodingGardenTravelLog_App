const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
// Variables
const app = express();
const middlewares = require("./middlewares/middlewares");
const monogoConnection = require("./middlewares/mongoConnection");

const PORT = process.env.PORT || 3001;

// Database
monogoConnection();

//Client Root Path
const clientRoot = require("path").join(__dirname, "../client", "build");

// Middlewares
app.use(morgan("common"));
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/logs", require("./apiRoutes/logs"));

app.use(middlewares.unfoundRoute);
app.use(middlewares.generalErrorHandler);

// Render client root buildfile if the application is ona production server
if (process.env.NODE_ENV === "production") {
  app.use(express.static(clientRoot));
  app.get("/", (req, res) => {
    res.sendFile("index.html", { clientRoot });
  });
}

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

// curl --compressed https:://octo.win/twitch
