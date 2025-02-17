const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_URI);

        console.log("Database connected")
    } catch(err) {
        throw err;
    }
}

const disconnect = async () => {
    try {
        await mongoose.disconnect();

        console.log("Database disconnected")
    } catch (err) {
        throw err;
    }
} 

const models = {
    User: require("./models/User"),
    Page: require("./models/Page"),
    Path: require("./models/Path"),
    Mission: require("./models/Mission"),
    UserPath: require("./models/UserPath"),
}

module.exports = {
    connect,
    disconnect,
    ...models,
}