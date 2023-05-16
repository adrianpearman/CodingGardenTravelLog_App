// NPM Modules
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const helmet = require("helmet");
// Variables
const app = express();
const clientRoot = require("path").join(__dirname, "../client", "dist");
const {
  generalErrorHandler,
  unfoundRoute,
} = require("./middlewares/middlewares");
const monogoConnection = require("./middlewares/mongoConnection");
const PORT = process.env.PORT;
// Database Connection
app.enable("trust proxy");
monogoConnection();
// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
// Render client root buildfile if the application is on a production server
// if (process.env.NODE_ENV === "production") {
app.use(express.static(clientRoot));
app.get("/", (req, res) => {
  res.sendFile("index.html", { clientRoot });
});
// }
// Routes
app.use("/api/logs", require("./apiRoutes/logs"));
// Route Middleware
app.use(generalErrorHandler);
app.use(unfoundRoute);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

// curl --compressed https:://octo.win/twitch
