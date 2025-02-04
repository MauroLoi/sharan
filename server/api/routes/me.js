const express = require("express");
const { authUser } = require("../../middlewares/auth");
const { User } = require("../../db");
const { hashPassword } = require("../../utilities/auth");
const app = express.Router();

/**
 * @path /api/me
 * @method GET
 */
app.get("/", authUser, (req, res) => {
    return res.json(req.user);
});

/**
 * @path /api/me
 * @method PUT
 */
app.put("/", authUser, async (req, res) => {
    const user = req.user;
    const schema = Joi.object().keys({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
    });

    try {
        const data = await schema.validateAsync(req.body);

        await User.updateOne({ _id: user._id }, data);

        return res.json({ message: "User updated" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

/**
 * @path /api/me/email
 * @method PUT
 */
app.put("/email", authUser, async (req, res) => {
    const user = req.user;
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
    });

    try {
        const data = await schema.validateAsync(req.body);

        await User.updateOne({ _id: user._id }, data);

        return res.json({ message: "Email updated" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

/**
 * @path /api/me/password
 * @method PUT
 */
app.put("/password", authUser, async (req, res) => {
    const user = req.user;
    const schema = Joi.object().keys({
        password: Joi.string().required(),
    });

    try {
        const data = await schema.validateAsync(req.body);

        data.password = await hashPassword(data.password);

        await User.updateOne({ _id: user._id }, data);

        return res.json({ message: "Password updated" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

/**
 * @path /api/me
 * @method DELETE
 */
app.delete("/", authUser, async (req, res) => {
    const user = req.user;

    try {
        await User.deleteOne({ _id: user._id });

        return res.json({ message: "User deleted" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = app;