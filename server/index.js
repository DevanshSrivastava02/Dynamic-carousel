import { connectDB } from './MongoDB/connect.js';
import router from './routes/imageUpload.js';
import express from 'express';
import cors from 'cors';

const app=express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use("/",router);

try{
    connectDB('mongodb://127.0.0.1:27017/dynamic-carousel');

    const PORT= 5000;

    app.listen(PORT, function(){
        console.log(`Server started at port ${PORT}`);
    });
}
catch(err){
    console.log(err);
}