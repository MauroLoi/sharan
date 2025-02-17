const { Schema, model } = require("mongoose");

const UserPathSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    path: {
        type: Schema.Types.ObjectId,
        ref: "Path",
        required: true,
    },
    missions: {
        type: [{
            mission: {
                type: Schema.Types.ObjectId,
                ref: "Mission",
                required: true,
            },
            completed: {
                type: Boolean,
                default: false,
            },
        }],
        default: [],
    },
}, { strict: true, timestamps: true, versionKey: false });

const UserPath = model("UserPath", UserPathSchema);

module.exports = UserPath;