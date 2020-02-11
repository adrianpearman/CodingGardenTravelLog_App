const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan("common"));
app.use(helmet());

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
