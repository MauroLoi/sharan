const express = require("express");
const app = express.Router();

const Joi = require("joi");
const sentiment = require("multilang-sentiment");

const { authUser } = require("../../middlewares/auth");
const { Page } = require("../../db");

/**
 * @path /api/pages?lang=it|en
 * @method POST
 */
app.post("/", authUser, async (req, res) => {
    const user = req.user._id;
    const lang = req.query?.lang?.toLowerCase() || "it";
    const schema = Joi.object().keys({
        title: Joi.string().required(),
        content: Joi.string().required(),
    });

    try {
        const data = await schema.validateAsync(req.body);

        const sentiment_score = sentiment(data.content, lang).score;

        const page = (await new Page({ user, ...data, sentiment_score }).save()).toObject();

        return res.status(201).json(page);
    } catch(err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

/**
 * @path /api/pages?archived=true|false
 * @method GET
 */
app.get("/", authUser, async (req, res) => {
    const user = req.user._id;
    const is_archived = req.query.archived === undefined ? false : req.query.archived;
    const start_date = !req.query.start_date || req.query.start_date == "null" ? false : req.query.start_date;

    const findObj = { user, is_archived };
    
    if (start_date) findObj.createdAt = { $gte: new Date(start_date) };

    try {
        const pages = await Page.find(findObj, null, { lean: true });

        return res.status(200).json(pages);
    } catch(err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

/**
 * @path /api/pages/:page_id
 * @method GET
 */
app.get("/:page_id", authUser, async (req, res) => {
    const user = req.user._id;
    const page_id = req.params.page_id;

    try {
        const page = await Page.findOne({ _id: page_id, user }, null, { lean: true });

        if (!page) return res.status(404).json({ message: "Page Not Found" });

        return res.status(200).json(page);
    } catch(err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

/**
 * @path /api/pages/archive/:page_id
 * @method PUT
 */
app.put("/archive/:page_id", authUser, async (req, res) => {
    const user = req.user._id;
    const page_id = req.params.page_id;
    const schema = Joi.object().keys({
        is_archived: Joi.boolean().required(),
    });

    try {
        const data = await schema.validateAsync(req.body);

        await Page.updateOne({ _id: page_id, user }, { is_archived: data.is_archived });

        return res.status(200).json({ message: "Page updated" });
    } catch(err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

/**
 * @path /api/pages/:page_id?lang=it|en
 * @method PUT
 */
app.put("/:page_id", authUser, async (req, res) => {
    const user = req.user._id;
    const page_id = req.params.page_id;
    const lang = req.query?.lang?.toLowerCase() || "it";
    const schema = Joi.object().keys({
        title: Joi.string().optional(),
        content: Joi.string().optional(),
    });

    try {
        const data = await schema.validateAsync(req.body);

        if (data.content) data.sentiment_score = sentiment(data.content, lang).score;

        await Page.updateOne({ _id: page_id, user }, { ...data });

        return res.status(200).json({ message: "Page updated" });
    } catch(err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

/**
 * @path /api/pages/:page_id
 * @method DELETE
 */
app.delete("/:page_id", authUser, async (req, res) => {
    const user = req.user._id;
    const page_id = req.params.page_id;

    try {
        const deleted = await Page.deleteOne({ _id: page_id, user, is_archived: true });

        if (deleted.deletedCount == 0) return res.status(200).json({ message: "Page not deleted due to not archive status" })

        return res.status(200).json({ message: "Page Deleted" });
    } catch(err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = app;