import mongoose from "mongoose";

mongoose.connect('mongodb://user:pass@localhost:port/database')

let db = mongoose.connection;

export default db;