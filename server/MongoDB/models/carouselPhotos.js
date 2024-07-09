import mongoose from "mongoose";

const carouselSchema=new mongoose.Schema({
    url:String
});

export const photos=mongoose.model("photos",carouselSchema);
