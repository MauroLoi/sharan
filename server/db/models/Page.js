const { Schema, model } = require("mongoose");

const PageSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    sentiment_score: {
        type: Number,
        default: 0,
    },
    is_archived: {
        type: Boolean,
        default: false,
    },
}, { strict: true, timestamps: true, versionKey: false });

const Page = model("Page", PageSchema);

module.exports = Page;