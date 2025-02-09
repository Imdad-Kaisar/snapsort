import express from 'express';
import connectToMongo from './config/db.js';
import dotenv from "dotenv";
import galleryRoutes from './routes/gallery.js';
import cors from 'cors';

dotenv.config();

const app =express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/", galleryRoutes);
app.use(express.static("public/upload"));

const PORT= 8000;

connectToMongo();

app.listen(PORT, ()=>{
    console.log(`api is running on http://localhost:${PORT}`)
});