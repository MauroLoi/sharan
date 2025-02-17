const express = require("express");
const app = express.Router();
const Joi = require("joi");

const { authUser } = require("../../middlewares/auth");
const { Page } = require("../../db");

/**
 * @path /api/analytics
 * @method GET
 */
app.get("/", authUser, async (req, res) => {
    const user = req.user;
    const schema = Joi.object().keys({
        start_date: Joi.date().required(),
        end_date: Joi.date().required(),
    });

    try {
        const data = await schema.validateAsync(req.query);

        const pages = await Page.find({
            user: user._id,
            createdAt: {
                $gte: data.start_date,
                $lte: data.end_date,
            }
        }, null, { lean: true });

        // Get the average of the sentiment_score for each day
        const datasets = pages.reduce((acc, page) => {
            const date = page.createdAt.toLocaleDateString();
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(page.sentiment_score);
            return acc;
        }, {});

        const _data = {
            labels: [],
            datasets: [{
                label: 'Average Score',
                data: [],
                borderWidth: 1
            }],
        }

        Object.entries(datasets).map(([date, scores]) => {
            const average = scores.reduce((a, b) => a + b, 0) / scores.length;
            _data.labels.push(date);
            _data.datasets[0].data.push(average);
        });
        
        return res.status(200).json(_data);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = app;