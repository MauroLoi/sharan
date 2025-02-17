const { Schema, model } = require("mongoose");

const MissionSchema = new Schema({
    path: {
        type: Schema.Types.ObjectId,
        ref: "Path",
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
}, { strict: true, timestamps: true, versionKey: false });

const Mission = model("Mission", MissionSchema);

module.exports = Mission;