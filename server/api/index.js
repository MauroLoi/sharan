const express = require("express");
const app = express.Router();

/**
 * @path /api/users
 */
app.use("/users", require("./routes/users"));

/**
 * @path /api/pages
 */
app.use("/pages", require("./routes/pages"));

module.exports = app;