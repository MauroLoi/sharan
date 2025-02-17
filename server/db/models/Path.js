const { Schema, model } = require("mongoose");

const PathSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    short_content: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    cover_image: {
        type: String,
        required: true,
    },
    reward_message: {
        type: String,
        required: true,
    },
    period: {
        type: String,
        required: true,
    },
}, { strict: true, timestamps: true, versionKey: false });

const Path = model("Path", PathSchema);

module.exports = Path;