import mongoose from "mongoose";

mongoose.connect("mongodb+srv://diego:1qazxsw2@cluster0.ko2ma5z.mongodb.net/alura");

let db = mongoose.connection;

export default db;