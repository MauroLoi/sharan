const express = require("express");
const app = express.Router();

const Joi = require("joi");
const { hashPassword } = require("../../utilities/auth");
const { User, Path, Mission, UserPath } = require("../../db");

/**
 * @path /api/users
 * @method POST
 */
app.post("/", async (req, res) => {
    const schema = Joi.object().keys({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    try {
        const data = await schema.validateAsync(req.body);

        data.password = await hashPassword(data.password);

        const user = (await new User(data).save()).toObject();

        const paths = (await Path.find({}, "_id", { lean: true})).map(path => path._id);

        for (const path of paths) {
            const missions = (await Mission.find({ path }, "_id", { lean: true })).map(mission => mission._id);

            await new UserPath({
                user: user._id,
                path,
                missions: missions.map(mission => mission),
            }).save();
        }

        return res.status(201).json(user);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = app;