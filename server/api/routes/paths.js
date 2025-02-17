const express = require("express");
const { authUser } = require("../../middlewares/auth");
const { UserPath } = require("../../db");
const app = express.Router();

/**
 * @path /api/paths
 * @method GET
 */
app.get("/", authUser, async (req, res) => {
    const user = req.user._id;

    try {
        const paths = await UserPath.find({ user }, null, { lean: true })
            .populate("path")
            .populate("missions.mission");

        return res.status(200).json(paths);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

/**
 * @path /api/paths/:path_id
 * @method GET
 */
app.get("/:path_id", authUser, async (req, res) => {
    const user = req.user._id;
    const { path_id } = req.params;

    try {
        const path = await UserPath.findOne({ _id: path_id, user }, null, { lean: true })
            .populate("path")
            .populate("missions.mission");

        return res.status(200).json(path);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});



module.exports = app;