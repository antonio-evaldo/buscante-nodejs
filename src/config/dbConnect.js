import mongoose from "mongoose"

mongoose.connect("mongodb+srv://laisurano:JaMllzAVRVV4D0rp@cluster0.qrcblmj.mongodb.net/alura-node");

let db = mongoose.connection;
export default db;