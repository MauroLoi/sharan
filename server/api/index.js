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

/**
 * @path /api/me
 */
app.use("/me", require("./routes/me"));

/**
 * @path /api/analytics
 */
app.use("/analytics", require("./routes/analytics"));

/**
 * @path /api/paths
 */
app.use("/paths", require("./routes/paths"));

module.exports = app;