import express from 'express';
import { photos } from '../MongoDB/models/carouselPhotos.js';

const router=express.Router();
router.use(express.json({ limit: '50mb' }));

router.get("/", async (req,res)=>{
    try{
        const getPhotos=await photos.find({});
        return res.json(getPhotos);
    }catch (error) {
        res.status(500).send('Error fetching users: ' + error.message);
    }
})

router.post("/carousel",async (req,res)=>{
    console.log(req.body);
    const getPhotos=await photos.create({
        url: req.body.avatar
    });
    console.log(getPhotos);
    return res.status(201).json({msg:"success"});
})

export default router;