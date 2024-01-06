//import mongoose
const mongoose = require('mongoose');

//Access mongo db url
const dotEnv = require('dotenv');
dotEnv.config();

const MONGODB_URL = process.env.MONGODB_URL;

const db = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URL);
        console.info(`Mongo DB Connected to: ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB Connect Error", error);
    }
}

module.exports = db;