//jshint esversion:6

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended:true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended:true }));
app.use(cors());

app.use("/posts", postRoutes);

//setup



const CONNECTION_URL = "mongodb+srv://cdh616x:Lyr1c%40%40%40@cluster0.sstqy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})//use for connecting to Mongo Atlas database
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}!`)))
  .catch((error) => console.log(error.message));

//mongoose.set({useFindAndModify: false});
